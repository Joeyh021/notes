# Assembly

## Microprocessor Fundamentals

### The CPU

- The CPU controls and performs the execution of instructions
- Does this by continuously doing fetch-decode-execute cycle
- Very complex, but two key components
  - Control Unit (CU)
    - Decodes the instructions and handles logistics
  - Arithmetic Logic Unit (ALU)
    - Does maths

### Fetch-Decode-Execute

- Three steps to every cycle
  - Fetch instructions from memory
  - Decode into operations to be performed
  - Execute to change state of CPU
- Takes place over several clock cycles

The components of the CPU that are involved in the cycle:

- ALU
- CU
- Program Counter (PC)
  - Tracks the memory address of the next instruction to be executed
- Instruction Register (IR)
  - Contains the most recent instruction fetched
- Memory Address Register (MAR)
  - Contains address of the memory location to be read/written
- Memory Data/Buffer Register (MDR/MBR)
  - Contains data fetched from memory or to be written to memory

The steps of the cycle:

- Fetch
  - Instruction fetched from memory location held by PC
  - Fetched instruction stored in IR
  - PC incremented to point to next instruction
- Decode
  - Retrieved instruction decoded
  - Establish opcode type
- Execute
  - CU signals the necessary CPU components
  - May result in changes to data registers, ALU, I/O, etc

### The 68008

The 68008 is an example of a CPU. The "programmer's model" is an abstraction that represents the internals of the architecture. The internal registers as shown below are part of the programmer's model.

![](./img/68k.png)

- Internal registers are 32 bits wide
- Internal data buses are 16 bit wide
- 8 bit external data bus
- 20 bit external address bus
- D0-D7 are 32 bit registers used to store frequently used values
  - Can be long (32 bits), word (16 bits), or byte (8 bits)
- Status register (CCR) consists of 2 8-bit registers
  - Various status bits are set or reset depending upon conditions arising from execution
- A0-A6 are pointer registers
- A7 is system stack pointer to hold subroutine return addresses
- Operations on addresses do not alter status register/ CCR
  - Only ALU can incur changes in status
- The stack pointer is a pointer to the next free location in the system stack
  - Provides temporary storage of state, return address, registers, etc during subroutine calls and interrupts

The diagram shows the internal architecture of the CPU, and how the internal registers are connected via the buses. Note how and which direction data moves in, as indicated by the arrows on the busses.

![](./img/68k-2.png)

## Register Transfer Language

The fetch-decode-execute cycle is best described using Register Transfer Language (RLT), a notation used to show how data moves around the internals of a processor and between registers.

- For example `[MAR] <- [PC]` denotes the transfer of the contents of the program counter to the memory address register
- Computer's main memory is called Main Store (MS), and the contents of memory location `N` is denoted `[MS(N)]`
- RLT does not account for the pipelining of instructions
- Fetching an instruction in RTL:
  - `[MAR] <- [PC]`
    - Move contents of PC to MAR
  - `[PC] <- [PC] + 1`
    - Increment PC
  - `[MBR] <- [MS([MAR])]`
    - Read address from MAR into MBR
    - Fetched instruction from memory
  - `[IR] <- [MBR]`
    - Load instruction into IR
  - `CU <- [IR(opcode)]`
    - Decode the instruction

## Assembly Language

- Assembly is the lowest possible form of code
- High level code (for example C) is compiled to assembly code
- Assembly is then assembled into machine code (binary)
- Assembly instructions map 1:1 to processor operations
- Uses mnemonics for instructions, ie `MOV` or `ADD`
- Languages vary, but format tends to be similar:

```
LABEL: OPCODE OPERAND(S) | COMMENT

```

## Subroutines and Stacks

## Addressing Modes
