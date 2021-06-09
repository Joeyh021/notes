# Type Level Programming

Type level programming is about encoding more information in our types, so make them more descriptive. The more descriptive types are, the easier it is to avoid runtime errors, as the type checker can do more at compile time.

The GHC language extensions used here are:

- `-XDataKinds`
- `-XGATDs`
- `-XKindSignatures`
- `-XScopedTypeVariables`
- `-XTypeFamilies`

## Type Promotion

As we already know, types have kinds:

- `Bool :: *`
- `Maybe :: * -> *`
- `[] :: * -> *`
- `State :: * -> * -> *`

Also recall that we have to partially apply type constructors with kinds greater than `* -> *` to use them as monads:

```haskell
-- Maybe :: * -> *
instance Monad Maybe where
    ...

-- State :: * -> * -> *
instance Monad (State s) where
    ...

-- Either :: * -> * -> *
instance Monad Either where
    ... -- type error

instance Monad (Either e) where
    ... -- works
```

**Type Promotion** is used to define our own kinds. The DataKinds extension allows for this. Without DataKinds, `data Bool = True | False` gives us two constructors, `True` and `False`. At the three levels in haskell:

- At the kind-level: `*`
- At the type-level `Bool`
- At the value-level: `True` or `False`

With DataKinds, we also get the following two new types, both of kind `Bool`:

- `'True :: Bool`
- `'False :: Bool`

The value constructors `True` and `False` have been promoted to the type level as `'True` and `'False`. A new kind is introduced too, `Bool` instead of just `*`. We now have booleans at the type level.

**DataKinds promotes all value constructors to type constructors, and all type constructors to kinds.**

Another example, recursively defined natural numbers. `Zero` is 0, and `Succ Nat` is `Nat + 1`.

```haskell
data Nat = Zero | Succ Nat

-- values :: types
Zero :: Nat
Succ :: Nat -> Nat

-- types :: kinds
'Zero :: Nat
'Succ :: Nat -> Nat
```

## Generalised Algebraic Data Types

GADTs allow for more expressive type definitions. Normal ADT syntax:

```haskell
data Bool = True | False
-- gives two values
True :: Bool
False :: Bool
```

Usually, we define the type and its values, which yields two value constructors. With a GADT, we explicitly specify the type of each data constructor:

```haskell
data Bool where
  True :: Bool
  False :: Bool

data Nat where
  Zero :: Nat
  Succ :: Nat -> Nat
```

The example below defines a recursively defined `Vector` type.

```haskell
-- Normally
data Vector a = Nil | Cons a (Vector a)

-- GADT
data Vector a where
  Nil  :: Vector a
  Cons :: a -> Vector a -> Vector a
```

## Example: A Safe Vector

The vector definition above can use another feature, called KindSignatures, to put more detail into the type of the GADT definition:

```haskell
data Vector (n :: Nat) a where
  Nil :: Vector n a
  Cons :: a -> Vector n a -> Vector n a
```

This definition includes an `n` to encode the size of the vector in the type. `n` is a type of kind `Nat`, as defined above. The values and types were promoted using DataKinds. The type variable `n` can also be replaced with concrete types:

```haskell
data Vector (n :: Nat) a where
  Nil :: Vector `Zero a
  Cons :: a -> Vector n a -> Vector (`Succ n) a

-- example
cakemix :: Vector ('Succ ('Succ Zero)) String
cakemix = Cons "Fish-Shaped rhubarb" (Cons "4 large eggs" Nil)
```

This further constrains the types to make the types more expressive. Now we have the length of the list expressed at type level, we can define a safer version of the head function that rejects zero-length lists at compile time.

```haskell
vhead :: Vector ('Succ n) a -> a
-- this case will throw an error at compile time as it doesn't make sense
vhead Nil = undefined
vhead (Cons x xs) = x
```

Can also define a zip function for the vector type that forces inputs to be of the same length. The type variable `n` tells the compiler in the type signature that both vectors should have the same length.

```haskell
vzip :: Vector n a -> Vector n b -> Vector n (a,b)
vzip Nil Nil = Nil
vzip (Cons x xs) (Cons y ys) = Cons (x,y) (vzip xs ys)
```

## Singleton types

Singletons are types with a 1:1 correspondence between types and values. Every type has only a single value constructor. The following GADT is a singleton type for natural numbers. The `(n :: Nat)` in the type definition annotates the type with it's corresponding value at type level. The type is parametrised over `n`, where `n` is the value of the type, at type level.

```haskell
data SNat (n :: Nat) where
    SZero :: SNat 'Zero
    SSucc :: Snat n -> SNat ('Succ n)

-- there is only one value of type SNat 'Zero
szero :: SNat 'Zero
szero = SZero

-- singleton value for one and it's type
sone :: SNat ('Succ 'Zero)
sone = SSucc SZero

stwo :: SNat ('Succ ('Succ Zero))
sone = SSucc sone
```

**There is only one value of each type**. The data is stored at both the value and type level.

This can be used to define a replicate function for the vector:

```haskell
vreplicate :: SNat n -> a -> Vector n a
vreplicate SZero x = Nil
vreplicate (SSucc n) x = Cons x (vreplicate n x)
```

The length of the vector we want is `SNat n` at type level, which is a singleton type. This allows us to be sure that the vector we are outputting is the same size as what we told it, making sure this type checks.

## Proxy Types & Reification

We are storing data at the type level, which allows us to access the data at compile time and statically check it. If we want to access that data at runtime, for example to find the length of a vector, we need a _proxy type_. Proxy types allow for turning type level data to values, ie turning a type level natural number (`Nat`) into an `Int`. Haskell has no types at runtime (due to type erasure), so proxies are a hack around this.

```haskell
-- a type NatProxy parametrised over some type a of kind Nat
data NatProxy (a :: Nat) = MkProxy
-- NatProxy :: Nat -> *
-- MkProxy :: NatProxy a
```

This proxy type is parametrised over some value of type `a` with kind `Nat`, but there is never actually any values of type `a` involved, the info is at the type level. `a` is a phantom type.

```haskell
zeroProxy :: NatProxy 'Zero
zeroProxy = MkProxy

oneProxy :: NatProxy ('Succ 'Zero)
oneProxy = MkProxy
```

These two proxies have the same value, but different types. The `Nat` type is in the phantom type `a` at type level.

We can then define a type class, called `FromNat`, that is parametrised over some type `n` of kind `Nat`:

```haskell
class FromNat (n :: Nat) where
  fromNat :: NatProxy n -> Int
```

The function `fromNat` takes a `NatProxy`, our proxy type, and converts it to an int. Instances can be defined for the two types of `Nat` to allow us to covert the type level `Nat`s to `Int`s.

```haskell
-- instance for 'Zero
instance FromNat 'Zero where
  -- fromNat :: NatProxy 'Zero -> int
  fromNat _ = 0

instance FromNat n => FromNat ('Succ n) where
    fromNat _ = 1 + fromNat (MkProxy :: NatProxy n)
```

The arguments to these functions are irrelevant, as the info is in the types. The variable `n` refers to the same type variable as in the instance head, using scoped type variables. This hack allows for passing types to functions using proxies, and the converting them to values using reification.

## Type Families

Type families allow for performing computation at the type level. A type family can be defined to allow addition of two type-level natural numbers:

```haskell
type family Add (n :: Nat) (m :: Nat) :: Nat where
  Add 'Zero m = m
  Add ('Succ n) m = 'Succ (Add n m)

-- alternatively
type family (n :: Nat) + (m :: Nat) :: Nat where
  'Zero   + m = m
  'Succ n + m = 'Succ (n + m)
```

The type family for `(+)` is whats known as a closed type family: once it's defined it cannot be redfined or added to. This type family can be used to define an append function for our vector:

```haskell
vappend :: Vector n a -> Vector m a -> Vector (n+m) a
vappend Nil         ys = ys
vappend (Cons x xs) ys = Cons x (vappend xs ys)
```

Importing `GHC.TypeLits` allows for the use of integer literals at type level instead of writing out long recursive type definitions for `Nat`. This means we can now do:

```haskell
data Vector (n :: Nat) a where
  Nil :: Vector 0 a
  Cons :: a -> Vector n a -> Vector (n+1) a

vappend Nil          Nil          :: Vector 0 a
vappend (Cons 4 Nil) Nil          :: Vector 1 Int
vappend (Cons 4 Nil) (Cons 8 Nil) :: Vector 2 Int
```

### Associated (Open) Type Families

The definition below defines a typeclass for a general collection of items:

```haskell
class Collection c where
  empty :: c a
  insert :: a -> c a -> c a
  member :: a -> c a -> Bool

instance Collection [] where
  empty = []
  insert x xs = x : xs
  member x xs = x `elem` xs
```

However, the list instance will throw an error, as `elem` has an `Eq` constraint on it, while the `member` type from the typeclass doesn't. Another example, defining the red-black tree as an instance of `Collection` (the tree is defined in one of the lab sheets):

```haskell
instance Collection Tree where
  empty = empty
  insert x t = insert t x
  member x t = member x t
```

This will raise two type errors, as both `insert` and `member` for the tree need `Ord` constraints, which `Collection` doesn't have.

To fix this, we can attach an associated type family to a type class.

```haskell
class Collection c where
  type family Elem c :: *

  empty :: c
  insert :: a -> c -> c
  member :: a -> c -> Bool
```

For an instance of `Collection` for some type `c`, we must also define a case for c for a type level function `Elem`, this establishing a relation between `c` and some type of kind `*`.

We can now define instance for list and tree, where `Eq` and `Ord` constraints are placed in instance definition.

```haskell
instance Eq a => Collection [a] where
    type Elem [a] = a

    empty = []
    insert x xs = x : xs
    member x xs = x `elem` xs


instance Ord a => Collection (L.Tree a) where
    type Elem (L.Tree a) = a

    empty      = L.Leaf
    insert x t = L.insert t x
    member x t = L.member x t
```
