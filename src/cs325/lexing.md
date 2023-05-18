# Lexing

We want to transform a stream of characters into a stream of tokens `(token name, attribute value)`

- A lexeme is the sequence of chars from source code
- A Regex is formal notation for a recogniser
- Recognisers are represented as finite automata
  - $S$ - finite set of states in the recogniser along with error state $S_e$
  - $\Sigma$ is finite alphabet used by recogniser
  - $\delta(s,c)$ is transition function
    - Maps states $s$ and characters $c$ to next state
  - $s_0$ is the start state
  - Set $S_A$ are accepting states
- An alphabet is a finite set of symbols
  - String is sequence of symbols from alphabet
  - Language is set of strings over the alphabet
    - Defined using grammars
  - We want to check if string on alphabet is a member of language
    - Use a recognising automaton
      - Diagrams are large, use regex to express
  - A language defined by a regex is the set of all strings that can be described by that regex

## Tokenising

- Construct a regex matching all lexemes for all tokens
  - Union of regexes for the token classes gives a regex $R$ that defines a language
- Given an input sequence of characters, want to check if some number of characters belong to the language $R$
  - Gor $1 \leq i \leq n$ check if $C_1, ..., C_i$ is in $L(R)$
  - If true then we remove that string as a token and continue
  - Always select the longer sequence - maximal munch
  - If more than one token matches use the token class specified first
  - If no match then error
- Can build a scanner from regex
  - Require simulation of a DFA
  - Thompson’s construction goes from NFA -> RE
  - Subset construction builds a DFA that simulates an NFA
  - Hopcroft’s algorithm minimises a DFA
  - Kleene’s contruction dervices an RE from a DFA
- All of these are long and omitted for sanity
  - I didn’t take formal languages - cry about it
