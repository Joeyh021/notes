# FPGA Design Flow

How do you go from HDL to a circuit? The key development was tools that could take HDL and generate a circuit automatically. Design flow is the process by which we specify and design a system all the way through to implementation.

## The Design Process

- Design is always informed by a specification
  - What does the circuit do?
  - What I/O does it need?
  - Performance requirements
  - Space/Power budget
  - Edge cases
- This is the most important stage as it defines what the design will be verified against
  - Also influences the choice of target architecture
  - Errors in interpretation of the specification/requirements can cause issues
- Next is design entry
  - Writing the actual HDL files
  - Modules and sub-modules are defined
  - I/O is defined
- There are two main aspects to architecture design
  - The **datapath**, logic that acts on data to compute the required functions
  - The **control path**, logic that manages the movement of data and controls the datapath
- Functional verification is performed throughout the design process
  - It is important to verify that the HDL meets the specification
  - Usually start at the lowest level modules and move up
  - This is an iterative process, and testing should be continuous
- **Synthesis** is the process by which the design is converted into circuits
  - Lots of optimisation goes on at this stage
  - Combinational logic is minimised
  - Arithmetic operators are expanded into primitive operations
  - Basic structures like memories, multiplexers, decoders are inferred
- The result of synthesis is a **netlist**, a low-level representation of the circuit using basic blocks
- **Mapping** takes the netlist and works out how to build it on the target architecture
  - For ASIC design, each node in the netlist is mapped to cells from a cell library
  - For FPGA design, each node is mapped to resources available on the FPGA
    - Maps combinational logic to LUTs
    - Synchronouse components mapped to flip-flops
    - Arithmetic mapped to ALUs or DSPs
  - This gives an architecture-specific netlist
- Synthesis verification checks the circuit is valid
  - Checks circuit fits on FPGA
  - Estimates timing, power usage, performance
- **Place and Route** is when the netlist is mapped onto specific locations on the FPGA, and routing is configured to connect the blocks
  - Often multiple iterations are needed to get it right
- Timing verification checks timing constraints have been met
- The **bitstream** is a file that is loaded onto the FPGA that tells it how to configure itself

## Intellectual Property

- IP cores are premade designs
- Implementing complex hardware is pointless when you can re-use other modules
- Similar to software libraries
- Lots of open source cores are available online
- Vendors and FPGA companies sell IPs
- Good IP works as a black-box
  - Well-defined
  - Configurable
  - Thoroughly tested and verified
  - Provided with data sheets like any other piece of hardware
