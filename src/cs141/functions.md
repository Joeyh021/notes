# Higher Order Functions

Higher order functions are functions which operate on functions.

## Associativity of functions

Function expressions associate to the right (one argument is applied at a time)

```haskell
xor a b = (a || b ) && not (a && b)
-- equivalent to
xor = \a -> \b -> (a || b) && not (a && b)
-- equivalent to
xor = \a -> (\b -> (a || b) && not (a && b))

```

- All functions in haskell are technically nameless, single-parameter functions
- Currying allows for functions which return other functions
- Functions are expressions
  - The body of a function is an expression
- When a function is applied to an argument it reduces to it's body.

Function _application_ associates to the left:

```haskell
xor True True
=> (xor True) True
=> ((\a -> (\b -> (a || b) && not (a && b))) True) True
=> (\b -> (True || b) && not (True && b)) True
=> (True || True) && not (True && True)

```

Function _types_, however, associate to the right:

```haskell
xor :: Bool -> Bool -> Bool
xor = \a -> \b -> (a || b) && not (a && b)
--equivalent to
xor :: Bool -> (Bool -> Bool)
xor = xor = \a -> (\b -> (a || b) && not (a && b))
```

The table below shows how functions application and types associate:

| Without Parentheses | With Parentheses      |
| ------------------- | --------------------- |
| `f x y `            | `(f x) y`             |
| `\x -> \y -> ...`   | `\x -> (\y -> ...)`   |
| `Int -> Int -> Int` | `Int -> (Int -> Int)` |

## Functions as Arguments (`map`)

Haskell functions can be taken as arguments to other functions. Functions that take/return functions are called higher order functions. An example, increasing every element of a list by one:

```haskell
incByOne :: [Int] -> [Int]
incByOne xs = [x+1 | x <- xs]
-- or using recursion
incByOne [] = []
incByOne (x:xs) = x+1 : incByOne xs
```

All this function does is applies the function `(+ 1)` to every element. This pattern can be generalised using the `map function`: a function that applies a function given as an argument to every element of a list:

```haskell
map :: (a -> b) -> [a] -> [b]
map f []     = []
map f (x:xs) = f x : map f xs
```

Note the type signature of the map function is `map :: (a -> b) -> [a] -> [b]`, meaning the first argument is a function of type `(a -> b)`. Using this to implement `incByOne`:

```haskell
incByOne = map (+1)
-- tracing it's evaluation:
incByOne [1,2,3]
=> map (+1) [1,2,3]
=> (1+1) : map (+1) [2,3]
=> (1+1) : (1+2) : map (+1) [3]
=> (1+1) : (1+2) : (1+3) : map (+1) []
=> (1+1) : (1+2) : (1+3) : []
=> [2,3,4]
```

Effectively, `map f [x, y, z]` evaluates to `[f x, f y, f z]`

## Sections

Sections are partially applied operators. Operators are functions like any other, and as such can be partially applied, passed as arguments, etc. The addition operator is shown as an example, but the same applies to any binary operator.

```haskell
(+) :: Num a => a -> a -> a
(+ 4) :: Num a => a -> a
(4 +) :: Num a => a -> a
(+) 4 8 = 4 + 8
(+ 4) 8 = 8 + 4
(4 +) 8 = 4 + 8
```

## `Filter`

Filter is an example of another higher order function, which given a list, returns a new list which contains only the elements satisfying a given predicate.

```haskell
filter :: (a -> Bool) -> [a] -> [a]
filter p [] = []
filter p (x:xs)
    | p x       = x : filter p xs
    | otherwise =     filter p xs
```

Some examples:

```haskell
-- remove all numbers less than or equal to 42
greaterThan42 :: (Int -> Bool) -> [Int] -> [Int]
greaterThan42 xs = filter (>42) xs
-- only keep uppercase letters
uppers :: (Char -> Bool) -> String -> String
uppers xs = filter isUpper xs
```

## Curried vs Uncurried

Tuples can be used to define uncurried functions. A function that takes two arguments can be converted to a function that takes an a tuple of two arguments, and returns a single argument/

```haskell
uncurriedAdd :: (Int, Int) -> Int
uncurriedAdd (x, y) = x + y
```

There are higher-order functions, `curry` and `uncurry`, which will do this for us:

```haskell
curry :: ((a,b) -> c) -> a -> b -> c
curry f x y = f (x,y)

uncurry :: (a -> b -> c) -> (a,b) -> c
uncurry f (x,y) = f x y

-- examples
uncurriedAdd :: (Int, Int) -> Int
uncurriedAdd = uncurry (+)

curriedAdd :: Int -> Int -> Int
curriedAdd = curry uncurriedAdd

addPairs :: [Int]
addPairs = map (uncurry (+)) [(1, 2), (3, 4)]
```

## Folds

`foldr` and `foldl` "collapse" a list by applying a function `f` to each element in the list in turn, where the first argument is an accumulated value, and the second is the starting value passed. There are several functions which follow this pattern, all reducing a list to a single value using recursion:

```haskell
-- and together all bools in the list
and :: [Bool] -> Bool
and [] = True
and (b:bs) = ((&&) b) (and bs)

-- product of everything in the list
product :: Num a => [a] -> a
product [] = 1
product (n:ns) = ((*) n) (product ns)

-- length of list
length :: [a] -> Int
length [] = 0
length (x:xs) = ((+) 1) (length xs)
```

All of these functions have a similar structure, and can be redefined using `foldr`:

```haskell
foldr :: (a -> b -> b) -> b -> [a] -> b
foldr f z []     = z
foldr f z (x:xs) = f x (foldr f z xs)

-- examples
and :: [Bool] -> Bool
and = foldr (&&) True

product :: Num a => [a] -> a
product = foldr (*) 1

length :: [a] -> Int
length = foldr (\x n -> n + 1) 0
```

In essence, `foldr f z [1, 2, 3]` is equal to `f 1 (f 2 (f 3 z))`. `foldr` folds from right (`r`) to left, starting by applying the function to the last element of the list first. `foldl`, however, works in the opposite direction:

```haskell
foldl :: (b -> a -> b) -> b -> [a] -> b
foldl f z [] = z
foldl f z (x:xs) = foldl f (f z x) xs
```

`foldl f z [1, 2, 3]` is equal to `f (f (f z 1) 2) 3`. For some functions (commutative ones), there is no difference, but often the choice of which to use is important.

## Function Composition

In haskell, functions are composed with the `(.)` operator, a higher order function defined as:

```haskell
(.) :: (b -> c) -> (a -> b) -> a -> c
(.) f g x = f (g x)
```

Function composition is used to chain functions, so instead of `f (g (h x))`, you can write `f.g.h x`. An example, defining a function `count` to count the number of occurrences of an element in a list:

```haskell
count :: Eq a => a => [a] -> Int
count _ [] = 0
count y (x:xs)
    | y == x    = 1 + count y xs
    | otherwise =     count y xs

--alternatively, using a fold
count y = foldr (\x l -> if y==x then 1+l else l) 0

-- the stdlib can do this
count y x = length (filter (==y) xs)
count y = length . filter (==y) -- using composition
```
