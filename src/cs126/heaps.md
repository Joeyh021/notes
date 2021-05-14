# Heaps

- A heap is a tree-based data structure where the tree is a _complete binary tree_
- Two kinds of heaps, min-heaps and max-heaps
- For a min-heap, the _heap order_ specifies that for every internal node $v$ other than the root, $v \geq parent(v)$
  - In other words, the root of the tree/subtree must be the smallest node
  - This property is inverted for max heaps
- Complete binary tree means that every level of the tree, except possibly the last, is filled, and all nodes are as far left as possible.
  - More formally, for a heap of height $h$, for $i = 0,1,...,h-1$ there are $2^i$ nodes of depth $i$
  - At depth $h-1$, the internal nodes are to the left of the external nodes
  - The last node of a heap is the rightmost node of maximum depth
- Unlike binary search trees, heaps can contain duplicates
- Heaps are also unordered data structures
- Heaps can be used to implement priority queues
  - An `Entry(Key,Value)` is stored at each node

![](./img/heaps.png)

## Insertion

## Removal

## Heap Sort

## Array-based Implementation
