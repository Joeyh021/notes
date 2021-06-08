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
