# Memory Systems

## Main Memory

- We have a memory hierarchy to balance the tradeoff between cost and speed
- Want to exploit temporal and spatial locality
- Moore's law is long dead and never really applied to memory
- The basic element of main memory is a memory cell capable of being written or read to
  - Need to indicate read/write, data input, and also an enable line
- When organising memory cells into a larger chip, it is important to maintain a structure approach and keep the circuit as compact as possible
  - For example, a 16 word x 8 bit memory chip requires 128 cells and 4-bit addresses
  - A 1024 bit device as a 128x8 array requires 7 address pins and 8 data pins
    - Alternatively, it is possible to organise it as a 1024x1 array, which would be really dumb as it would result in a massive decoder and inefficient space usage
  - Dividing the address inputs into 2 parts, column and row address, minimise the decoder space and allows more space for memory
- Can use the same principle to build smaller ICs into larger ICs, using decoders/multiplexers to split address spaces
- Semiconductor memory is generally whats used for main store, Random Access Memory
- Two main technologies:
  - Static RAM (SRAM) uses a flip-flop as a storage element for each bit
  - Dynamic RAM (DRAM) uses the presence or lack of charge in a capacitor for each bit
    - Charge leaks away over time so needs refreshing, but DRAM is generally cheaper if the overhead of the refresh circuitry is sufficiently amortised
  - SRAM typically faster so is used for cache
  - DRAM used for main memory
- The interface to main memory is always a bottleneck so we can do some fancy DRAM organisations stuff
  - Synchronous DRAM exchanges data with the processor according to an external clock memory
    - Clock runs at the speed of the bus to avoid waiting on memory
    - Processor can perform other tasks while waiting because clock period and wait times are known
  - Rambus DRAM was used by Intel for Pentium and Itanium
    - Exchanges data over a 28-wire bus no more than 12cm long
    - Provides address and control information
    - Asynchronous and block-oriented
    - Fast because requests are issued by the processor over the RDRAM bus instead of using explicit R/W and enable signals
    - Bus propertties such as impedances must be known to processor
  - DDR SDRAM extends SDRAM by sending data to the processor on both rising and falling edge
    - Actually used
  - Cache DRAM (CDRAM) combines DRAM with a small SRAM cache
    - Performance very dependant upon domain and load
- ROM typically used in microprogramming or systems stuff
  - ROM is mask-written read only memory
  - PROM is same as above, but electrically written
  - EPROM is same as above, but is erasable via UV light at the chip level
  - EEPROM is erasable electrically at the byte-level
- Flash memory is a high speed semiconductor memory
  - Used for persistent storage
  - Limited to block-level erasure
  - Uses typically 1 transistor per bit

## Cache
