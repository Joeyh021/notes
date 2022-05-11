# Logic
Whilst its only recapped on in some of the lectures, it assumes knowledge from the engineering module, which the computer science `Computer Organisation and Architecture (CS132)` also covers.

A fair bit of this information is already in [CS132 Logic Page](../cs132/logic.md). There are some engineering specific things, and stuff that's just handy to have on one page.

## Boolean Algebra Laws

There are several laws of boolean algebra which can be used to simplify logic expressions:

| Name             | AND form                                | OR form                                  |
| ---------------- | --------------------------------------- | ---------------------------------------- |
| Identity Law     | $1A = A$                                | $0 + A = A$                              |
| Null Law         | $0A = 0$                                | $1 + A = 1$                              |
| Idempotent Law   | $AA = A$                                | $A + A = A$                              |
| Inverse Law      | $A\bar A = 0$                           | $A + \bar A = 1$                         |
| Commutative Law  | $AB = BA$                               | $A + B = B + A$                          |
| Associative Law  | $(AB)C = A(BC) = ABC$                   | $(A + B) + C = A + (B+C) = A + B + C$    |
| Distributive Law | $A + BC = (A+B)(A+C)$                   | $A(B+C) = AB + AC$                       |
| Absorption Law   | $A(A+B) = A$                            | $A + AB = A$                             |
| De Morgan's Law  | $\overline{A\cdot B} = \bar A + \bar B$ | $\overline{A + B} = \bar A \cdot \bar B$ |

- Can go from AND to OR form (and vice versa) by swapping AND for OR, and 0 for 1

Most are fairly intuitive, but some less so. The important ones to remember are:

- $A + BC = (A+B)(A+C)$
- $A(B+C) = AB + AC$
- $A(A+B) = A$
- $A + AB = A$

## Latches
### SR Latch
- When $S$ is asserted, $Q$ goes high.
- When $R$ is asserted, $Q$ goes low.
- When both are de-asserted (low and low), $Q$ holds its value
- When both are asserted (high and high), $Q$ and $\overline{Q}$ goes low (**not intended!**)

### D latch
Passes through the $D$ input whenever $CLK$ is high, and hold when $CLK$ is low. 

### D Flip Flop
Will *copy* the $D$ input to the $Q$ output at rising edges of $CLK$.
Bit storage.