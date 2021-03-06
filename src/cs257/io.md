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

- RAID: Redundant Array of Independent Disks
- As performance increased there was a need for larger and faster secondary storage, and one solution is to use disk arrays
- Two general ways to utilise a disk array
  - **Data striping** transparently distributes data over multiple disks to make the appear as a single large disks
    - Improves I/O performance by allowing multiple requests to be serviced in parallel
      - Multiple independent requests can be serviced in parallel by separate disks
      - Single, multi-block requests can be serviced by disks acting in coordination
    - More disks = more performance
  - **Redundancy** duplicates data accross disks
    - Allows continuous operation without data loss in case of a disk failure in an array
- RAID 0 - non-redundant striping
  - Lowest cost as there is no redundancy
  - Data is striped accross all disks
  - Best write performance as no need to duplicate data
  - Any 1 disk failure will result in data loss
  - Used where performance is more important than reliability
- RAID 1 - mirrored
  - 2 copies of all info is kept, on separate disks
  - Uses twice as many disks as a non-redundant array, hence is expensive
  - On read, data can be retrieved from either disk, hence gives good read performance
  - If a disk fails, another copy is used
  - Data can also be striped as well as mirrored, which is RAID 10
- RAID 2 - redundancy through Hamming codes
  - Very small stripes are used, often single byte or word
  - Employs fewer disks than mirroring by using Hamming codes, error correction codes that can correct single-but errors and detect double-bit errors
  - Number of redundant disks is proportional to the log of the total number of data disks in the system
  - On a single write, all data and parity disks must be accessed
  - Read access not slowed as controller can detect and correct single-bit errors
  - Overkill and not really used, only effective when lots of disk errors
- RAID 3 - bit-interleaved parity
  - Parallel access, with data in small strips
  - Bit parity is computer for the set of bits in the same position on all data disks
  - If drive fails, parity accessed and data reconstructed from remaining devices
  - Only one redundant disk required
  - Can acheive high data rates
  - Simple to implement, but only one I/O request can be executed at a time
- RAID 4 - block-interleaved parity
  - Data striping used, with relatively large strips
  - Bit-by-but parity calculated accross corresponding strips on each data disk, parity bits stored in the corresponding strip on parity disk
  - Involves a write penalty for small I/O requests
    - Parity computed by noting differences between old and new data
    - Management software mut read old data and parity, then update new data and parity
  - For large writes that touch all blocks on all disks, parity computed by XORing the data for each new disk
  - Parity disk can become bottleneck
- RAID 5 - block-interleaved distributed parity
  - Eliminates parity disk bottleneck by distributing parity accross all disks
  - One of the best small read, large read, and large write performances
  - Small read requests are still inefficient compared to mirroring due to need to perform read-modify-write operations to update parity
  - Best parity distribution is left-symmetric
    - When traversing striping units sequentially, you access each disk once before accessing any disk twice, which reduces disk conflicts when servicing a large request
  - Commonly used in file servers, most versatile RAID level
- RAID 6 - dual redundancy
  - Multiple disk failures require a stronger code than parity
  - When disk fails, requires
  - One scheme, called P + Q redundancy, uses Reed-Soloman codes to protect against up to two disk failures using a bare minimum of two redundant disks
  - Three disks need to fail for data loss
  - Significant write penalty, but good for mission-critical applications
- SSDs use NAND flash.
  - Becoming more popular as cost drops and performance increases
  - High performance I/O
  - More durable than HDDs
  - Longer lifespan, lower power consumption, quieter, cooler
  - Lower access times and latency
  - Still have some issues
    - Performance tends to slow over the device's lifetime
    - Flash becomes unusable after a certain number of writes
    - Techniques exist for prolonging life, such as front-ending drive with cache and being used in RAID arrays
- Storage area networks are for sharing copies of data between many users on a network so anyone can access
  - Must protect against:
    - Drive failures - use RAID
    - Power failures - have redundant power supplies (UPS)
    - Storage controller failures - have dual active controllers
    - System unit failures - controllers connect to multiple hosts
    - Interface failures - have redundant links
    - Site failures - keep backups offsite
  - Flash copies produce an instantaneous copy while an application is running, eg for online backups
    - Use a copy-on-write algorithm
  - Remote copies are maintained at secondary sites for disaster recovery
    - Can use synchronous copy, where data is copied before each command executed on host, keeping secondary copy always in sync
    - Asynchronous copy is done after host executes command, which means data lags but is much more scalable and does not impact host performance

## Request Level Parallelism

- Request level parallelism is an emphasis on independence of user requests for computational service
  - Emphasis is on use of commodity hardware to provide parallelism at scale and capacity
- Applicable when provisioning resources at large scale
  - Internet services
  - Corporate infrastructure
  - The Cloud
- Exploited in data centres and warehouse-scale computer systems
- Internet services are sustained by such systems
  - Cloud computing founded on this premise
  - Presents system design challenges
    - Designing for scale and reliability
    - Implementation and operation at scale
    - Cost/performance balance
    - Power consumption
      - Environmental responsibility
  - Common measure of data centre efficiency is power utilisation effectiveness
    - PUE = (total facility power usage) / (IT equipment power usage)
    - Must be at least 1
  - Dependability is key - services typically are designed to run indefinitely
    - Typical to pursue 99.99% uptime, less than 1hour down per year
    - Can be realised through redundancy in temporal and spatial domains
    - Usually achieved through replication of affordable hardware
  - Network I/O is key, servers and warehouse systems must provide consistent network interface
  - Must be able to support interactive and varying/unpredictable work loads
  - Support must be provided for batch processing (likely highly data-parallel)
  - Magnitude of parallelism must be considered to ensure that parallelism provided by hardware is justified
    - Can support both data and request level parallelism
  - Operational cost must be considered
    - High performance servers often designed with best performance in mind
    - Warehouses must be designed with longevity and efficiency in mind
  - Exploiting economies of scale allows cloud providers to provide software and infrastructure as services
- Infrastructure as a service is the most basic cloud service model
  - Cloud provider rents out machine and other resources
- Platform as a service makes a computing platform available to users
  - Used by clients whose focus is software
  - Underlying resources adapt to demand
- Software as a service provides access to application software in the cloud
  - Uses "dumb" clients will all the power in the cloud
  - Load balancing done in software
  - Office 365 is prominent example
- Network as a service refers to cloud providers allowing infrastructure to be used as a network/transport layer
- Batch provessing workloads for warehouse-scale systems typically involve things like video transcode or search engine indexing
  - MapReduce is a prominent example of how warehouse systems can necessitate alternative programming models
    - Maps a function over each item of the input
    - Exploits data-level parallelism
    - Then collects outputs (reduces) using another function as an aggregation
    - Generalisation of SIMD followed by a reduction
- Servers often fitted with local storage, and rely on ethernet-based exchange of data
  - Potential latency penalties when crossing the local rack switch
  - Alternative is network attached storage
    - Can employ high-speed interconnect
