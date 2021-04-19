# Probability & Statistics

## Probability

### Set Theory

- A set is a collection of elements
  - Elements are members of a set
- $s \in S$ means "the element $s$ is a member of the set $S$
- The empty set $\varnothing$ contains no elements
  - It is empty
- $S = \{1,3,5,7,9\}$
  - $S$ is a set consisting of those integers
- $S = \{n: n \;\text{is a prime number and}\; n \leq 12\}$
  - $S = \{1,2,3,5,7,11\}$
- $S = \{x: x^2 = 4 \;\text{and}\; x \;\text{is odd}\}$
  - $S = \varnothing$
- $A \subset S$
  - $A$ is a subset of $S$
  - $a \in A$ implies $a \in S$
- $\varnothing \in S$ for all sets $S$
- $A = B$ if and only if $A \subset B$ and $B \subset A$
- $A \cup B$ is the union of $A$ and $B$
  - Set of elements belonging to $A$ _or_ $B$
- $A \cap B$ is the intersection of $A$ and $B$
  - Set of elements belonging to $A$ _and_ $B$
- Disjoint sets have no common elements
  - $A \cap B = \varnothing$
- $A \setminus B$ is the different of $A$ and $B$
  - Set of elements belonging to _$A$ but not $B$_
- $A^c$ is the complement of $A$
  - Set of elements _not_ belonging to $A$

### Random Processes & Probability

The probability of event $A$ occurring is denoted $P(A)$. This is the relative frequency of event $A \in S$ occurring in a random process within sample space S.

- $S$
  - Certain or sure event, guaranteed 100% to happen
- $\varnothing$
  - Impossible event, won't happen
- ${a} \in S$
  - Elementary event, the only event that can happen, the only possible outcome
- $A \cup B$
  - Event that occurs if _$A$ or $B$_ occurs
- $A \cap B$
  - Event that occurs if _$A$ and $B$_ occur
- $A^c = S \setminus A$
  - Event that occurs if $A$ _does not_ occur
- $A \cup B = \varnothing$
  - Events $A$ and $B$ are _mutually exclusive_

#### Example

Toss a coin 3 times and observe the sequence of heads and tails.

- Sample space $S =\{\text{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}\}$
- Event that $\geq 2$ heads occur in succession $A = \{\text{HHH,HHT,THH}\}$
- Event that 3 heads or 3 tails occur $B = \{\text{HHH,TTT}\}$
  <br><br>
- $A \cup B = \{ \text{HHH,HHT,THH,TTT}\}$
- $A \cap B = \{\text{HHH}\}$
- $A^c = \{\text{HTH,HTT,THT,TTH,TTT}\}$
- $A^c \cup B =\{\text{TTT}\}$

#### Another Example

Sample space $S=\{17,18,19,20,21,22\}$. Each number is an individual event.

| Events | Frequency | Relative Frequency |
| ------ | --------- | ------------------ |
| 17     | 3         | 3/35               |
| 18     | 4         | 4/35               |
| 19     | 9         | 9/35               |
| 20     | 11        | 11/35              |
| 21     | 6         | 6/35               |
| 22     | 2         | 2/35               |

### Axioms & Laws of Probability

- $0 \leq P(A) \leq 1$ for all $ A \subset S$
  - Probabilities are always between 0 and 1 inclusive
- $P(S) = 1$
  - Probability of the certain event is 1
- If $A \cap B = \varnothing$ then $P(A \cup B) = P(A) + P(B)$
  - If two events are disjoint, then the probability of either occurring is equal to the sum of their two probabilities
- $P(\varnothing) = 0$
  - The probability of the impossible event is zero
- $P(A^c) = 1 - P(A)$
  - The probability of all the elements not in A occurring is the opposite of the probability of all the elements in A occurring
- If $A \subset B$, then $P(A) \leq P(B)$
  - The probability of A will always be less than or equal to the probability of B when A is a subset of B
- $P(A \setminus B) = P(A) - P(A \cup B)$
  - The probability of A minus B is equal to the probability of A minus the probability of A and B
- $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
  - Probability of A or B is equal to probability of A plus the probability of B minus the probability of A and B
  - This is important

#### Example

In a batch of 50 ball bearings:

- 15 have surface damage ($A$)
  - $P(A) = 0.3$
- 12 have dents ($B$)
  - $P(B) = 0.24$
- 6 both have defects ($A \cap B$)
  - $P(A \cap B) = 0.12$

The probability a single ball bearing has surface damage or dents:
$$P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.3 + 0.24 - 0.12 = 0.42$$

The probability a single ball bearing has surface damage but no dents:
$$P(A \cap B^c) = P(A \setminus B) = P(A) - P(A \cap B) = 0.3 - 0.12 = 0.18$$

### Conditional Probability & Bayes' Theorem

A conditional probability $P(A | B)$ is the probability of event $A$ occurring, _given_ that the event $B$ has occurred.

$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

Bayes' theorem:

$$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$

Axioms of conditional probability:

- $P(B) = P(B|A)P(A) + P(B|A^c)P(A^c)$
- $P(A \cup B | C) = P(A|C) + P(B|C) - P(A \cap B | C)$

#### Example

In a semiconductor manufacturing process:

- $A$ is the event that chips are contaminated
  - $P(A) = 0.2$
- $F$ is the event that the product containing the chip fails
  - $P(F|A) = 0.1$ and $P(F|A^c) = 0.005$

Determining the rate of failure:
$P(F) = P(F|A)P(A) + P(F|A^c)P(A^c) = 0.1 \times 0.2 + 0.005 \times 0.8 = 0.024$

### Independent Events

Two events are independent when the probability of one occurring does not dependend on the occurrence of the other. An event $A$ is independent if and only if
$$P(A \cap B) = P(A)P(B)$$

#### Example

Using the coin flip example again with a sample space $S$ and 3 events $A, B, C$

- $S = \{\text{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}\}$
  - $P(S) = 1$
- $A = \{\text{HHH, HHT, HTH, HTT}\}$
  - $P(A) = 0.5$
- $B = \{\text{HHH, HHT, THH, THT}\}$
  - $P(B) = 0.5$
- $C = \{\text{HHT, THH}\}$
  - $P(C) = 0.25$

A and C are independent events:

- $A \cap C = \{\text{HHT}\}$
- $P(A \cap C) = 0.25 = 0.5 \times 0.25 = P(A)P(C)$

B and C are not independent events:

- $B \cap C = \{\text{HHT,THH}\}$
- $P(B \cap C) = 0.25 \neq 0.25 \times 0.5 = P(B)P(C)$

## Discrete Probability Distributions

## Continuous Probability Distribution
