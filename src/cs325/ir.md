# Intermediate Representations

An IR is a data structure with all of the compiler's knowledge of a program

- Can be an AST or some sort of machine code (LLVM IR)
- Graphical IRs encode info in a graph
  - Nodes, edges, lists, trees, etc
  - Memory consuming
- Linear IRS are psuedo-code for some abstract machine on varying levels of abstraction
- Hybrid IRs combine elemends of both
  - Use LLVM IR to represent blocks and a graph of the control flow between blocks
- Parse trees are an IR

## ASTs

An abstract syntax tree retains the structure of a parse tree but ditches non-terminal nodes

- Can have a DAG to identify common sub-expressions
- Encodes redundancy - basic optimisation
- Must produce pure sub-expression
- Can use SDDs to construct a DAG
  - Functions `leaf` and `node` create a fresh node each time
    - If constructing DAG, then check identical node exists and if so then return that one
  - Equivalence between nodes `node(op, left, right)` established if node with label `op` already exists with same `left` and `right`, in that order
- CFG models flow of control between basic blocks in program
  - A Directed graph
  - Typically used in conjunction with another IR

## Linear IRs

Sequences of instructions executed in order. Like asm but with ✨abstraction✨.

### One-address code

Models the behaviour of an accumulator machine or stack machine

- JVM, CPython do this
- Easy to generate and execute

### Three-address code

Three-address code is expressions like `i = j op k`

- At most one operator per line
  - Unravels multi-op expressions
- Compact and can be easily rearranged which is good for optimisation
- Most modern processors implement 3-address ops natively
- Can also be represented as a linearised syntax tree
- An address can be
  - A name - pointer to symbol table entry
  - A constant
  - A compiler-generated temporary
- Instructions can be
  - Assignment (unary)
  - Assignment with a binary op
  - Copies
  - Jumps (conditional/unconditional)
  - Procedure call
  - Indexed copy (like index into arrays)
  - Address and pointer stuff (think `*` and `&`)
- Representing linear IRs
  - Usually objects/records/structs with fields for operator and operands
  - Quadruples have four fields - `op`, `arg1`, `arg2`, `result`
  - Triples haver just `op`, `arg1`, `arg2`
    - Refers to result by location in array of instruction
    - Instructions cannot be easily re-arranged - requires changing references
  - Indirect triples are similar but use a list of pointers to triples
    - Can re-order by reordering instruction list without affecting triples themselves
- Different IRs exist on different levels of abstraction
  - Structural IRs are usually high level
  - Linear IRs usually lower level
  - Can have a lower-level tree showing address calculations and registers n shit
- SSA is an IR that facilitates optimisations
  - Names correspond uniquely to definition points in the code
  - Each name is defined by a single operation
  - Uses phi functions to combine definitions of two variables (ternary operators)

### SDTs to generate IR

Actual program storage is runtime allocated, but relative addresses can be computed at compile time for local declarations

- From types we can determine storage size
- Type and relative address are saved in symbol table entry
- Dynamic types are handled by saving a pointer to runtime storage
- Can use an SDT to compute types and their widths
  - Synthesised attributes for type and width of nonterminals

Can use an SDT to generate 3-address code for expressions too

- Array addressing is important when generating addresses
  - Most languages number 0 to n-1
    - Fortran numbers from 1 to n (cringe)
  - Address of array element is `base + (i - low) * width`
  - Can generalise to multiple dimensions
    - `base + i1*w1 + i2*w2 + ... + ik * wk`
    - Based on row- major layout - the way you’d expect
      - Fortran uses column-major
  - Can use this to generate grammar for array references - semantic actions for generating 3-address code to address arrays

Types are used by compilers to generate code and optimise

- Type synthesis builds type of expression from types of sub-exprs
- Type inference determines the type of an expression from the way it is used
- Type conversion can be explicit casts or implicit coercions
- Can use semantic actions for all of these

Control flow to IR is tied to translation of bools

- Used for flow of control and for logical values (and, or, not)
- Can use SDDs to evaluate boolean expressions and generate jumps and addresses for control flow
- May need to use backpatching
  - Leave jump targets unspecified, do second pass to fill them in

A symbol table is a a data structure that used to hold info about source-program constructs

- May contain:
  - Identifiers - data type, addresses, lexeme
  - Arrays - dimensions
  - Records/structs - fields and types
  - Functions - number of params, types,
- Localises info - no need to annotate parse trees and makes stuff more efficient
- Scopes handled by having a separate symbol table for each scope
- Can use an SDT with semantic actions to generate a symbol table
