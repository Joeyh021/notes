# Lists

The list ADT provides general support for adding and removing elements at arbitrary positions

## The List ADT

```java
public interface List<E>{
    int size();
    boolean isEmpty();
    E get(int i); //get the item from the index i
    E set(int i, E e); //set the index i to the element e, returning what used to be at that index
    E add(int i, E e); //insert an element in the list at index i
    void remove(int i); //remove the element from index i
}
```

## Array Based Implementation (`ArrayList`)

Array lists are growable implementations of the List ADT that use arrays as the backing data structure. The idea is that as more elements are added, the array resizes itself to be bigger, as needed. Using an array makes implementing `get()` and `set()` easy, as they can both just be thin wrappers around `array[]` syntax.

- When inserting, room must be made for new elements by shifting other elements forward
  - Worst case (inserting to the head) $O(n)$ runtime
- When removing, need to shift elements backward to fill the hole
  - Same worst case as insertion, $O(n)$

When the array is full, we need to replace it with a larger one and copy over all the elements. When growing the array list, there are two possible strategies:

- Incremental
  - Increase the size by a constant $c$
- Doubling
  - Double the size each time

These two can be compared by analysing the _amortised_ runtime of the push operation, ie the average time required $T(n) / n$ for a $n$ pushes taking a total time $T(n)$.

With incremental growth, over $n$ push operations, the array is replaced $k= n/c$ times, where $c$ is the constant amount the array size is increased by. The total time $T(n)$ of $n$ push operations is proportional to:
$$c + 2c + 3c + ... + kc = c (1 + 2 + .. + k) = \frac{ck(k+1)}{2}$$

Since $c$ is a constant, $T(n)$ is $\Omega(k^2)$, meaning the amortised time of a push operation is $\Omega(n)$.

With doubling growth, the array is replaced $k = \log_2 n$ times. The total time $T(n)$ of $n$ pushes is proportional to:

$$1 + 2 + 4 + 8 + ... + 2^k = 2^{k+1} -1 = 2n-1$$

Thus, $T(n)$ is $O(n)$, meaning the _amortised_ time $T(n)/n$ is $O(1)$

## Positional Lists

- Positional lists are a general abstraction of a sequence of elements without indices
- A position acts as a token or marker within the broader positional list
- A position `p` is unaffected by changes elsewhere in a list
  - It only becomes invalid if explicitly deleted
- A position instance is an object (ie there is some `Position` class)
  - ie `p.getElement()` returns the element stored at position `p`
- A very natural way to implement a positional list is with a doubly linked list, where each node represents a position.
  - Where a pointer to a node exists, access to the previous and next node is fast ($O(1)$)

### ADT

```java

public interface PositionalList<E>{
    int size();
    boolean isEmpty();
    Position<E> first(); //return postition of first element
    Position<E> last();  //return position of last element
    Position<E> before(Position<E> p); //return position of element before position p
    Position<E> after(Posittion<E> p); //return position of element after position p
    void addFirst(E e); //add a new element to the front of the list
    void addLast(E e); // add a new element to the back of the list
    void addBefore(Position<E> p, E e); // add a new element just before position p
    void addAfter(Position<E> p, E e); // add a new element just after position p
    void set(Position<E> p, E e); // replaces the element at position p with element e
    E remove(p); //removes and returns the element at position p, invalidating the position
}
```

## Iterators

Iterators are a software design pattern that abstract the process of scanning through a sequence one element at a time. A collection is `Iterable` if it has an `iterator()` method, which returns an instance of a class which implements the `Iterator` interface. Each call to `iterator()` returns a new object. The iterable interface is shown below.

```java
public interface Iterator<E>{
    boolean hasNext(); //returns true if there is at least one additional element in the sequence
    E next(); //returns the next element in the sequence, advances the iterator by 1 position.
}
// example usage
public static void iteratorOver(Iterable<E> collection){
    Iterator<E> iter = collection.iterator();
    while(iter.hasNext()){
      E var = iter.next();
      System.out.println(var);
    }
}
```
