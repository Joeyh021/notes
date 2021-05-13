# Priority Queues

A priority queue is an implementation of a queue where each item stored has a **priority**. The items with the highest priority are moved to the front of the queue to leave first. A priority queue takes a key along with a value, where the key is used as the priority of the item.

## Priority Queue ADT

```java
public interface PriorityQueue<K,V>{
    int size();
    boolean isEmpty();
    void insert(K key, V value); //inserts a value into the queue with key as its priority
    V removeMin(); //removes the entry with the lowest key (at the front of the queue)
    V min(); //returns but not removes the smallest key entry (peek)
}
```

### Entry Objects

- To store a key-value pair, a tuple/pair-like object is needed
- An `Entry<K,V>` object is used to store each queue item
  - `Key` is what is used to defined the priority of the item in the queue
  - `Value` is the queue item
- This pattern is similar to what is used in maps

```java
public class Entry<K,V>{
    private K key;
    private V value;

    public Entry(K key, V value){
        this.key = key;
        this.value = value;
    }

    public K getKey(){
        return key;
    }

    public V getValue(){
        return value;
    }

}
```

## Total Order Relations

- Keys may be arbitrary values, so they must have some order defined on them
  - Two entries may also have the same key
- A total order relation is a mathematical concept which formalises ordering on a set of objects where any 2 are comparable.
- A total ordering satisfies the following properties $\forall a,b,c \in X$
  - $a \leq b$ or $b \leq a$
    - Comparability property
  - If $a \leq b$ $b \leq c$, then $a \leq c$
    - Transitive property
  - If $a \leq b$ and $b \leq a$, then $a = b$
    - Antisymmetric property
  - $a \leq a$
    - Reflexive property

## Comparators

- A comparator encapsulates the action of comparing two objects with a total order declared on them
- A priority queue uses a comparator object given to it to compare two keys to decide their priority

```java
public class Comparator<E>{
    public int compare(E a, E b){
        if(a < b)
            return -1;
        if(a > b)
            return 1;
        return 0;
    }
}
```

## Implementations

### Unsorted List-Based Implementation

A simple implementation of a priority queue can use an unsorted list

- `insert()` just appends the `Entry(key,value)` to the list
  - $O(1)$ time
- `removeMin()` and `min()` linear search the list to find the smallest key (one with highest priority) to return
  - Linear search takes $O(n)$ time

### Sorted List-Based Implementation

To improve the speed of removing items, a sorted list can instead be used. These two implementations have a tradeoff between which operations are faster, so the best one for the application is usually chosen.

- `insert()` finds the correct place to insert the `Entry(key,value)` in the list to maintain the ordering
  - Has to find place to insert, takes $O(n)$ time
- As the list is maintained in order, the entry with the lowest key is always at the front, meaning `removeMin()` and `min()` just pop from the front
  - Takes $O(1)$ time

## Sorting Using a Priority Queue

The idea of using a priority queue for sorting is that all the elements are inserted into the queue, then removed one at a time such that they are in order

- Selection sort uses an unsorted queue
  - Inserting $n$ items in each $O(1)$ time takes $O(n)$ time
  - Removing the elements in order
    - $O(n) + O(n-1) + O(n-2) + ... + O(1)$
  - Overall $O(n^2)$ time
- Insertion sort uses a sorted queue
  - Runtimes are the opposite to unsorted
  - Adding $n$ elements takes $O(1) + O(2) + O(3) + ... + O(n)$ time
  - Removing $n$ elements in each $O(1)$ time takes $O(n)$ time
  - Overall runtime of $O(n^2)$ again
