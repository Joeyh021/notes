# Processor Architecture

## CPU Organisation & Control

- Processor continuously runs fetch-decode-execute cycle
  - Each instruction cycle take several CPU clock cycles
  - Requires interaction of lots of CPU components
    - ALU, CU, PC, IR, MAR, MDR
  - Machine instructions may specify
    - Op code
    - Source operand reference
    - Result operand reference
    - Next instruction reference
  - Some CPU registers are user-visible, such as data and address registers
  - Control and status registers are used by CU and privileged OS processes only
  - Executing an instruction may involve one or more operands, each requiring to be fetched
    - Can account for this in instruction cycle model known as **indirect cycle**
- Instruction pipelining allows to use wasted time, as new inputs can be accepted before previously accepted instructions and been output
- Control unit is responsbible for generating control signals to drive cycle
  - Observe opcode input and choose right control signal - decode
  - Assert control signals - execute
  - Two approaches to CU design:
    - Hardwired
      - Uses a sequencer and a digital logic circuit that produces outputs
      - Fast but limited by complexity and inflexibility
    - Microprogrammed
      - Uses a microprogram memory
      - Has it's own fetch-execute cycle - mini computer in the CPU
        - Microaddress, MicroPC, MicroIR, microinstructions
      - Easy to design, implement, flexible, can be reprogrammed
      - Slower than hardwired
- Instruction sequencing is important to be designed to utilise as many memory cycles as possible, possibly by overlapping fetches
  - Proper sequence must be followed in sequencing control signals, to avoid conflicts
    - MAR <- PC must precede MBR <- Memory
- Micro-ops are enabled by control signals to transfer data between registers/busses and perform arithmetic or logical operations
  - Each step in the operation of a larger machine instruction is encoded into a micro-instruction
  - Micro-instructions make up the micro-program
  - Micro-program word length is based on 3 factors:
    - The max number of simultaneous micro-ops supported
    - How control info is represented/encoded
    - How the next micro-instruction address is specified
  - Horizontal/direct control has very wide word length with few micro-instructions per machine instruction
    - Outputs buffered/gated with timing signals
    - Fewer instructions == faster
  - Vertical control uses narrower instructions with $n$ control signals encoded into $\log_2 n$ bits
    - Limited ability to express parallelism
    - Requires external decoder to identify what control lines are being asserted

## Performance

- M J Flynn in 1966 defined a simple means of classifying machines, SISD is one such classification
  - Uses fetch-decode-execute
  - Fetch sub-cycle is fairly constant-ish speed
  - Execute sub-cycle may vary in speed greatly
- A simple measure of performance is MIPS, millions of instructions per second
  - Not actually that useful as it measures how fast a processor can do nothing
- Parallel performance is very difficult to measure due to system architecture and degree of parallelism varying
- Instruction bandwith measures the instruction execution rate, similar to MIPS
- Data bandwith measured in FLOPS measures the throughput
- It is nigh-on impossible to get full theoretical throughput in any system, especially parallel
- Speedup is a useful measure that factors in the degree of parallelism
  - $S(n) = $(Execution time on sequential machine, $T(1)$) / (Execution time on parallel machine, $T(n)$)
  - A closeley related measure is efficiency, $E_n = S(n)/n$
  - Both measures depend on parallelism of algorithm
- An algorithm may be characterised by it's degree of parallelism $n_i$, which is the degree of parallelism that exists at time $i$
- Assume all computations are of two types, vector operations of length $N$ and scalar operations where $N=1$
  - $f$ is the total proportion of scalar ops, so $1-f$ is the measure of parallelism in the program
  - $b_v$ is the throughput of vector ops in MFLOPS and $b_s$ is the scalar throughput
    - Average throughput $\frac{1}{b} = \frac{f}{b_s} + \frac{1-f}{b_v}$

## Pipelining

- The problem with an instruction/execute pipeline is contention over memory access
  - Overcome with interleaved memory
- Two possible methods of controlling the transfer of information between pipeline stages
  - Asynchronously using handshake signals
    - Most flexible, max speed determined by slowest stage
  - Synchronously, where there are latches between each stage all synced to a clock
- Example 5-stage I/E pipeline: fetch instruction, decode instruction, fetch operands, execute instruction, store results
- Pipelining assumes the only interaction between stages is the passage of information, but there are 3 major things that can cause hazards and stall the pipeline
  - Structural hazards, resource conflicts where two stages wish to use the same resource, ie a memory port
    - Interleave memory or prefetch data into cache
  - Control hazards occur when there is a change in order of execution of instructions, eg when there is a branch or jump
    - Cause the pipeline to stall and have to refill it
    - Strategies exist to reduce pipeline failures due to conditional branches

## Superscalar Processors

## Instruction Level Parallelism
