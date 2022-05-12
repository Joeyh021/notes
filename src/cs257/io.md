# I/O

## I/O Mechanisms

- Programmed I/O is a mapping between I/O-related instructions that the processor fetches from memory and commands that the processor issues to I/O modules
  - Instruction forms depend on addressing policies for external devices
    - Devices given a unique address
  - When a processor, main memory and I/O share a bus, two addressing modes are possible
    - Memory-mapped
      - Same addres bus used for both memory and I/O
      - Memory on I/O device mapped into the single address space
      - Simple, and can use general-purpose memory instructions
      - Portions of address space must be reserved
    - Isolated
      - Bus may have input and output command lines, as well as usual read/write
      - Command lines specify if address is a memory location or I/O device
      - Leaves full range of memory address space for processor
      - Requires extra hardware
- Most I/O devices are much slower than CPU, so need some way to synchronise
- Busy-wait polling is when CPU constantly polls I/O device for status
  - Can interleave polling with other tasks
  - Polling is simple but wastes CPU time and power
    - When interleaved can lead to delayed response
- Interrupt-driven I/O is when devices send interrupts to CPU
  - IRQs (interrupt requests) and NMIs (non-maskable interrupts)
  - Interrupt forces CPU to jump to interrupt service routine
  - Fast response, and does not waste CPU time/power
  - Complex, and data transfer still controlled by CPU
- DMA avoids CPU bottleneck by speeding up transfer of data to memory
  - Used where large amounts of data needed at high speed
  - Control of system busses surrendered to DMA controller
    - DMAC can use cycle stealing or force processor to suspend operation in burst mode
  - DMA can be more than 10x faster than CPU-driven I/O
  - Involves addition of dedicated hardware on the system bus
  - Can have single Bus with a detached DMA, where all modules share the bus
  - Can connect I/O devices directly to DMA, which reduces bus cycles by integrating I/O and DMA functions
  - Can have separate I/O bus, DMA connected to system and I/O bus, devices connected to I/O bus
- Thunderbolt is a general purpose I/O channel developed by Apple and Intel
  - Combines data, audio, video, power into single high speed connection (up to 10Gbps)
  - Based on thunderbolt controller, high speed crossbar switch]
- Infiniband is an I/O spec aimed at high-end servers
  - Intended to replace PCI in servers
  - Provides remote storage, networking, connection
  - Scalable and can add nodes as required
- PCIe is a serial interconnect between two devices
  - Expansion bus standard
  - Based on a number of signal lanes
  - Packet based with a high bandwith

## RAID

## Request Level Parallelism
