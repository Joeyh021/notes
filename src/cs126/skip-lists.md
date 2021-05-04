# Skip Lists

- When implementing sets, the idea is to be able to test for membership and update elements efficiently
- A sorted array or list is easy to search, but difficult to maintain in order
- Skip lists consists of multiple lists/sets
  - The skip list $S = \left\{S_0, S_1, S_2,...,S_h \right\}$
  - $S_0$ contains all the elements, plus $\pm \infty$
  - $S_i$ is a random subset of $S_{i-1}$, for $i = 1,2,...,h-1$
    - Each element of $S_{i-1}$ appears in $S_i$ with probability 0.5
  - $S_h$ contains only $\pm \infty$

![](./img/skip-list.png)

## Search

To search for an element $x$ in the list:
- Start in the first position of the top list
- At the current position $p$, compare $x$ with the next element in the current list $y$
  - If $x=y$, return $y$
  - If $x>y$, move to the next element in the list
    - "Scan forward"
  - If $x<y$, drop down to the element below
    - "Drop down"
- If the end of the list ($+\infty$) is reached, the element does not exist

![](./img/skip-search.png)

## Insertion
To insert an element $k$ into the list:

- Repeatedly toss a fair coin until tails comes up
  - $i$ is the number of times the coin came up heads
- If $i \geq h$, add to the skip list new lists $S_{h+1},...,S_{i+1}$
  - Each containing only the two end keys $\pm \infty$
- Search for $k$ and find the positions $p_0, p_1, ... ,P_i$ of the items with the largest element $> k$ in each list $S_0, S_1, ..., S_i$
  - Same as the search algorithm
- For $j = 0..i$, insert k into list $S_j$ after position $p_j$

![](./img/skip-insert.png)

## Deletion
To remove an entry $x$ from a skip list:
- Search for $x$ in the skip list and find the positions of the items $p_0, p_1, ..., p_i$ containing $x$
- Remove those positions from the lists $S_0,S_1,...,S_i$
- Remove a list if neccessary

![](./img/skip-remove.png)


## Implementation

A skip list can be implemented using quad-nodes, where each node stores

- It's item/element 
- A pointer to the node above
- A pointer to the node below
- A pointer to the next node
- A pointer to the previous node


## Performance

- The space used by a skip list depends on the random number on each invocation of the insertion algorithm
  - On average, the expected space usage of a skip list with $n$ items is $O(n)$
- The run time of the insertion is affected by the height $h$ of the skip list
  - A skip list with $n$ items has average height $O(\log n)$
- The search time in a skip list is proportional to the number of steps taken
- The drop-down steps are bounded by the height of the list
- The scan-forward steps are bounded by the length of the list
  - Both are $O(\log n)$
- Insertion and deletion are also both $O(\log n)$