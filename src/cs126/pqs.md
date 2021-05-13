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

## Implementation

A simple implementation of a priority queue can use an unsorted list
