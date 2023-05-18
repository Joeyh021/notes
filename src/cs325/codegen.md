# Codegen

Want to take IR and output assembly that is semantically equivalent.

- The main tasks involved are:
  - Instruction selection
  - Register allocation
  - Instruction ordering/scheduling

It is undecidable what the optimal program for any given IR is - we use heuristics.

## Instruction selection

- Just translate each IR instruction to one or more machine code instructions
  - Not very efficient
  - Simple to implement but results in repeated loads/stores
- Keep track of values in registers to avoid unnecessary loads/stores
- Consider each instruction in turn
  - Work out what loads are needed
  - Generate code for loads
  - Generate code for operation
  - Generate code for stores
- Need to keep track of registers and memory locations for variables
  - Register descriptor - (register, variable name) pairs
  - Address descriptor - (variable name, location) pairs
    - Location can be a register, memory address, stack location, etc
- Need some criteria for selecting registers
  - If var currently in a register then no load needed
  - If var not in a register then pick an empty one
  - If y not in register and no empty ones then need to pick one to reuse
    - Make sure that the value we reuse is either not needed or stored elsewhere
- Statement-by-statement codegen can be optimised with peephole optimisations
  - Load/store pairs of the same instruction can be eliminated
    - Only works if instructions are in same basic block
  - Remove jumps over jumps
    - useful in combination with constant propagation
    - eg, removing debug info
  - Flow control optimisations
    - jumps-to-jumps can be eliminated
  - Algebraic optimisations
    - Eliminate instructions like `x = x + 0`
  - Use of machine idioms
    - target machine may have auto-increment addressing mode
    - May have instructions that implement complex operations

## Optimal codegen from ASTs

- Can use the AST of an expression to generate an optimal code sequence
- Proven to generate shortest sequence of instructions
- Uses Ershov numbers
  - Label any leaf `1`
  - Label of interior node with one child is the label of it’s child
  - Label of an interior node with two children is
    - Larger of the labels of it’s children **if** labels differ
    - One plus the label of its children **if** labels same
  - Label of node is the least number of registers in which expression can be evaluated using no stores of temporary results
- Can generate code from labelled expression tree
  - Start at root of tree
  - Registers used are$R_{b+1}...R_{b+k-1}$
  - For a node with label $k$ and two children with equal labels
    - `gencode(right child)` using base register $b+1$
      - Result appears in $R_{b+k-1}$
    - `gencode(left child)` using base register $b$
      - Result appears in $R_{b+k-2}$
    - Generate instruction `OP` $R_{b+k-1}, R_{b+k-2}, R_{b+k-1}$
  - To generate code for interior node with unequal labels
    - `gencode(big child)` using base register $b+1$
      - result appears in$R_{b+k-1}$
    - `gencode(small child)` using base register b
      - result appears in $R_{b+k-2}$
  - Evaluating expressions with insufficient register supply means you need extra memory
    - Spill from registers into memory
    - For interior node with label $k >$ number of registers, work on each side of tree separately and store result in larger subtree
    - Generate stores after code to eval registers for big child

## Tree Rewriting

- Above algorithm works with RISC instruction sets but CISC instruction sets allow steps to be condensed into one instruction
- Treat instruction selection as a tree rewriting problem
- Machine instructions implement fragments of IR trees
  - Match tree patterns with instructions
  - `ind` operator is dereferencing, $Ca$ is offset
  - Attempt to tile the subtree
    - Tiles are set of tree patterns that correspond to legal machine instructions
    - Cover the tree with non-overlapping tiles
    - If template matches, matching subtree is replaced with replacement node of rule and machine instruction emitted
  - Has it's issues
    - Often multiple possibilities
      - Best tiling corresponds to shortest sequence of instructions
    - If none matches then process blocks
    - Need to guard against possibility of single node being rewritten indefinitely
  - Optimal tiling - maximal munch
    - Start at root
    - Find largest tile that covers root node
    - Generate that instruction
    - Goto step 1
    - Generates instructions in reverse order
  - Optimum tiling - dynamic programming
    - Bottom up rewrite system
    - Omitted for sanity

## Register allocation

Decide what to keep in registers and what in memory

- Efficient register use is important
- When code has more live values than registers, spill to memory
  - this is costly
- Register allocation is NP complete
- Register assignment can be solved in polynomial time
- Can re-order instructions based on dataflow to optimise register assignment and reduce spill

### Graph colouring

- Allocate based on liveness
- Works accross basic blocks
- Steps:
  - Compute live variables for each point in program
  - Generate an interference graph
    - Each variable becomes a node
    - If variables are live at the same time then make an edge connecting them
      - They cannot be in the same register
  - Colour the graph
    - Nodes connected by edge cannot be the same colour
    - A k-colourable graph uses no more than k registers
    - NP hard too, use heuristics
    - Algorithm to colour graph $G$ with $k$ colours - Chaitin’s algorithm
    - Step 1:
      - While $G$ has some node $t$ with neighbours less then $k$
      - Pick a node $t$ with less than $k$ neighbours
      - Put $t$ on stack and remove from $G$
      - Repeat until $G$ is empty
      - If all nodes removed then graph k-colourable, else no
      - Step 2 - assign colours to nodes
        - Start at top of stack
        - Add node on stack top to graph including edges
        - Pick a new colour
        - Repeat until stack empty
- If colouring not found then have to spill to memory
  - Will occur when each node has $k$ or more neighbours
  - Pick candidate node for spilling and remove from graph, continue as before
    - Have to insert loads/stores for spilled node
    - Which one to spill? Any is fine but affects performance
      - Spill those with most conflicts
      - Spill those with few uses
      - Avoid spilling in loops
