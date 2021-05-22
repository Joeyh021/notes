# Types & Typeclasses

Haskell is a strongly, statically typed programming language, which helps prevent us from writing bad programs.

- Java, C, Rust - strongly typed
- Python, Ruby - dynamically typed

Types have many benefits:

- Describe the value of an expression
- Prevent us from doing silly things
  - `not 7` gives `Type Error`
- Good for documentation
- Type errors occur at compile time

GHC checks types and infers the type of expressions for us. Types are discarded after type checking, and are not available at runtime.

## Type notation

We say an expression has a type by writing `expression :: type`, read as "expression has type".

- If we can assign a type to an expression, it is "well typed"
- A type approximates and describes the value of an expression.

```haskell
42 :: Int
True :: Bool
'c' :: Char
"Cake" :: String
0.5 :: Double
4 + 8 :: Int
2 * 9 + 3 :: Int
True && False :: Bool
"AB" ++ "CD" :: String
even 9 :: Bool
```

Before writing a definition, it is good practice to write its type.

```haskell
daysPerWeek :: Int
daysperWeek = 7
```

### Function Types

The types of functions are denoted using arrows `->`. The `not` function is defined as `not :: Bool -> Bool`, read "not has type bool to bool". It means if you give me a `Bool`, I will give you back another `Bool`.

The definition of the `not` function is shown below.

```haskell
not :: Bool -> Bool
not True = False
not False = True
not True :: Bool
```

The last line shows how function application eliminates function types, as by applying a function to a value, one of the types from the function definition is removed as it has already been applied.

The `xor` function takes two boolean arguments and is defined:

```haskell
xor :: Bool -> Bool -> Bool
xor False True = True
xor False False = False
xor True True = False
xor True False = True
```

Applying one argument to a function that takes two is called _partial function application_, as it partially applies arguments to a function to return another function. This is because all functions in haskell are _curried_, meaning all functions actually only take one argument, and functions taking more than one argument are constructed from applying multiple functions with one argument.

```haskell
xor :: Bool -> Bool -> Bool
xor True :: Bool -> Bool -- partially applied function
xor True False :: Bool
```

## Polymorphic Types

What is the type of `\x -> x` ? Could be:

```haskell
f :: Int -> Int
f :: Bool -> Bool
f :: Char -> Char
```

These are all permissible types. To save redifining a function, we can use type variables. Anything with a single lowercase character is a type variable (`a` in this case).

```haskell
\x -> x :: a -> a
```

`\x -> x` is the identity function, as it returns its argument unchanged. We can also have functions with more than one type variable, to specify that arguments have different types:

```haskell
const :: a -> b -> a
const x y = x
```

## Tuples

Tuples are a useful data structure

```haskell
(4, 7) :: (Int, Int)
(4, 7.0) :: (Int, Double)
('a', 9, "Hello") :: (Char, Int, String)

--can nest tuples
((4, 'g'), False) :: ((Int, Char), Bool)

--can also contain functions
(\x -> x, 8.15) :: (a->a, Double)
```

Functions on pairs. These are all in the standard library

```haskell
fst :: (a,b) -> a
snd :: (a,b) -> b
swap :: (a,b) -> (b,a)

-- these functions can also be defined by pattern matching
fst (x,y) = x
snd (x,y) = y
swap (x,y) = (y,x)
```

## Type Classes

Type classes are used for restricting polymorphism and overloading functions.

- The `(+)` operator probably has type `(+) :: Int -> Int -> Int`,
  - This is correct, as this typing is permissible
- What about `1.2 + 3.4`?
  - Will raise an error with this definition of `(+)`
- Can polymorphism help?
- `(+) :: a -> a -> a`
  - This is stupid
  - Allows any types
  - Won't work
- A _type class constraint_ is needed
- The actual type is `(+) :: Num a => a -> a -> a`
  - The `Num a =>` part is the constraint part
  - Tells the compiler that `a` has to belong to the typeclass `Num`
- Type class constraints are used to constrain type variables to only types which support the functions or operators specified by the type class
- Type class names start with an uppercase character
- `Num` is a type class that represents all types which support arithmetic operations

### Defining Type Classes

A type class is defined as follows:

```haskell
class Num a where
    (+) :: a -> a -> a
    (-) :: a -> a -> a
    abs :: a -> a
```

- `Num` is the name of the type class
- `a` is the type variable representing it in the method typings
- The type class contains method signatures for all functions that members of the type class must implement

The type class contains type definitions, but no implementations for the functions. To implement them, we need to tell the compiler which types implement the type class and _how_ they implement the functions in the type class. The `Show` typeclass tells the compiler that a type can be converted to a string.

```haskell
-- typeclass definition
class Show a where
    show :: a -> String

-- instance of typeclass for bool type
instance Show Bool where
    show True = "True"
    show False = "False"
```

The `instance` definition tells the compiler that `Bool` is a member of `Show`, and how it implements the functions that `Show` defines.

### Prelude Type Classes

- `Num` for numbers
- `Eq` for equality operators `==` `/=`
- `Ord` for inequality/comparison operators `>` `<=` etc
- `Show` for converting things to string
- Many More

The REPL makes extensive use of `Show` to print things. There are no show instances for function types, so you get an error if you try to `Show` functions. Typing `:i` in the REPL gets info on a type class. `:i Num` gives:

```haskell
class Num a where
  (+) :: a -> a -> a
  (-) :: a -> a -> a
  (*) :: a -> a -> a
  negate :: a -> a
  abs :: a -> a
  signum :: a -> a
  fromInteger :: Integer -> a
  {-# MINIMAL (+), (*), abs, signum, fromInteger, (negate | (-)) #-}
        -- Defined in ‘GHC.Num’
instance Num Word -- Defined in ‘GHC.Num’
instance Num Integer -- Defined in ‘GHC.Num’
instance Num Int -- Defined in ‘GHC.Num’
instance Num Float -- Defined in ‘GHC.Float’
instance Num Double -- Defined in ‘GHC.Float’
```

### Types of Polymorphism

In Java, there are two kinds of polymorphism:

- Parametric polymorphism
  - (Generics/Templates)
  - A class is generic over certain types
  - Can put whatever type you like in there to make a concrete class of that type
- Subtype polymorphism
  - Can do `class Duck extends Bird`
  - Can put `Duck`s wherever `Bird`s are expected

Haskell has two kinds of polymorphism also:

- Parametric polymorphism
  - Type variables
  - `id :: a -> a`
  - Can accept any type where `a` is
- Ad-hoc polymorphism
  - Uses type classes
  - `double :: Num a => a -> a`
  - `double x = x * 2`

### Further Uses of Constraints

An example `Show` instance for pairs:

```haskell
instance (Show a, Show b) => Show (a,b) Show where
    show (x,y) = "(" ++ show x ++ ", " ++ show y ++ ")"
```

The `(Show a, Show b) => ` defines a constraint on `a` and `b` that they must both be instances of show for them to be used with this instance. The instance is actually defined on the type `(a,b)`.

Can also define that a typeclass has a superclass, meaning that for a type to be an instance of a typeclass, it must be an instance of some other typeclass first. The `Ord` typeclass has a superclass constraint of the `Eq` typeclass, meaning something cant be `Ord` without it first being `Eq`. This makes sense, as you can't have an ordering without first some notion of equality.

```haskell
class Eq a => Ord a where
    (<) :: a -> a -> Bool
    (<=) :: a -> a -> Bool
```

### Default Implementations

Type classes can provide default method implementations. For example, `(<=)` can be defined using the definition of `(<)`, so a default one can be provided using `(==)`

```haskell
class Eq a => Ord a where
    (<) :: a -> a -> Bool
    (<=) :: a -> a -> Bool
    (<=) x y = x < y || x == y
    -- or defined infix
    x <= y = x < y || x == y
```

### Derivable Type Classes

Writing type class instances can be tedious. Can use the `deriving` keyword to automatically generate them, which does the same as manually defining type class instances.

```haskell
data Bool = False | True
    deriving Eq
data Module = CS141 | CS118 | CS126
    deriving (Eq, Ord, Show)
```

Certain other typeclasses can be dervied too, by enabling language extensions within GHC. The extension `XDeriveFunctor` allows for types to include a `deriving Functor` statement.

## Data Types

How do we make our own data types in haskell? Algebraic data types.

- `Bool` is a type
- There are two values of type `Bool`
  - `True`
  - `False`

```haskell
data Bool = True | False
```

A type definition consists of the type name `Bool` and it's data constructors, or values `True | False`. A type definition introduces data constructors into scope, which are just functions.

```haskell
True :: Bool
False :: Bool
```

We can pattern match on data constructors, and also use them as values. This is true for _all_ types.

```haskell
not :: Bool -> Bool
not True = False
not False = True
```

More examples:

```haskell
data Module = CS141 | CS256 | CS263

data Language = PHP | Java | Haskell | CPP

--for this one, the type name and constructor name are separate names in the namespace
data Unit = Unit

-- this one has no values
data Void
```

### Parametrised Data Constructors

Parameters can be added to a data constructor by adding their types after the constructor's name. The example below defines a type to represent shapes. Remember that data constructors are just functions, and can be partially applied just like other functions.

```haskell
data Shape = Rect Double Double | Circle Double
Rect :: Double -> Double -> Shape
Circle :: Double -> Shape

-- functions utilising the Shape type

-- constructs a square
square x :: Double -> Shape
square x = Rect x x

-- calculates area of a shape using pattern matching on constructors
area :: Shape -> Double
area (Rect w h) = w * h
area (Circle r) = pi * r * r

isLine :: Shape -> Bool#
isLine (Rect 1 h) = True
isLine (Rect w 1) = True
isLine _ = False

-- examples
area (square 4.0)
=> area (Rect 4.0 4.0)
=> 4.0 * 4.0
=> 16.0

area (Circle 5.0)
=> pi * 5.0 * 5.0
=> pi * 25.0
=> 78.53981...

```

### Parametrised Data Types

The `Maybe` type is an example of a data type parametrised over some type variable `a`. It exists within the standard library, defined as `data Maybe a = Nothing | Just a`. This type is used to show that either there is no result, or some type `a`.

A function using the `Maybe` type to perform devision safely, returning `Nothing` if the divisor is 0, and the result wrapped in a `Just` if the division can be done.

```haskell
data Maybe a = Nothing | Just a

safediv :: Int -> Int -> Maybe Int
safediv x 0 = Nothing
safediv x y = Just (x `div y)
-- safediv 8 0 => Nothing
-- safediv 8 4 = Just (8 `div` 4) = Just 2

-- this is included in stdlib for extracting the value using pattern matching
fromMaybe :: a -> Maybe a -> a
fromMaybe x Nothing = x
fromMaybe _ (Just x) = x
```

Null references were invented in the 1960s ... the guy who invented them called them his "billion dollar mistake". The `Maybe` type is a good alternative, which makes it clear that a value may be absent. Similar concepts exist in other procedural languages (Swift, Rust)

### Recursive Data Types

In Haskell, data types can be defined in terms of themselves. An example definition of the natural numbers is shown below, where a number is either zero, or one plus another number.

```haskell
data Nat = Zero | Succ Nat

Zero :: Nat
Succ :: Nat -> Nat

one = Succ Zero
two = Succ one
three = Succ two

add :: Nat -> Nat -> Nat
add Zero     m = m
add (Succ n) m = Succ (add n m)

mul :: Nat -> Nat -> Nat
mul Zero     m = Zero
mul (Succ n) m = add m (mul n m)
```

Another example defining binary trees in terms of themselves. A binary tree consists of subtrees (smaller binary trees). This type is parametrised over some type variable `a` also.

```haskell
Data BinTree a = Leaf a | Node (BinTree a) (BinTree a)

--converts a binary tree to a list
flatten :: BinTree a -> [a]
flatten (Leaf x)   = [x]
flatten (Node l r) = flatten l ++ flatten r

-- computes the max depth of the tree
depth :: BinTree a -> Int
depth (Leaf _)   = 1
depth (Node l r) = 1 + max (depth l) (depth r)
```

## Type Aliases

Types can be aliased. For example, `String` has been an alias of `[Char]` all along.

```haskell
type String = [Char]
```

Another example, defining a `Predicate` type

```haskell
type Predicate a = a -> Bool

isEven :: Predicate Int
isEven n = n `mod` 2 == 0

isEven' :: (Eq a, Integral a) => Predicate a
isEven' n = n `mod` 2 == 0
```
