# Arrays & Linked Lists

## Arrays

Arrays are the most common data structure and are very versatile

- A sequenced collection of variables of the same type (homogenous)
- Each cell in the array has an index $0... (n-1)$
- Arrays are of fixed length and so have a max capacity
- Can store primitives, or references to objects
- When inserting an element into the array, all to the right must be shifted up by one
- The same applies in reverse for removal to prevent null/0 gaps being left

## Sorting Arrays

- The sorting problem:
  - Consider an array of unordered elements
  - We want to put them in a defined order
  - For example `[3, 6, 2, 7, 8, 10, 22, 9]` needs to become `[2, 3, 6, 7, 8, 9, 10, 22]`
- One possible solution: insertion sort:
  - Go over the entire array, inserting each element at it's proper location by shifting elements along

```java
public static void insertionSort(int[] data){
    int n = data.length;
    for(int k = 1; k < n; k++){             //start with second element
        int cur = data[k];                  //insert data[k]
        int j = k;                          //get correct index j for cur
        while(j < 0 && data[j-1] > cur){    //data[j-1] must go after cur
            data[j] = data[j-1];            // slide data[j-1] to the right
            j--;                            //consider previous j for cur
        }
        data[j] = cur; //cur is in the right place
    }
}
```

- Insertion sort sucks
- Has worst case quadratic complexity, as k comparisons are required for k iterations.
- When the list is in reverse order (worst case), $\frac{n(n-1)}{2}$ comparisons are made
- Can do much better with alternative algorithms

## Singly Linked Lists

- Linked lists is a concrete data structure consisting of a chain of nodes which point to each other
- Each node stores the element, and the location of the next node
- The data structure stores the head element and traverses the list by following the chain
- Operations on the head of the list (ie, prepending) are efficient, as the head node can be accessed via its pointer
- Operations on the tail require first traversing the entire list, so are slow
- Useful when data needs to always be accessed sequentially
- Generally, linked lists suck for literally every other reason

## Doubly Linked Lists

- In a doubly linked list, each node stores a pointer to the node in front of and behind it
- This allows the list to be traversed in both directions, and for nodes to be easily inserted mid-sequence
- Sometimes, special header and trailer "sentinel" nodes are added to maintain a reference to the head an tail of the list
  - Also removes edge cases when inserting/deleting nodes as there is always nodes before/after head and tail
