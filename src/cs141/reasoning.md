# Reasoning About Programs

Haskell can use normal software testing methods to verify correctness, but because haskell is a pure language, we can do better and formally prove properties of our functions and types.

## Natural Numbers

Natural numbers can be defined as `data Nat = Z | S Nat` in haskell. Alternatively, using mathematical notation, this can be written $0 \in N \;\; \forall n \in N,\; n+1 \in N$. Addition can then be defined recursively:

```haskell
add :: Nat -> Nat -> Nat
add Z     m = m
add (S n) m = S (add n m)
```

Addition has certain properties which must hold true:

- Left identity: `∀m :: Nat, add Z m == m`
  - $0 + m = m$
- Right identity: `∀m :: Nat, add m Z == m `
  - $m + 0 = m$
- Associativity: `∀x y z :: Nat, add x (add y z) == add (add x y) z`
  - $x + (y + z) = (x + y) + z$

These can be proven using equational reasoning, which proves that an equality holds in all cases. Generally, either a property can be proved by applying and un-applying either side of an equation, and/or by induction.

To prove the left identity is easy, as it is an exact match of one of our equations for `add`:

```haskell
add Z m
-- applying add
= m
```

The right identity is a little harder, as we can't just directly apply one of our equations. We can instead induct on `m`. First, the base case:

```haskell
add Z Z
-- applying add
= Z
```

Using the induction hypothesis `add m Z = m`, we need to show the inductive step holds for `S m` (`m+1`):

```haskell
add (S m) Z
-- applying add
= S (add m Z)
-- applying induction hypothesis
= S m
```

This proves the right identity. To prove associativity we will again use induction, this time on `x`. The base case is `add Z (add y z)`:

```haskell
add Z (add y z)
-- applying add
= add y z
-- un-applying add
= add (add Z y) z
```

The proof holds for `x = Z`. Here, the proof was approached from either end to meet in the middle, but written as a single list of operations for clarity. Sometimes it is easier to do this and work from either direction, especially when un-applying functions as it is more natural.

The induction hypothesis is `add x (add y z) == add (add x y) z`, and can be assumed. We need to prove the inductive step `add (S x) (add y z) == add (add (S x) y) z`:

```haskell
add (S x) (add y z)
-- applying add
= S (add x (add y z))
-- applying induction hypothesis
= S (add (add x y ) z)
-- un-applying add
= add (S (add x y)) z
-- un-applying add
= add (add (S x) y) z
```

This proves associativity.

## Induction on Lists

We can induct on any recursive type, including lists: `data List a = Empty | Cons a (List a)`. Using this definition, we can prove map fusion. Map fusion states that we can turn multiple consecutive map operations into a single one with composed functions:

- `map f (map g xs) = map (f.g) xs`
  - `∀f :: b -> c`
  - `∀g :: a -> b`
  - `∀xs :: [a]`

The definitions of `map` and `.` may be useful:

```haskell
map :: (a -> b) -> [a] -> [b]
map f []     = []
map f (x:xs) = f x : map f xs

(.) :: (b -> c) -> (a -> b) -> a -> c
(.) f g x = f (g x)
```

Map fusion can be proved by induction on xs. The base case is `map f (map g []) = map (f.g) []`:

```haskell
map f (map g [])
-- applying map
= map f []
-- applying map
= []
-- un-applying map
= map (f.g) []
```

Using the induction hypothesis `map f (map g xs) = map (f.g) xs`, we can prove the inductive case `map f (map g (x : xs)) = map (f.g) (x : xs)`:

```haskell
map f (map g (x : xs))
-- applying map
= map f (g x : map g xs)
-- applying map
= f (g x) : map f (map g xs)
-- induction hypothesis
= f (g x) : map (f.g) xs
-- un-applying (.)
= (f.g) x : map (f.g) xs
-- un-applying map
= map (f.g) (x : xs)
```

## Proving a Compiler

Given a simple expression language:

```haskell
data Expr = Val Int | Plus Expr Expr
```

And a simple instruction set:

```haskell
data Instr = Push Int | Add
type Program = [Instr]
type Stack = [Int]
```

We can write an `exec` function as an interpreter for our instruction set:

```haskell
exec :: Program -> Stack -> Stack
exec []                    s  = s
exec (Push n : p)          s  = exec p (n : s)
exec (Add    : p) (y : x : s) = exec p (x + y : s)
```

An `eval` function to evaluate our expressions:

```haskell
eval :: Expr -> Int
eval (Val n)    = n
eval (Plus l r) = eval l + eval r

```

And a `comp` function as a compiler for our `Expr` language to our `Instr` instruction set:

```haskell
comp :: Expr -> Program
comp (Val n) = [PUSH n]
comp (Plus l r) = comp l ++ comp r ++ [ADD]
```

Our compiler will be considered correct if for any expression, evaluating it yields the same result as compiling and then executing it:

```haskell
∀ e :: Expr, s :: Stack . eval e : s == exec (comp e) s
```

This can be proved by induction on `e`. The base case for `Expr` is for `Val`s, and we want to show that `eval (Val n) s == exec (comp (Val n)) s`. This time, we start with the RHS:

```haskell
exec (comp (Val n)) s
-- applying comp
= exec [Push n] s
-- applying exec
= exec [] (n : s)
-- applying exec
= (n : s)
-- unappplying eval
= eval (Val n) s
```

Our inductive case to be proved is `eval (Plus l r) s == exec (comp (Plus l r)) s`. Since the `Plus` constructor has two values of type `Expr`, there are two induction hypotheses:

- for `l`: `eval l : s == exec (comp l) s`
- for `r`: `eval r : s == exec (comp r) s`

```haskell
exec (comp (Plus l r)) s
-- applying comp
= exec (comp l ++ comp r ++ [Add]) s
-- distributivity of (++)
= exec (comp l ++ (comp r ++ [Add])) s
-- distributivity lemma
= exec (comp r ++ [Add]) (exec (comp l) s)
-- distributivity lemma
= exec [Add] (exec (comp r) (exec (comp l) s))
-- induction hypothesis
= exec [Add] (exec (comp r) (eval l : s))
-- induction hypothesis
= exec [Add] (eval r : (eval l : s))
-- applying exec
= exec [] ((eval l + eval r) : s)
-- applying exec
= (eval l + eval r) : s
-- un-applying exec
= eval (Plus l r) s
```

The proof holds, but relies on a lemma proving the distributivity of the exec function, which states that executing a program where a list of instructions `xs` is followed by a list of instructions `ys` is the same as first executing `xs` and then executing `ys` with the stack that results from executing `xs`: `∀ xs ys::Program, s::Stack . exec (xs++ys) s == exec ys (exec xs s)`.

This can be proved by induction on `xs`. The base case is the empty list `[]`: `exec ([] ++ ys) s == exec ys (exec [] s)`:

```haskell
exec ys (exec [] s)
-- applying exec
= exec ys s
-- un-applying (++)
= exec ([] ++ ys) s
```

The induction hypothesis is `exec (xs++ys) s == exec ys (exec xs s)`. The inductive step is `exec ((x : xs) ++ ys) s == exec ys (exec (x : xs) s)`. As `x` could be either `Push x` or `Add`, we perform case analysis on `x`, first with the case where `x = Push n`:

```haskell
exec ys (exec (Push n : xs) s)
-- applying exec
= exec ys (exec xs (n : ns))
-- induction hypothesis
= exec (xs ++ ys) (n : s)
-- un-applying exec
= exec (Push n : (xs ++ ys)) s
-- un-applying (++)
= exec ((Push n : xs) ++ ys) s
```

The inductive step holds for the `Push n` case. The `Add` case:

```haskell
exec ys (exec (Add : xs) s)
-- assuming stack has at least 2 elements
exec ys (exec (Add : xs) (b : a : s'))
-- applying exec
exec ys (exec xs (a + b : s'))
-- induction hypothesis
exec (xs ++ ys) (a + b : s')
-- un-applying exec
exec (Add : (xs ++ ys)) (b : a : s')
-- un-applying (++)
exec ((Add : xs) ++ ys) (b : a : s')
-- assumption
exec ((Add : xs) ++ ys) s
```

This proves the inductive case for the `Add` instruction, and therefore the proof for the distributivity of `exec` lemma, which supported our initial proof of the correctness of our compiler.
