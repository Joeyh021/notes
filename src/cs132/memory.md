# Memory Systems

## The Memory Hierarchy

- Memory systems must facilitate the reading and writing of data
- Many factors influence the choice of memory technology
  - Frequency of access
  - Access time
  - Capacity
  - Cost
- Memory wants to be low cost, high capacity, and also fast
- As a tradeoff, we organise memory into a hierarchy
  - Allows for some high speed, some high capacity

![](./img/hierarchy.png)

- Data has to be dragged up the hierarchy
- Memory access is somewhat predictable
- Temporal locality - when a location accessed, likely the same location will be accessed again in the near future
- Spatial locality - when a location accessed, likely that nearby locations will be referenced in the near future
  - 90% of memory access is within 2Kb of program counter

### Semiconductor Memory Types

| Memory Type                         | Category      | Erasure                       | Write Mechanism        | Volatility   |
| ----------------------------------- | ------------- | ----------------------------- | ---------------------- | ------------ |
| Random Access Memory (RAM)          | Read-Write    | Electronically, at byte-level | Electronically written | Volatile     |
| Read Only Memory (ROM)              | Read only     | Not possible                  | Mask Written           | Non-volatile |
| Programmable ROM (PROM)             | Read only     | Not possible                  | Electronically written | Non-volatile |
| Erasable PROM (EPROM)               | Read (mostly) | UV light at chip level        | Electronically written | Non-volatile |
| Electrically Erasable PROM (EEPROM) | Read (mostly) | Electronically, at byte-level | Electronically written | Non-volatile |
| Flash Memory                        | Read (mostly) | Electronically, at byte-level | Electronically written | Non-volatile |

- Particularly interested in random access
- RAM is most common - implements main store
  - nb that all types shown here allow random access, name is slightly misleading
- RAM is also volatile, meaning it is erased when de powered

## Cache

- If 90% of memory access is within 2Kb, store those 2Kb somewhere fast
- Cache is small, fast memory right next to CPU
- 10-200 times faster
- If data requested is found in cache, this is a "cache hit" and provides a big speed improvement
- **We want things to be in cache**
- Cache speed/size is often a bigger bottleneck to performance than clock speed

### Moore's Law

- As said by the co-founder of intel, Gordon Moore, the number of transistors on a chip will double roughly every 18 months
  - Less true in recent years
- Cost of computer logic and circuitry has fallen dramatically in the last 30 years
- ICs become more densely paced
- CPU clock speed is also increasing at a similar rate
- Memory access speed is improving much more slowly however

### Cache Concepts

- Caching read-only data is relatively straightforward
  - Don't need to consider the possibility data will change
  - Copies everywhere in the memory hierarchy remain consistent
- When caching mutable data, copies can become different between cache/memory
- Two strategies for maintaining parity
  - **Write through** - updates cache and then writes through to update lower levels of hierarchy
  - **Write back** - only update cache, then when memory is replaced copy blocks back from cache

### Cache Performance

Cache performance is generally measured by its _hit rate_. If the processor requests some block of memory and it is already in cache, this is a hit. The hit rate is calculated as

$$h = \frac{\text{total number of cache hits}}{\text{total number of memory accesses}}$$

Cache misses can be categorised:

- **Compulsory** - misses that would occur regardless of cache size, eg the first time a block is accessed, it will not be in cache
- **Capacity** - misses that occur because cache is not large enough to contain all blocks needed during program execution
- **Conflict** - misses that occur as a result of the placement strategy for blocks not being fully associative, meaning a block may have to be discarded and retrieved
- **Coherency** - misses that occur due to cache flushes in multiprocessor systems

Measuring performance solely based upon cache misses is not accurate as it does not take into factor the cost of a cache miss. Average memory access time is measured as hit time + (miss rate $\times$ miss penalty).

### Cache Levels

Cache has multiple levels to provide a tradeoff between speed and size.

- Level 1 cache is the fastest as it is the closest to the cpu, but is typically smallest
  - Sometimes has separate instructions/data cache
- Level 2 cache is further but larger
- Level 3 cache is slowest (but still very fast) but much larger (a few megabytes)
- Some CPUs even have a level 4 cache

Different levels of cache exist as part of the memory hierarchy.

## Memory Organisation

- RAM memory used to implement main store
- Static RAM (SRAM) uses a flip-flop as the storage element for each bit
  - Uses a configuration of flip-flops and logic gates
  - Hold data as long as power is supplied
  - Provide faster read/write than DRAM
  - Typically used for cache
  - More expensive
- Dynamic RAM (DRAM) uses a capacitor, and the presence to denote a bit
  - Typically simpler design
  - Can be packed much tighter
  - Cheaper to produce
  - Capacitor charge decays so needs refreshing by periodically supplying charge
- The interface to main memory is a critical performance bottleneck

## Error Correction
