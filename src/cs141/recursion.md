# Recursion

Recursion is a way of expressing loops with no mutable state, by defining a function in terms of itself. The classic example, the factorial function. Defined mathematically:

$$
n! =
\begin{cases}
1 & \text{if } n =0 \\
n \times (n-1)!&  \text{otherwise}
\end{cases}
$$

In haskell:

```haskell
factorial :: Int -> Int
factorial 0 = 1
factorial n = n * factorial (n-1)
```

It can be seen how this function reduced when applied to a value:

```haskell
factorial 2
=> 2 * factorial (2-1)
=> 2 * factorial 1
=> 2 * 1 * factorial (1-1)
=> 2 * 1 * factorial 0
=> 2 * 1 * 1
=> 2
```

Another classic example, the fibonacci function:

```haskell
fib :: Int -> Int
fib 0 = 1
fib 1 = 1
fib n = fib (n-1) + fib (n-1)
```

In imperative languages, functions push frames onto the call stack every time a function is called. With no mutable state, this is not required so recursion is efficient and can be infinite.

Haskell automatically optimises recursive functions to make execution more efficient:

```haskell
fac' :: Int -> Int -> Int
fac' 0 m = m
fac' n m = fac' (n-1) (n*m)
```

This version of the function prevents haskell from building up large expressions:

```haskell
fac 500
=> fac' 500 1
=> fac' (500-1) (500*1)
=> fac' 499 500
=> fac (499-1) (499 * 500)
=> fac' 498 249500
```

Notice the pattern for all recursive functions, where there is a recursive case, defining the function in terms of itself, and a base case. Without a base case, the function would recurse infinitely. The cases are usually defined as pattern matches.

## Recursion on Lists

Recursion is the natural way to operate on lists in haskell. Defining the product function, which returns the product of all the items in the list:

```haskell
product :: [Int] -> Int
product [] = 1
product (n:ns) = n * product ns
```

Here, the base case is the empty list `[]` and pattern match is used to "de-cons" the head off the list and operate on it `(n:ns)`. The function reduces as follows:

```haskell
product [1,2,3,4]
=> 1 * product [2,3,4]
=> 1 * 2 * product [3,4]
=> 1 * 2 * 3 * product [4]
=> 1 * 2 * 3 * 4 * product []
=> 1 * 2 * 3 * 4 * 1
=> 24
```

## `let` and `where`

`let` and `where` clauses can be used to introduct local bindings within a function, which are useful in defining recursive functions. the `splitAt` function, which splits a list into two at a certain index.

```haskell
splitAt :: Int -> [a] -> ([a],[a])
splitAt 0 xs = ([],xs)
splitAt n [] = ([],[])
splitAt n (x:xs) = (x:ys, zs)
    where (ys,zs) = splitAt (n-1) xs
-- alternatively
splitAt n xs =
  let
    ys = take n xs
    zs = drop n xs
  in (ys,zs)
```

`let` and `where` can also define functions locally, as everything in haskell is a function.
