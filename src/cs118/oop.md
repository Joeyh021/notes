# OOP Principles

## Constructors

All Java classes have a constructor, which is the method called upon object instantiation.

- An object can have multiple overloaded constructors
- A constructor can have any access modifier
- Constructors can call other constructors through the `this()` method.
- If no constructor is specified, a default constructor is generated which takes no arguments and does nothing.
- The first call in any constructor is to the superclass constructor.
  - This can be elided, and the default constructor is called
  - Can call explicitly with `super()`

## Access Modifiers

Access modifiers apply to methods and member variables.

- `private`: only the members of the class can see
- `public`: anyone can see
- `protected`: only class and subclasses can see
- Default: package-private, only members of the same package can see

## Inheritance

- To avoid the diamond/multiple inheritance problem, Java only allows for single inheritance
- This is done using the `extends` keyword in the class definition
- Inherits all public and protected methods and members
- Can, however, implement multiple interfaces

Example:

```java
public class Car extends Vehicle implements Drivable, Crashable{
    // insert class body here

```

The `Car` class extends the `Vehicle` base class (can be abstract or concrete) and implements the behaviours defined by the interfaces `Drivable` and `Crashable`.

## `static`

The static keyword defines a method, a field, or a block of code that belongs to the class instead of the object.

- Static fields share a mutable state accross all instances of the class
- Static methods are called from the class instead of from the object
- Static blocks are executed once, the first time the class is loaded into memory

## Polymorphism

Polymorphism: of many forms.

### Dynamic Polymorphism

A broad term describing a few things in java. An object is defined as polymorphic if it passes more than one `instanceof` checks.

### Static Polymorphism (Method Overloading)

Note: different to over*riding*

- Multiple methods with the same name can be written, as long as they have different parameter lists
- The method that is called depends upon the number of and type of the arguments passed

Example:

```java
public class Addition{
    private int add(int x, int y){return x+y;}
    private float add(float x, float y){return x+y;}
    public static void main(String[] args){
        add(1,2); //calls first method
        add(3.14,2.72); //calls second method
        add(15,1.5); //calls second method
    }
}
```

## Abstraction

## Composition

## Reference Variables

## Abstract Classes and Interfaces
