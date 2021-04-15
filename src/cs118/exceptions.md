# Exceptions

## Exceptions

## Generics

Generics allow for classes to be parametrised over some type or types, to provide additional compile time static type checking.

### Type erasure

Type information in generic classes and methods is erased at runtime, with the compiler replacing all instances of the type variable with `Object`. This means that at runtime, any type casting of generic types is unchecked, and can cause runtime exceptions.
