# Maps

- Maps are a searchable collection of key-value entries
- Lookup the value using the key
- Keys are unique

## The Map ADT

```java
public interface Map<K,V>{
    int size();
    boolean isEmpty();
    V get(K key); //return the value associated with key in the map, or null if it doesn't exist
    void put(K key, V value); //associate the value with the key in the map
    void remove(K key); //remove the key and it's value from the map
    Collection<E> entrySet(); //return an iterable collection of the values in the map
    Collection<E> keySet(); //return an iterable collection of the keys in the map
    Iterator<E> values(); //return an iterator over the map's values
}
```

## List-Based Map

A basic map can be implemented using an unsorted list.

- `get(k)`
  - Does a simple linear search of the list looking for the key,value pair
  - Returns null if search reaches end of list and is unsuccessful
- `put(k,v)`
  - Does linear search of the list to see if key already exists
    - If so, replace value
  - If not, just add new entry to end
- `remove(k)`
  - Does a linear search of the list to find the entry and removes it
- All operations take $O(n)$ time so this is not very efficient
