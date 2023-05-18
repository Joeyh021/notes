# Runtime Environments

We need to understand the compute or abstract machine we are generating code for.

## Program Layout

- Compilers usually assume each executing program runs in own logical address space
  - Mapped to physical addresses by OS
  - Compiler is responsible for layout and manipulation of data
- Code goes at bottom of address space, followed by static storage, followed by heap (grows up towards stack), followed by stack (grows down towards heap)
- Storage layout influenced strongly by addressing constraints
  - Alignment - 32 or 64 bit aligned?
  - Compiler inserts padding in data types
- Static (compile time) and dynamic (runtime) memory are separate
  - Stack stores static data local to procedure and sorts out call/return stuff via activation records
  - Heap storage is for long lived stuff and may involve GC
- Stack allocation assumes execution is sequential and that control flow always return to point of call
  - Allocation made possible by activations of procedure nesting in time
  - Lifetimes of activations are properly nested
    - Can use a tree to represent them
      - Sequence of procedure calls corresponds to a pre-order traversal of activation tree
      - Sequence of returns is a post-order traversal
      - Live activations are those that correspond to a node and it’s ancestors
  - Calls and returns managed by control stack - each live activation is a frame on the stack
    - Top of stack is the currently active function
    - Stack frame for a function contains
      - Temporaries
      - Local data
      - Saved machine info (registers)
      - Links: access, control, return

## Procedure Calls

Calls are implemented by calling and return sequences - code inserted by compiler to push/pop from stack

- Caller evaluates function parameters and pushes
  - Pushes return address
  - Pushes caller’s local data and temps
- Callee saves register values and other status info
- Callee vs caller-svaes registers - designated per-register
  - Caller-saves - save only registers that hold live variables
    - Caller saves before function call
    - May end up saving variables that callee does not use
  - Callee-saves - save only registers that function actually uses in it’s body
    - Save caller before re-using registers in own function body
    - May end up saving registers that do not have live values
  - Cannot avoid unnecessary saves
    - Use a mixed strategy to optimise
    - Designate some as caller and some as callee

## Variable Length Stack Data

Memory for data local to a procedure which has dynamic size (like C/C++ variable length arrays) may be stack allocated

- Avoids the expense of heap allocation
- Activation record does not hold storage for arrays - only a pointer to the beginning of each array
  - Pointers are at known offsets from top-of-stack pointer
- `top` - actual top of stack, points to where next activation record will begin
- `top_sp` - used to find local, fixed-length fields of current top activation record
  - Points to end of machine status field
- Both of the above can be generated at compile time

## Scoping & Access Links

(cringe warning, this is confusing and terrible)

Accessing non-local stack data - mechanism for finding data within another procedure

- Static/lexical scope - find required data in enclosing scope
  - Global vars have static storage - accessed through known addresses
- Dynamic scope/runtime binding - leave decision to runtime and look for closest stack frame which has required data
- Access links are pointers to activation records
  - If procedure `p` is nested within procedure `q`, then access link in any activation of `p` points to most recent activation of `q`
  - Forms a chain from the activation record at top of stack to activations at lower depths
- Displays
  - Access links inefficient if nesting depth large
  - Faster access to nonlocals can be done using an array of pointer to activation records - a display
  - `d[i]` is a pointer to the highest activation record on the stack for any procedure at depth `i`
  - If procedure `p` is executing and needs to access element `x` belonging to some procedure `q`
    - Look in `d[i]`
    - Follow the pointer to get the activation record
    - Variable is found at known offset
  - Compiler knows what `i` is so can generate code for this
- Dynamic scope - new activation inherits existing bindings of nonlocal names

## Parameter Passing

- Actual parameters are the ones passed into the call
- Formal parameters are those used in the function declaration
- l-values (memory location) vs r-values (expressions (not l-values))
- Call by value
  - Treat formal parameters as a local name, storage for formal parameters is activation record, storage within stack frame
  - Caller evaluates parameters and puts r-values into storage
  - Can pass pointers to affect caller
- Call by reference
  - Passes a pointer of the storage address of each parameter
  - If lvalue, then lvalue is passed
  - If rvalue then it’s evaluated and stored in a temporary and that lvalue passed
- Copy-restore
  - Hybrid of the above two
  - Copy-in copy-out
  - Rvalues are passed as in call by value
  - Lvalues are determined during call
  - When control returns, current r-values copied back to lvalues computed earlier
- Call by name
  - Procedure treated like a macro
  - Cody substituted for caller, parameters literally substituted for formal params
  - Local names of called procedure are kept distinct from names of calling procedure
- Inlining
  - Similar to call by name
    - Parameter passing becomes assignments
    - Scoping managed correctly
  - (usually) An optimisation to improve execution time
  - Increases code size -> different instruction cache performance

## Memory Management

- Values outliving procedure that creates it cannot be kept in activation record
- Heap is used for data that lives indefinitely or for a while
- Memory manager is subsystem that allocates/deallocates space within heap
  - Deals with `free`/`delete` calls
  - Java - GC
  - Should be efficient
    - Low runtime overhead
    - Facilitate performance of programs
    - Minimise heap space and fragmentation
- Fragmentaion caused by holes
  - When freeing stuff, combine chunks
  - Allocate memory in smallest holes possible - not good for spatial locality
  - Next-fit placement - allocate in last split hole if enough space available
    - Improves spatial locality as chunks allocated at same time are places together
- Manual allocation/deallocation (C/C++) is an issue - forget to free? fuck you.
- GC automatically reclaims free space by deleting unused objects
  - Determine reachability of objects by starting from registers and following pointers
  - Mark and sweep - mark reachable objects, then collect and free them all
    - Coalesce gaps during sweep phase
  - Requires memory to build list of dead objects but needs to be done when memory runs out
    - Use pointer reversal - when a pointer is followed to get a reachable object it is reversed to point at it’s parent
    - Gives an implicit stack to enable depth-first search of all reachable objects
