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
      - Instruction pre-fetch buffers, which fetches both branches
        - Complex and rarely used
      - Pipeline freeze strategy, which freezes the pipeline when it receives a branch instruction
        - Simple, but poor performance
      - Static prediction leverages known facts about branches to guess which one is taken
        - 60% of all branches are taken, so may be better to predict this
        - However to not take wastest less pipeline cycles so average performance may be better
      - Dynamic prediction predicts on the fly for each instruction
        - Based on branch instruction characteristics, target address characteristics, and branch history
  - Data hazards, where an instruction depends on the result of a previous instruction that has not yet completed
- Pipeline clock period is determined by the slowest stage, usually execution
  - Pipeline execution unit separately or have multiple execution units
- Sometimes useful to add feedback between stages (recursion), where the output of one stage becomes the input to a previous one
  - Used in accumulation
- Alternative designs are always possible, which come with their own performance tradeoffs
- Space-time diagrams show pipeline usage
  - Efficiency $E_n$ = (busy area)/(total area)
    - Speedup $S(n) = n E_n$
  - More generally, $S(n) =\frac{nN}{N + (n-1)}$
    - $n$ is number of stages, $N$ is instructions executed
    - As $N \to \infty$, $S(n) \to \n$
- Complex pipelines with feedback and differently clocked stages can be difficult to design and optimise

  - Reservation tables are space-time diagrams that show where data can be admitted to the pipeline
    - `X`s in adjacent columns of the same row show that stages operate for more than one clock period
    - More than one `X`s in a row not next to each other show feedback
    - Pipelines may not accpet initiations at the start of every clock period, or collisions may occur
      - Potential collisions shown by the distance in time slots between `X`s in each row
  - Collision vector is derived from the distance between `X`s
    - $C = C_{n-1} C_{n-2} ... C_2 C_1 C_0$
      - $C_0 = 1$, always
    - $C_i = 1$ if a collision would occur with an initiation $i$ cycles after a previous initiation
    - The initial collision vector is the state of the pipeline after the first initiation
      - Distances between all pairs of `X`s in each row, if distance is $i$ then set bit
  - Need a control mechanism to determine if new initiations can happen without a collision occurring
    - Latency is the number of clock periods between initiations
    - Average latency is the number of clock periods between initiations over some repeating cycle
    - Minimum average latency is the smallest possible considering all possible sequences of initiations
      - The goal for optimum design
    - A pipeline changes state as a result of initiations, so represent activity as a state diagram
      - A diagram of all pipeline states and changes starting with the initial collision vector
      - Shifting the collision vector to the right gives the next state
        - If shifted vector has $C_0 = 1$, cannot initiate
        - If $C_0=1$, then can do new initiation, new vector is bitwise OR of shifted vector and initial vector
      - State diagram can be reduced to show only changes where initiations are taken
        - Numbers on edges indicate number of clock periods to reach the next tate shown
        - Can identify cycles in graph
  - Always taking initiations when $C_0 = 0$, to give minimum latency is the greedy strategy
    - Will not always give minimum average latency but is close
    - Often more than one greedy cycle
    - Average latency for a greedy cycle is less than or equal to the number of 1s in the initial collision vector
      - Gives an upper bound on latency
    - Minimum average latency is greater than or equal to the max number of `X`s in any reservation table row
      - Gives a lower bound on latency
    - Max `X`s in row $<=$ min avg latency $<=$ greedy cycles avg latency $<=$ number of 1s in the initial collision vector
  - A given pipeline may not give the required latency, so insert delays into the pipeline to expand the number of time slots and reduce collisions
  - Can identify where to place delays to give a latency of $n$ cycles: -
    - Start with the first `X`, enter an `X` in a revised table and mark as forbidden every $n$ cycles, to indicate the positions are reserved for initiations
    - Repeat for all `X`s until `X` falls on a forbidden mark, then delay the `X` by one or more
    - Mark all delayed positions and delay all subsequent `X`s by the same amount
  - Delays can be added using a latch to delay by a cycle

Honestly just check the slides and examples for this one it makes zero sense lol

## Superscalar Processors

## Instruction Level Parallelism
