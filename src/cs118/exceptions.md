# Exceptions

## Exceptions

Exceptions are events that occur within the normal flow of program execution that disrupt the normal flow of control.

### Throwing Exceptions

Exceptions can occur when raised by other code we call, but an exception can also be raised manually using a `throw` statement. Any object that inherits, either directly or indirectly, from the `Throwable` class, can be raised as an exception.

```java
//pop from a stack
public E pop(){
    if(this.size == 0)
        throw new EmptyStackException();
    //pop the item
}
```

### Exception Handling

- Exceptions can be caught using a `try`-`catch` block
- If any code within the `try` block raises an exception, the `catch` block will be executed
  - `catch` blocks must specify the type of exception to catch
  - Can have multiple catch blocks for different exceptions
    - Only 1 catch block will be executed
- A `finally` block can be included to add any code to execute after the try-catch, regardless of if an exception is raised or not.
- The exception object can be queried through the variable `e`

```java
try{
    //try to do something
} catch (ExceptionA e){
    //if an exception of type ExceptionA is thrown, this is executed
} catch (ExceptionB e){
    //if an exception of type ExceptionB is thrown, this is executed
} finally{
    //this is always executed
}
```

### Exception Heirachy

- The `Throwable` class is the parent class of all errors and exceptions in Java
- There are two subclasses of `Throwable`
  - `Error`, which defines hard errors within the JVM that aren't really recoverable
  - `Exception`, which defines errors that may occur within the code
    - There are two kinds of exception, checked and unchecked

![](./img/exceptions.png)

### Checked and Unchecked Exceptions

- Checked exceptions must be either caught or re-thrown
  - `IOException` is a good example
- When a method that may throw a checked exception is required, there are two options
  - Wrap the possibly exception-raising code in a `try`-`catch`
  - Use the `throws` keyword in the method definition to indicate that the method may throw a checked exception

```java
public static void ReadFile() throws FileNotFoundException{
    File f = new File("non-existant-file.txt")
    FileInputStream stream = new FileInputStream(f);
}
// OR
public static void ReadFile(){
    File f = new File("non-existant-file.txt")
    try{
        FileInputStream stream = new FileInputStream(f);
    } catch (FileNotFoundException){
        e.printStackTrace();
        return;
    }
}
```

- Unchecked Exceptions all subclass `RunTimeException`
  - ie `NullPointerException` and `ArrayIndexOutOfBoundsException`
- Can be thrown at any point and will cause program to exit if not caught

### Custom Exceptions

- Custom exception classes can be created
- Should subclass `Throwable`
  - Ideally the most specific subclass possible
  - Subclassing `Exception` gives a new checked exception
  - Subclassing `RunTimeException` gives a new unchecked exception
- All methods such as `printStackTrace` and `getMessage` inherited from superclass
- Should provide at least one constructor that overrides a superclass constructor

```java
public class IncorrectFileExtensionException
  extends RuntimeException {
    public IncorrectFileExtensionException(String errorMessage, Throwable err) {
        super(errorMessage, err);
    }
}
```

## Generics

Generics allow for classes to be parametrised over some type or types, to provide additional compile time static type checking. A simple box class parametrised over some type `E`, for example:

```java
public class Box<E>{
    E item;

    public Box(E item){
        this.item = item;
    }
    public E get(){
        return item;
    }
    public E set(E item){
        this.item = item;
    }
}
```

### Generic Methods

Methods can be generic too, introducing their own type parameters. The parameters introduced in methods are local to that method, not the whole class. As an example, the static method below compares two `Pair<K,V>` classes to see if they are equal.

```java
public static <K, V> boolean compare(Pair<K, V> p1, Pair<K, V> p2) {
        return p1.getKey().equals(p2.getKey()) &&
               p1.getValue().equals(p2.getValue());
    }
```

### Type erasure

Type information in generic classes and methods is erased at runtime, with the compiler replacing all instances of the type variable with `Object`. `Object` is also what appears in the compiled bytecode. This means that at runtime, any type casting of generic types is unchecked, and can cause runtime exceptions.
