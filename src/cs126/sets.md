# Sets

A set is an unordered collection of unique elements, typically with support for efficient membership tests

- Like keys of a map, but with no associated value

## Set ADT

Sets also provide for traditional mathematical set operations: Union, Intersection, and Subtraction/Difference.

```java
public interface Set<E>{
    void add(E e); //add element e to set if not already present
    void remove(E e); //remove element e from set if present
    boolean contains(E e); //test if element e is in set
    Iterator<E> iterator(); //returns an iterator over the elements
    //updates the set to include all elements of set T
    // union
    void addAll(Set<E> T);
    //updates the set to include only the elements of the set that are also in T
    //intersection
    void retainAll(Set<E> T);
    //updates the set to remove any elements that are also in T
    //difference
    void removeAll(Set<E> T);
}
```

## Generic Merging

Generic merge is a generalised merge of two sorted lists `A` and `B` to implement set operations. Uses a template method `merge` and 3 auxillary methods that describe what happens in each case:

- `aIsLess`
  - Called when the element of `A` is less than the element of `B`
- `bIsLess`
  - Called when the element of `B` is less than the element of `A`
- `bothEqual`
  - Called when the element of `A` is equal to the element of `B`

```java
public static Set<E> merge(Set<E> A, Set<E> B){
    Set<E> S = new Set<>();
    while (!A.isEmpty() && !B.isEmpty()){
        a = A.firstElement();
        b = B.firstElement();
        if(a < b){
            aIsLess(a,S);
            A.remove(a);
        }
        else if (b < a){
            bIsLess(b,S);
            B.remove(b);
        }
        else{ //b == a
            bothEqual(a,b,S);
            A.remove(a);
            B.remove(b);
        }
        while(!A.isEmpty()){
            aIsLess(a,S);
            A.remove(a);
        }
        while(!B.isEmpty()){
            bIsLess(b,S);
            B.remove(b);
        }
    }
    return S;
}
```

- Any set operation can be implemented using generic merge
- Union
  - `aIsLess` adds a into S
  - `bIsLess` adds b into S
  - `bothEqual` adds a (or b) into S
- Intersection
  - `aIsLess` and `bIsLess` do nothing
  - `bothEqual` adds a (or b) into S
- Difference
  - `aIsLess` adds a into S
  - `bIsLess` and `bothEqual` do nothing
- Runs in linear time, $O(N_A + N_B)$, provided the auxillary methods are $O(1)$
