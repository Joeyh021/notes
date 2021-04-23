# Stacks & Queues

## Abstract Data Types (ADTs)

- An ADT is an abstraction of a data structure
- Specifies the operations performed on the data
- Focus is on what the operation does, not how it does it
- Expressed in java with an interface

## Stacks

- A stack is a last in, first out data structure (LIFO)
- Items can be pushed to or popped from the top
- Example uses include:
  - Undo sequence in a text editor
  - Chain of method calls in the JVM (method stack)
  - As auxillary storage in multiple algorithms

### The Stack ADT

The main operations are `push()` and `pop()`, but others are included for usefulness

```java
public interface Stack<E>{
    int size();
    boolean isEmpty();
    E peek(); //returns the top element without popping it
    void push(E elem); //adds elem to the top of the stack
    E pop(); //removes the top stack item and returns it
}
```

### Example Implementation

The implementation below uses an array to implement the interface above. Only the important methods are included, the rest are omitted for brevity.

```java
public class ArrayStack<E> implements Stack<E>{
    private E[] elems;
    private int top = -1;

    public ArrayStack(int capacity){
        elems = (E[]) new Object[capacity];
    }

    public E pop(){
        if (isEmpty()) return null;
        E t = elems[top];
        top = top-1;
        return t;
    }
    public E push(){
        if (top == elems.length-1) throw new FullStackException; //cant push to full stack
        top++;
        return elems[top];
    }
}
```

- Advantages
  - Performant, uses an array so directly indexes each element
  - $O(n)$ space and each operation runs in $O(1)$ time
- Disadvantages
  - Limited by array max size
  - Trying to push to full stack throws an exception

## Queues

- Queues are a first in, first out (FIFO) data structure
- Insertions are to the rear and removals are from the front
  - In contrast to stacks which are LIFO
- Example uses:
  - Waiting list
  - Control access to shared resources (printer queue)
  - Round Robin Scheduling
    - A CPU has limited resources for running processes simultaneously
    - Allows for sharing of resources
    - Programs wait in the queue to take turns to execute
    - When done, move to the back of the queue again

### The Queue ADT

```java
public interface Queue<E>{
    int size();
    boolean isEmpty();
    E peek();
    void enqueue(E elem); //add to rear of queue
    E dequeue(); // pop from front of queue
}
```
