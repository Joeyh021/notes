# Hash Tables

- Recall the map ADT
- Intuitively, a map `M` supports the abstraction of using keys as indices such as `M[k]`
- A map with n keys that are known to be integers in a fixed range is just an array
- A hash function can map general keys (ie not integers) to corresponding indices in a table/array

## Hash Functions

A hash function $h$ maps keys of a given type to integers in a fixed interval $[0,N-1]$.

- A very simple hash function is the mod function: $h(x) = x \mod N$
  - Works for integer keys
  - The integer $h(x)$ is the hash value of the key $x$
- The goal of a hash function is to store an entry $(k,v)$ at index $i = h(k)$
- Function usually has two components:

  - Hash code $h_1$
    - keys -> integers
  - Compression function $h_2$
    - integers -> integers in range $[0,N-1]$
  - Hash code applied first, then compression - $h(x) = h_2(h_1(x))$
    Some example hash functions:

- Memory address
  - Use the memory address of the object as it's hash code
- Integer cast
  - Interpret the bits of the key as an integer
  - Only suitable with $\leq$ 64 bits
- Component sum
  - Partition they key into bitwise components of fixed length and sum the components
- Polynomial accumulation
  - Partition the bits of the key into a sequence of components of fixed length $a_0$, $a_1$, ... , $a_{n-1}$
  - Evaluate the polynomial $P(z) = a_0 + a_1 z + a_2 z^2 + ... + a_{n-1}z^{n-1}$ for some fixed value $z$
  - Especially suitable for strings
  - Polynomial can be evaluated in $O(n)$ time as $p_i(z) = a_{n-i-1} + z\,p_{i-1}(z)$

Some example compression functions:

- Division
  - $h_2(y) = y \mod N$
  - The size $N$ is usually chosen to be a prime to increase performance
- Multiply, Add, and Divide (MAD)
  - $h_2(y) = (ay + b) mod N$
  - $a$ and $b$ are nonnegative integers such that $a \mod N \neq 0$

## Collision Handling

Collisions occur when different keys hash to the same cell. There are several strategies for resolving collisions.

### Separate Chaining

With separate chaining, each cell in the map points to another map containing all the entries for that cell.

### Linear Probing

- Open addressing
  - The colliding item is placed in a different cell of the table
- Linear probing handles collisions by placing the colliding item at the next available table cell
- Each table cell inspected is referred to as a "probe"
- Colliding items can lump together, causing future collisions to cause a longer sequence of probes

Consider a hash table $A$ that uses linear probing.

- `get(k)`
  - Start at cell $h(k)$
  - Prove consecutive locations until either
    - Key is found
    - Empty cell is found
    - All cells have been unsuccessfully probed
- To handle insertions and deletions, need to introduce a special marker object `defunct` which replaces deleted elements
- `remove(k)`
  - Search for an entry with key `k`
  - If an entry `(k, v)` is found, replace it with `defunct` and return `v`
  - Else, return `null`

### Double Hashing

- Double hashing uses two hash functions `h()` and `f()`
- If cell `h(k)` already occupied, tries sequentially the cell $(h(k) + i\cdot f(k)) \mod N$ for $i=1,2,3...$
- `f(k)` cannot return zero
- Table size $N$ must be a prime to allow probing of all cells
- Common choice of second hash func is $f(k) = q - k \mod q$ where q is a prime
- if $f(k) = 1$ then we have linear probing

## Performance

- In the worst case, operations on hash tables take $O(n)$ time when the table is full and all keys collide into a single cell
- The load factor $\alpha = n /N$ affects the performance of a hash table
  - $n$ = number of entries
  - $N$ = number of cells
- When $\alpha$ is large, collision is likely
- Assuming hash values are true random numbers, the "expected number" of probes for an insertion with open addressing is $\frac{1}{1-\alpha}$
- However, in practice, hashing is very fast and operations have $O(1)$ performance, provided $\alpha$ is not close to 1
