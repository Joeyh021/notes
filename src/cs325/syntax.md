# Syntax Analysis

- Take a stream of words and parse it to check it’s correct
  - Builds a parse tree
  - If invalid then produce a syntax error

## Context Free Grammars

- CFGs are formal mechanism for specifying syntax of source language
- Parsers parse text according to a grammar
  - LL(1) top-down recursive descent
  - LR(1) bottom up, canonical LR(1), LALR parser
- CFGs - `stmt -> if (expr) stmt else stmt`
  - Four components
    - Set of terminal symbols
    - Set of nonterminal symbols
    - One of the terminals is a start symbol
    - Set of productions for nonterminals
  - A grammar derives a sentence
  - Parsing is the process of figuring out if a sentence is valid
    - Rewrite expressions using grammar

## Parse Trees

- Parse tree represents derivation as graph
  - Terminals at leaves, nonterminals as nodes
  - In order gives input, postorder gives evaluation
  - Right and leftmost derivations can give different results - grammar is ambiguous
    - Bad property for a program to have
    - Want to be able to rewrite them to be unambiguous
      - Cannot be done automatically
  - Also want to give correct mathematical precedence in parse tree
    - Create a non-terminal for each level of precedence
    - Isolate corresponding part of grammar
    - Force parser to recognise high precedence subexpression first

## Top-down Parsing

Top-down parsing starts at the root and grows the tree toward leaves.

- At each step, select a node for some nonterminal and extend it with a subtree that rewrites the nonterminal
  - Always expand leftmost fringe of tree
  - If choose wrong nonterminal parser must backtrack
    - Expensive way to discover errors

Grammar scan be transformed to make them top-down parsable:

- Eliminate left recursion
  - A grammar is left-recursive if it has a nonterminal $A$ such that there is some derivation $A \rightarrow A a$
    - The nonterminal at the head is the leftmost symbol of the body
    - Topdown parsers cannot handle this
  - Can easily eliminate direct left recursion
    - Eliminate epsilon productions
    - Eliminate cycles
    - Given productions $A \rightarrow A a_1 | A a_2 | A a_m | B_1 | B_2$, replace $A$ productions by
      - $A \rightarrow B_1 A’ | B_2 A’ $
      - $A’ \rightarrow a_1 A' | a_2 A' | ... | a_m A' | \varepsilon $
  - Indirect left recursion still a problem
    - Need a more systematic approach
    - Ommitted for sanity, see slide 54 onwards
  - **Symbol is nullable if it can be expanded with epsilon productions** - can dissapear to an empty string
    - Find nullable non-terminals, if nullable then create a new production by replacing it with epsilon
    - Can increase grammar size

Recursive descent parsers are programs with one parse function per nonterminal (see courserwork). Backtrack-free grammars are grammars that can be parsed by such parsers without having to backtrack.

- If top-down picks wrong the production it has to backtrack
  - Can use a lookahead in input stream and use context to choose correct production
- $\text{FIRST}$ set of $a$ is the set of terminals that begin strings derived from $a$
  - If $a$ is a terminal then $\text{FIRST}(a) = a$
  - For a nonterminal $A$ then $\text{FIRST}(A)$ is the complete set of terminal symbols that can appear as the leading symbol derived from $A$
  - If nonterminal is nullable then $\varepsilon$ needs to be in first set
- $\text{FOLLOW}$ set of terminals that can appear immediately to the right of $A$
  - $\text{FOLLOW}(A)$ is the symbols that can appear to the right of $A$
  - If $A$ is rightmost symbol in some sentinal form then `eof` is in $\text{FOLLOW}(A)$
  - For a production $A \rightarrow a B b$ everything in $\text{FIRST}(b)$ except $\varepsilon$ is in $\text{FOLLOW}(B)$
  - For $A \rightarrow a B$ or $A \rightarrow a B b$ (where $b$ is nullable), everything in $\text{FOLLOW}(A)$ is in $\text{FOLLOW}(B)$
- **These are LL(1) grammars** - can always predict the correct expansion at each point in the parse
  - Choose production $N \rightarrow a$ on a symbol $c$ if
    - $c$ in $\text{FIRST}(a)$
    - $a$ is nullable and $c$ in $\text{FOLLOW}(N)$
- Left factoring - convert grammar to have LL(1) property
  - Rewrite nonterminals such that productions with common prefixes are factored into new nonterminals
- Table-driven LL(1) parsers are most common
  - build first and follow sets
  - the production $p$ of the form $N \rightarrow a$ is in the table at $(N, c)$ if terminal $c$ or `eof` is in $\text{FIRST}(a)$ OR if $a$ is nullable and $c$ is in $\text{FOLLOW}(N)$
  - if table has conflicts then grammar is not LL(1)

## Bottom-up parsing

Bottom-up parsing begins at the leaves and grows towards the root

- Identify a substring of the parse tree’s upper fringe that matches RHS of some production, build node for LHS and connect to tree
  - Parser adds layers of nonterminals on top of leaves
  - Reduces a string to the start symbol of the grammar
- Uses a stack that holds grammar symbols
- Shift reduce parsing:
  - Parser shifts zero or more input symbols onto stack until ready to reduce a string $b$
  - Reduce $b$ into head of appropriate production
  - Repeat until error detected or until stack contains start symbol and input is exhausted
- LR(k) parsers are most prevalent bottom up parsers
  - L - scan Left to right, R - Rightmost derivation
  - k can be 0, consider both 0 and 1 cases
  - More powerful than LL(1) but harder
    - Proper superset of predictive or LL methods
  - For a grammar to be LR(k) must be able to recognise occurence of right side of production in a right-sentinal form, with k input symbols of lookahead
- Shift-reduce decisions
  - LR parser makes shift-reduce decisions by maintaining state to keep track of where we are in parse
  - Each state represents a set of items where item indicates how much of a production we have seen at a given point
  - An item of a grammar $G$ is a production of $G$, with a dot at some position of the body - **this is an LR(0) item**
- Collection of LR(0) items provides the basis for constructing a DFA called the LR(0) automaton that is used to make parsing decisions
  - Steps:
    - Create augmented grammar - add a \$ for end symbol to indicate when it should stop parsing
    - Compute closure set of items
      - Every possible starting state of the automaton
    - Compute GOTO functions for the set
      - Defines transitions for automaton
  - Can codify LR(0) automaton in a table to use for making shift-reduce decisions
    - If a string of symbols takes the automaton from state `i` to state `j` then shift on the next symbol if state `j` has a transision on `a`
      - Otherwise reduce
    - Get shift/reduce conflicts in the table where do not have enough context on what to do
- Can use SLR(1) parsing table to avoid conflits - use next symbol and $\text{FOLLOW}$ set
  - Uses same LR(0) items but uses an extra symbol of lookahead to make shift-reduce decisions
  - Use $\text{FOLLOW}$ set of nonterminal to determine if a reduction is correct
- All LR parsing is the same - table with input string and stack
- There are context-free grammars for which shift-reduce parsing does not work - either get shift/reduce or reduce/reduce conflicts
- More powerful parsers exist also
  - LR(1) uses full set of lookahead symbols
  - LALR parsers are based on LR(0) sets and carefully introduces lookaheads into LR(0) items
