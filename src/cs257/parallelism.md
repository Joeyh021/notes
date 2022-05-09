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

## Data Level Parallelism

## Multicore Systems

## Thread Level Parallelism

## High Performance Systems
