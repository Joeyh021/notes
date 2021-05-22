# Functors & Foldables

## The `\$` Operator

The `\$` operator is an operator for function application. It has signature:

```haskell
(\$) :: (a -> b) -> a -> b
f \$ x = f x
```

At first it doesn't look like it does much, but it is actually defined as `infixr 0` meaning it is:

- An infix operator with right associativity
- Has the lowest precedence possible.

In contrast, normal function application is left associative and has the highest precedence possible. Practically, this means it can be used where you would otherwise have to use parentheses, to make code a lot cleaner. Some examples:

```haskell
-- elem finds if an item x is contained in the list xs
elem :: Eq a => a -> [a] -> Bool
elem x xs = not (null (filter (==x) xs))
-- rewritten, without parentheses
elem x xs = not \$ null \$ filter (==x) xs
-- or using function composition (.)
elem x = not . null . filter (==x)
```

Another example, shown along with a trace of it's reduction:

```haskell
map (\$ 4) [even, odd]
=> (even $ 4) : map (\$ 4) [odd]
=> (even \$ 4) : (odd \$ 4) : []
=> True : (odd \$ 4) : []
=> True : False : []
=> [True, False]
```

## Foldables

[It has already been shown](./functions.md#folds) how many examples of recursive functions can be rewritten with a `fold`. `fold`ing is a an example of a useful design pattern in functional programming.

### A Trip to Michael's Tree Nursery

Binary trees are recursive data structures, that can be recursively operated on (much like lists). The example below shows a simple definition of a binary tree along with some functions to operate on it.

```haskell
-- our binary tree type
data BinTree a = Leaf | Node (BinTree a) a (BinTree a)
    deriving Show

-- simple recursive functions
-- how big is the tree?
size :: BinTree a -> Int
size Leaf = 0
size Node (l _ r) = 1 + size l + size r

-- is x contained within the tree?
member:: Eq a => a -> BinTree a -> Bool
member _ Leaf = False
member x (Node l y r) = x == y || member x l || member x r

-- what is the sum of all the Nums in the tree
tsum :: Num a => BinTree a -> a
tsum Leaf =0
tsum (Node l n r) = n + tsum l + tsum r
```

These are all recursive functions operating on a tree, and can be generalised by defining our own version of a fold for trees, dubbed `toldr`. Note the similarities between `foldr` and `toldr`.

```haskell
toldr :: (a -> b -> b) -> b -> BinTree a -> b
toldr f z Leaf = z
toldr f z (Node l x r) = f x (toldr f (toldr f z r) l)

tsum :: Num a => BinTree a -> a
tsum = toldr (+) 0

member :: Eq a => a -> BinTree a -> Bool
member x = toldr (\y r -> x==y || r) False

size :: BinTree a -> Int
size = toldr(\_ r -> 1 + r) 0
```

### The `Foldable` Typeclass

This abstraction does actually exist in the standard libary, as a typeclass. A type can be an instance of `Foldable` (like lists), which then allows `foldr` to be used on it.

```haskell
class Foldable t where
    foldr :: (a -> b -> b) -> b -> t a -> b

-- for lists
-- exists in prelude
instance Foldable [] where
    foldr f z [] = z
    foldr f z (x:xs) = f x (foldr f z xs)

-- for our bintree
instance Foldable BinTree where
    foldr _ z Leaf         = z
    foldr f z (Node l x r) = f x (foldr f (foldr f z r) l)
```

This instance of `Foldable` for `BinTree` can now be used to generalise our functions that operate on it:

```haskell
sum :: (Foldable t, Num a) => t a -> t
sum = foldr (+) 0

elem :: (Foldable t, Eq a) => a -> t a -> Bool
elem x = foldr (\y r -> x==y || r) False

length :: Foldable t => t a -> Int
length = foldr (\_ r -> 1 + r) 0
```

These methods are actually part of the `Foldable` typeclass, so when defining an instance of `Foldable` on some type, you get them for free, and they are polymorphic over all foldable types.

`Foldable` is also a derivable typeclass using the language extension `-XDeriveFoldable`, so all of this can be derived automatically.

## Functors

Bringing back our `safediv` function from [previously](./types.md#parametrised-data-types):

```haskell
data Maybe a = Nothing | Just a

safediv :: Int -> Int -> Maybe Int
safediv _ 0 = Nothing
safediv x y = Just (x `div` y)

divAndAdd :: Int -> Int -> Maybe Int
divAndAdd x y = 5 + safediv x y -- doesn't work, type error

-- using a case statement
divAndAdd x y = case safediv x y of
    Nothing -> Nothing
    Just r -> Just (5+r)
-- bit messy
```

The pattern of applying a function a value within a `Maybe` can be generalise. Defining a function `pam` to do this for us:

```haskell
pam :: (a -> b) -> Maybe a -> Maybe b
pam _ Nothing = Nothing
pam f (Just x) = Just (f x)

-- much nicer!
divAndAdd :: Int -> Int -> Maybe Int
divAndAdd x y = pam (5+) (safediv x y)
```

It would be nice if there was some way to generalise the pattern of applying a function to element(s) in a container. The `Functor` typeclass does this for us. A type is a functor if we can apply a function to it. Lists are functors, as that is what the `map` function does. `Maybe` and `BinTree`s are also functors.

```haskell
class Functor f where
    fmap :: (a -> b) -> f a -> f b

instance Functor [] where
    fmap = map

instance Functor Maybe where
    fmap f Nothing = Nothing
    fmap f (Just x) = Just (f x)

instance Functor BinTree where
    fmap f (Leaf x) = Leaf (f x)
    fmap f (Node lr ) = Node (fmap f l) (fmap f r)
```

Functors can be thought of as "boxes", and when given a function, will apply it to the value in the box, and return the result in the same box. Some examples of definitions using functors:

```haskell
-- increases all Ints in the "box" by 5
incByFive :: Functor f => f Int -> f Int
incByFive = fmap (+5)

-- applies the odd function to all Ints in the box
odds :: Functor f => f Int -> f Bool
odds = fmap odd

-- redefining using fmap
divAndAdd :: Functor f => Int -> Int -> Maybe Int
divAndAdd x y = fmap (5+) (safediv x y)
```

Functor is also another typeclass that can be derived by GHC, using "-XDeriveFunctor".

### The `<\$>` Operator

An operator that is essentially just an infix version of the `fmap` function.

```haskell
infixl 4 <\$>
(<\$>) :: Functor f => (a -> b) -> f a -> f b
(<\$>) = fmap

fmap (replicate 6) (safediv 8 4)
== replicate 6 <\$> safediv 8 4
=> Just [2,2,2,2,2,2]


-- redefining using <\$>
divAndAdd :: Functor f => Int -> Int -> Maybe Int
divAndAdd x y = (5+) <\$> (safediv x y)

```

### Functor Laws

There are certain laws that functors must obey for their properties to hold. A type `f` is a functor if there exists a function `fmap :: (a-> b) -> f a -> f b` , and the following laws hold for it:

- `fmap id = id`
  - If the values in the functor are mapped to themselves, the result will be an unmodified functor
- `fmap (f.g) = (fmap f) . (fmap g)`
  - The fusion law
  - If two `fmap`s are applied one after the other, the result must be the same as a single `fmap` which applies the two functions in turn
- These laws imply that a data structure's "shape" does not change when `fmap`ped
