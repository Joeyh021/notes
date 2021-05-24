# Monads

**ṱ̴̹͙̗̣̙ͮ͆͑̊̅h̸̢͔͍̘̭͍̞̹̀ͣ̅͢e̖̠ͫ̒ͦ̅̉̓̓́͟͞ ͑ͥ̌̀̉̐̂͏͚̤͜f͚͔͖̠̣͚ͤ͆ͦ͂͆̄ͥ͌o̶̡̡̝͎͎̥͖̰̭̠̊r̗̯͈̀̚b̢͙̺͚̅͝i̸̡̱̯͔̠̲̿dͧ̈ͭ̑҉͎̮d̆̓̂̏̉̏͌͆̚͝͏̺͓̜̪͓e̎ͯͨ͢҉͙̠͕͍͉n͇̼̞̙͕̮̣͈͓ͨ͐͛̽ͣ̏͆́̓ ̵ͧ̏ͤ͋̌̒͘҉̞̞̱̲͓k͔̂ͪͦ́̀͗͘n͇̰͖̓ͦ͂̇̂͌̐ȯ̸̥͔̩͒̋͂̿͌w̞̟͔̙͇̾͋̅̅̔ͅlͧ͏͎̣̲̖̥ẻ̴̢̢͎̻̹̑͂̆̽ͮ̓͋d̴̪͉̜͓̗̈ͭ̓ͥͥ͞g͊̾̋̊͊̓͑҉͏̭͇̝̰̲̤̫̥e͈̝̖̖̾ͬ̍͢͞**

Monads are another level of abstraction on top of applicatives, and allow for much more flexible and expressive computation. Functors => Applicatives => Monads form a hierarchy of abstractions.

## The `Monad` typeclass

```haskell
class Applicative m => Monad m where
  (>>=) :: m a -> (a -> m b) -> m b

  return :: a -> m a
  return = pure
```

The `>>=` operator is called _bind_, and applies a function that _returns_ a wrapped value to another wrapped value.

- The left operand is some monad containing a value `a`
- the right operand is a function of type `a -> m b`, ie it takes some `a` and returns a monad containing something of type `b`
- The result is a monad of type `b`

The operator can essentially be thought of as feeding the wrapped value into the function, to get a new wrapped value. `x >>= f` unwraps the value in `x` from it, and applies the function to `f` to it. Understanding bind is key to understanding monads.

`return` is just the same as `pure` for applicatives, lifting the value `a` into some monadic context.

Some example monad instances:

```haskell
instance Monad Maybe where
  Nothing >>= _ = Nothing
  Just x  >>= f = f x

instance Monad (Either e) where
  Left l >>= _ = Left l
  Right r >>= f = f r

  pure = Right

instance Monad [] where
  xs >>= f = concat (map f xs)
```

Monads give effects: composing computations sequentially using `>>=` has an effect. With the `State` Monad this effect is "mutation". With `Maybe` and `Either` the effect is that we may raise a failure at any step. Effects only happen when we want them, implemented by pure functions.

## Monad Laws

For a type to be a monad, it must satisfy the following laws:

- `return a >>= h = h a`
  - Left identity
- `m >>= return = m`
  - Right identity
- `(m >>= f) >>= f = m >>= (\x -> f x >>= g)`
  - Associativity

## Example: Evaluating an Expression

A type `Expr` is shown below that represents a mathematical expression, and an `eval` function to evaluate it. Note that it is actually unsafe and could crash at runtime due to a div by 0 error. The `safediv` function does this using `Maybe`.

```haskell
data Expr = Val Int | Add Expr Expr | Div Expr Expr

eval :: Expr -> Int
eval (Val n)   = n
eval (Add l r) = eval l + eval r
eval (Div l r) = eval l `div` eval r

safediv :: Int -> Int -> Maybe Int
safediv x 0 = Nothing
safediv x y = Just (x `div` y)
```

If we want to use `safediv` with `eval`, we need to change it's type signature. The updated `eval` is shown below using applicatives to write the function cleanly and propagate any errors:

```haskell
eval :: Expr -> Maybe Int
eval (Val n) = Just n
eval (Add l r) = (+) <\$> eval l <*> eval r
eval (Div l r) = safediv <\$> eval l <*> eval r
```

If any recursive calls return a `Nothing`, the entire expression will evaluate to `Nothing`. Otherwise, the `<\$>` and `<*>` will evaluate the expression within the `Maybe` context. However, this is still wrong as the last expression now has type of `Maybe (Maybe Int)`. This can be fixed using `>>=`. Note the use of lambdas.

```haskell
eval (Div l r) = eval l >>= \x ->
                 eval r >>= \y ->
                 x `safediv` y
```

The `Expr` type can be extended to include a conditional expression, where If Condition True False`.

```haskell
data Expr = Val Int
          | Add Expr Expr
          | Div Expr Expr
          | If Expr Expr Expr

eval :: Expr -> Maybe Int
eval (Val n)    = Just n
eval (Add l r)  = eval l >>= \x ->
                  eval r >>= \y ->
                  Just (x+y)
eval (Div l r)  = eval l >>= \x ->
                  eval r >>= \y ->
                  x `safediv` y
eval (If c t f) = ifA <$> eval c <*> eval t <*> eval f
  where ifA b x y = if b /= 0 then x else y
```

With this definition using applicatives, both branches of the conditional branch are evaluated. If there is an error in the false branch, the whole expression will fail. Here, using bind, the semantics are correct.

```haskell
eval' (If c t f) = eval' c >>= \b ->
    if b /= 0 then eval t else eval f
```

## `<*>` vs `>>=`

Bind is a much more powerful abstraction than apply:

```haskell
<*>  :: m (a -> b) -> m a -> m b
(>>=) :: m a -> (a -> m b) -> m b
```

- Apply operates on functions already inside a context
  - This function can't determine anything to do with the context
  - With a `Maybe`, it can't determine if the overall expression returns `Nothing` or not
- Bind takes a function that returns a context, and can therefore can determine more about the result of the overall expression
  - It knows if it's going to return `Nothing`

## `do` Notation

Notice the pattern of `>>=` being used with lambdas a fair amount. This can be tidied up with some nice syntactic sugar, called `do` notation. Rewriting the earlier example:

```haskell
eval :: Expr -> Maybe Int
eval (Val n)   = return n
eval (Add l r) = do
    x <- eval l
    y <- eval r
    return (x+y)
eval (Div l r) = do
    x <- eval l
    y <- eval r
    x `safediv` y
```

This looks like imperative code, but is actually using monads behind the scenes. The arrows bind the results of the evaluation to some local definition, which can then be referred to further down the block.

- A block must always end with a function call that returns a monad -
  - usually `return`, but `safediv` is used too
- If any of the calls within the `do` block shown returns `Nothing`, the entire block will short-circuit to a `Nothing`.
