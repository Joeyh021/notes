# Parallelism

## Parallel Organisation

- Flynn's Taxonomy:
  - SISD
    - Standard uniprocessor stuff
  - SIMD
    - Vector/Array Processors
    - Single machine instruction executes on a number of processing elements in lockstep
  - MISD
    - Not really used
  - MIMD
    - Distributed memory systems (cluster-based)
      - Communicate via message passing, very scalable
    - Shared memory systems
      - Communicate via memory and are easy to program but memory contention can happen
      - Symmetric multiprocessors
      - NUMA
- Vector computers employ lots of arithmetic pipelines for SIMD processing
  - Instructions operate on vectors of numbers (one or two dimensional)
  - One operation specified for all elements of the vector
  - 2 main types of architecture:
    - memory-to-memory
    - register-to-register (specific vector registers)
  - Chaining often used - chain pipelines together for operations such as FMA
    - Connect inputs/outputs via crossbar switches
  - SIMD array computers had good performance for specific applications, but they're old and no-one makes them anymore
    - Special set of instructions broadcast to processing elements for execution
  - Array computer are dead but MMX, SSE, AVX are big in x86
  - ARM has NEON coprocessor, a 10-stage SIMD pipeline
- Interconnection structure are important in allowing data or memory to be shared
  - In distributed memory systems, communication is in software via ethernet or infiniband
  - More efficient interconnects are needed to share memory
    - A shared bus allows processor and memory to share a communication network
      - Need to resolve bus contention issues
      - Poor reliability
      - Only good for small systems
    - A cross-bar switch matrix uses a matrix of interconnects
      - Functional units require minimal logic
      - Switch is complex, large and costly
      - Potentially high bandwith, but still struggles with contention
    - Static links between each processor enable dedicated communication
      - More links -> better communication rate
      - Different patterns have different performance properties
      - Chosen architecture of links usually is a tradeoff between cost and performance
        - Hypercube is a good balance
        - Number of connections and links per node are a good indication of cost
        - Maximum inter-node distance is an indicator of worst-case communication delay
      - Can have a dedicated link for each pair but that's expensive and rarely necessary
  - Multistage switching networks can be either cross-bar or cell-based
    - Requirement is to connector each processor to any other processor
      - Known as the full access property
    - Another useful property is that connections are non-blocking
    - CLOS networks (multi-stage cross-bar switches) showed that a network with 3 or more stages can be non-blocking
    - A CLOS network with 2x2 cross-bar elements is known as a Benes Network, classified as cell-based
      - Most cell-based networks are highly blocking but require few switches

## Cache Coherence

- Shared memory MIMD systems are easy to program, and can overcome memory contention via cache
- Copies of the same data may now be in different places
  - Cache coherence must be maintained
  - A write-through policy is not sufficient as that only updates main memory
  - It is necessary to update other caches too
- Possible solutions include:
  - Shared caches
    - Poor performance for more than a few processors
  - Non-cacheable items
    - Can only write to main memory, causes problems
  - Broadcast write
    - Every cache write request is broadcast to all other caches
    - Copies either updated or invalidated, preferably the latter as it is faster
    - Increases memory transactions and wastes bus bandwidth
  - Snoop bus
    - Suitable for single-bus architectures
    - Cache write-through is used
    - A bus watcher (cache controller) is used and snoops on the system bus
      - Detects memory write operations, and invalidates local cached copies if main memory updated
  - Directory methods
    - A directory is a list of entries identifying cached copies
      - Used when a processor writes to a cached location to invalidate or update other copies
    - Various methods exist
    - Suitably for shared memory systems with multistage or hierarchical interconnects where broadcast systems are hard to implement
    - Full directory has a directory in main memory
      - A set of pointers per cache and a dirty bit is used with each shared data item
      - Bit set high if cache has a copy
      - Each word/block/line in cache has two state bits:
        - Valid bit, set if cache data is valid
        - Private bit, set if processor is allowed to write to the block
    - Limited directories only stored pointer for the number of caches that have the data
      - Saves memory storing pointers for caches that don't have data
      - Only $n$ pointers required, but each pointer must uniquely identify one of the $N$ caches
        - $\log_2 N$ pointers required for each pointer instead of 1 bit
      - Requires $n \log_2 N$ bits instead of $N$ bits
      - Scales much better as entries grow less than linearly
    - Chained directories also attempt to reduce the size of the directory
      - Use a linked list to hold directory items
      - Shared memory directory entry points to one copy in a cache, from there a pointer points to next copy, so on..
      - $N$ copies may be maintained
      - Whenever a new copy called for, list broken and pointers altered
- MESI is the good protocol
  - Snoop bus arrangement used with a write-back policy
  - Two status bits per cache line tag so it can be in one of four states
    - Modified: entry valid, main memory invalid, no copies exist
    - Exclusive: no other cache holds line, memory up to date
    - Shared: multiple caches hold line, memory is up to date
    - Invalid: cache entry is garbage
  - When machine booted, all entries are invalid
  - First time memory is read, block referenced is fetched by CPU 1 and marked exclusive
    - Subsequent reads by same processor use cache
  - CPU 2 fetches same block
    - CPU 1 sees by snooping it is no longer alone and announces it has a copy
    - Both copies marked shared
  - CPU 2 wants to write to the block
    - Puts invalidate signal on bus
    - Cached copy goes into modified state
    - If block was exclusive, no need to signal on bus
  - CPU 3 wants to read block from memory
    - CPU 2 has the modified block, so tells 3 to wait while it writes it back
  - CPU 1 wants to write a word in the block (cache)
    - Assuming fetch on write, block must be read before writing
    - CPU 1 generates a Read With Intend To Modify (RWITM) sequence
      - CPU 2 has a modified copy so interrupts the sequence and write to memory, invaliding it's own copy
      - CPU 1 reads block from memory, updates it and marks it modified
  - All read hits do not alter block state
  - All read misses cause a change to shared state
- Intel and AMD took different approaches to extending MESI
  - Intel uses MESIF
    - Forward state is a specialised shared state
    - Serving multiple caches in shared state is inefficient, so only the cache with the special forward state responds to requests
      - Allows cache-to-cache speeds
  - AMD uses MOESI
    - Owned state is when a cache has exclusive write rights, but other caches may read from it
      - Changes to line are broadcast to other caches
    - Avoids writing dirty line back to main memory
      - Modified line provided from the owning cache

## Data Level Parallelism

## Multicore Systems

## Thread Level Parallelism

## High Performance Systems
