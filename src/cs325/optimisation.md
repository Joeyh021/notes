# Optimisations

Ideally compilers improve our code for us so it runs faster and uses less memory. Optimisations must preserve meaning however, so this is hard.

## Basic Blocks

Basic blocks partition IR program into maximal sequences

- Flow of control enters only through first/last instructions in block
  - No jumps in middle
  - Flow of control leaves block at end
  - Last instruction may branch
- Find branch instructions, identify targets, get basic blocks
- Blocks become nodes of control flow graph
- Compilers apply optimisations either locally, globally (entire function), or interprocedurally
  - 1, 2 are common, 3 rare and has lower payoff

## Local Optimisations

- Algebraic simplification - reduction in strength
  - Replace complex ops with simple ones
  - Replace muls with shifts
  - Replace exponents with muls
- Constant folding
  - Do operations at compile time
  - Have to be careful when doing cross compilation due to different mathematical semantics on different architectures
- Eliminate unreachable basic blocks
  - Makes code smaller and faster
- Commmon subexpression elimination
  - Using SSA, two assignments with the same RHS compute the same value
- Copy propagation
  - Using SSA, copies `u = v` can be changed for just substituting `u` for `v`
  - No huge performance effect but facilitates constant folding and dead code elimination
- Dead code elimintation gets rid of code that does not contribute to a program’s result

Local optimisations do very little on their own but they typically interact. Compilers usually just do them until stuff stops happening.

Aliasing causes problems with optimisations - regions of memory that overlap

- Ones here assume no aliasing
- C allows to declare memory does not overlap with `restrict` keyword
  - Compiler does not check this

## Global Optimisations

- Global common subexpression elimination - can be done accross blocks
- Knowing when values will be used next is useful for optimising
  - Variables are **live** at a particular point in a program if it’s value is used in future
    - To compute, look into future and work backwards
  - Algorithm to compute live vars:
    - For each statement `i: x = y op z` do:
      - Attach to `i` the current information in the symbol table regarding next use and liveness of `x, y, z`
      - In symbol table, set `x` to _not live_ and _no next use_ (x is assigned new value)
      - In symbol table, set `y` and `z` to live and next uses of `y` and `z` to `i`
  - Liveness propagated backwards, against flow of control
- Data flow anlysis
  - Derive info about flow of data along execution paths
  - Dataflow values before and after statement are constrained by the semantics of that statement
    - Relationship between before-after values is the transfer function
    - Transfer function may describe dataflow in either direction
      - $\text{OUT}[s] = f_s(\text{IN}[s])$ - forward along execution path
      - $\text{IN}[s] = f_s(\text{OUT}[s])$ - backwards
  - Easy for basic blocks - control flow value into a statement is the same as control flow value out of previous statement
    - CFG edges create more complex constraints
    - Transfer function of basic block is the composition of transfer functions of statements in block
  - Constraints due to control flow between blocks can be rewritten substituting $\text{IN}[B]$ and $\text{OUT}[B]$ for $\text{IN}[s_i]$ and $\text{OUT}[s_n]$

### Reaching Definitions

- A definition of a variable is a statement that assigns to it
- The definition $d$ reaches a point $p$ if there is a point immediately following $d$ to $p$ such that $d$ is not killed along the path
- Statements may generate and kill definitions
  - Transfer function of a definition $d$ can be expressed $f_d(x) = gen_d \cup (x - kill_d)$
    - $gen_d$ is set of definitions generate by statement $d$
    - $kill_d$ is other definitions that kill $d$
    - $x$ is set of all definitions reaching $d$, ie $IN[d]$
- Composition of transfer functions like this is gen-kill form
  - Extends to basic blocks with any number of statements
- Basic blocks also generate and kill sets of definitions
  - Gen set is definitions that are downward exposed
  - Kill set is union of all definitions killed by individual statements
  - A definition may appear in both, gen takes precedence
- Iterative algorithm for computing reaching definitions
  - $OUT[entry]$ is init to $\emptyset$
  - For each basic block $B$ other than entry
    - Init $IN[B]$ to $\emptyset$
    - while there are any changes to $OUT$ - repeat until convergence
      - $IN[B]$ = union of $OUT$ of predecessor blocks
      - $OUT[B] = gen_B U (IN[B] - kill_B)$
- Used for optimisations - check if a definition if constant

### Live Variable Analysis

We wish to know for variable $x$ and point $p$ if the value of $x$ at $p$ could be used along some path in the control flow graph starting at $p$

- A variable is live if
  - $x$ is used along some path starting at $p$ **and** there is no definition of $x$ along the path before the use
- A variable is dead if
  - There is no use of $x$ on any path from $p$ to exit node **or** all paths from $p$ redefine $x$ before using it
- Need to look at future use of vars and work backwards
- Used for register alocation and dead code elimination
- Given the $def$ and $use$ set for a block, can relate live vars at beginning to live vars at end by $IN[B] = use \cup (OUT[B] - def)$
- Variable is live coming into a block if either:
  - Used before redefinition in the block
  - Is live coming out of the block and not redefined in the block
- Variable is live coming out of a block iff it is live coming into one of it’s successors
- Liveness is calculated backward starting from exit node
- Algorithm
  - Assume all vars are dead at entry to a block
  - Iterate starting from final node
    - $OUT[B]$ = union of all successor blocks in sets
    - $IN[B] = use \cup (OUT[B] - def)$
  - Repeat until convergence

### Available Expressions

- An expression $x+y$ is available at a point $p$ if:
  - Every path from entry node to $p$ evaluates $x+y$ before reaching $p$
  - There are no assignments to $x$ or $y$ after the evaluation but before $p$
- Block kills expression $x+y$ if it assignns to $x$ or $y$ and does not recompute them
- Block generates expression $x+y$ if it evaluates them and then does not subsequently define them
- If an expression is available at use then there is no need to re-evaluate it - global common subexpression initialisation
- Expression is available at beginning of block iff available at the end of all predecessors
  - Intersection is meet operator

Summary of dataflow analysis algorithms:

|               | Reaching Definitions  | Live Variables       | Available Expressions       |
| ------------- | --------------------- | -------------------- | --------------------------- |
| Domain        | sets of definitions   | sets of variables    | sets of expressions         |
| Direction     | forwards              | backwards            | forwards                    |
| Transfer func | $gen \cup (x - kill)$ | $use \cup (x - def)$ | $e\_gen \cup (x - e\_kill)$ |
| Boundary      | $OUT[entry] = empty$  | $IN[exit] = empty$   | $OUT[entry] = empty$        |
| Meet          | union                 | union                | intersect                   |
| Equations     | $OUT[B] = f(In[B])$   |                      |                             |
| Initalise     | $OUT[B] = empty$      | $IN[B] = empty$      | $OUT[B] = empty$            |

## Loop Optimisation

Loop optimisation is important to decrease overhead, exploit locality, increase parallelism, etc.

- In a loop a variable whose value is derived from number of iterations is called an **induction variable**
  - Can be optimised by computing it with a single increment per loop iteration
  - Where there are two or more induction vars may be possible to reduce to a single one
  - Involves strength reduction
- When optimising loops, work inside-out
  - Start with inner loops and then move to outer loops
- Loops are key, esp inner loops where lots of computation is done
  - Can optimise loop by decreasing number of instructions in an inner loop
  - **Code motion** - take an expression that yields same result independent of loop iteration and move it outside the loop
- Dependence is a relationship between two computations that constrains their execution order
  - Control - determines control flow
  - Data dependence - one computes something the other needs
    - Flow dependence - one statement must be executed before another
    - Antidependence - statement 1 reads a variable that is read by statement 2
      - Has consequences for parallelisation
    - Output dependence - two statements write to the same variable
  - Have to describe dependence between iterations - loop carried dependencies
    - Dependencies between two successive iterations
- Different classes of loop optimisations
  - Loop restructuring
    - Unrolling, coalescing, collapsing, peeling
  - Dataflow-based loop transformations
    - Loop-based strength reduction, induction variable elimination, invariant code motion
  - Loop re-ordering
    - Change the relative order of execution of iterations of a loop nest
      - Expose parallelism and improve locality
    - Loop interchange, strip mining, loop tiling, loop fusion
- Unrolling
  - Replicate the loop body by an unrolling factor `u`
  - Iterate by `u` steps instead of 1
  - Less overhead in loop conditions, longer basic blocks for better optimisations
- Coalescing
  - Combine loop nest into a single loop
  - Compute indices from resulting single induction var
  - Improves scheduling on parallel machine
  - Reduces overhead of loop nest
- Collapsing
  - Less general version of coalescing in which dimensions of array is reduced
  - Elimintates nested loops and multidimensional array indexing
  - Best suited for loops that iterate over contiguous memory
- Peeling
  - Small number of iterations removed from beginning/end and executed separately
  - Removes dependence created by first or last few iterations
- Normalisation
  - Converts all loops so that induction variable is initially 0 and always incremented by 1
  - Exposes opportunities for fusion and simplifies analysis
- Invariant code motion
  - Move computations outside loop where they do not change between iterations
  - Reduce register pressure or avoid alu latency
- Unswitching
  - Instead of having a conditional within a loop, have a loop within each branch
  - Saves the repeated branching overhead
- Interchange
  - Exchanges position of two loops in a perfect nest
    - Perfect nest means the body over every loop contains only a loop
  - Enables vectorisation, reduces stride, improves parallel performance
  - Increase number of loop-invariant expressions in inner loop
- Strip mining
  - Adjust granularity of operation
  - Similar to unrolling
  - Choose number of independent computations in innermost loop of a nest
  - Involves cleanup code in case number of iterations is not perfect multiple of strip
- Loop tiling
  - Generalisation of strip mining in multiple dimensions
  - Improve cache reuse by diving iteration space into tiles
  - Critical for high performance in dense matrix multiplication
- Loop distribution
  - Break a loop into many with same iteration space but subsets of statements of original loop
  - Creates perfect loop nests
  - Creates subloops with fewer dependencies
  - Improves cache usage
  - Reduce memory requirements
  - Increase register reuse
- Loop fusion
  - Opposite of the above
  - Reduces loop overhead
  - Increase instruction parallelism
