# Analysis of Algorithms

_This topic is key to literally every other one, and also seems to make up 90% of the exam questions (despite there being only 1 lecture on it) so it's very important._

- Need some way to characterise how good a data structure or algorithm is
- Most algorithms take input and generate output
- The run time of an algorithm typically grows with input size
- Average case is often difficult to determine
  - Focus on the worst case
- Runtime analysis and benchmarks can be used to determine the performance of an algorithm, but this is often not possible
  - Results will also vary from machine to machine
- Theoretical analysis is preferred as it gives a more high-level analysis
  - Characterises runtime as a function of input size $n$

## Pseudocode

- Pseudocode is a high level description of an algorithm
- Primitive perations are assumed to take unit time
- For example
  - Evaluating an expression
  - Assigning to a variable
  - Indexing into an array
  - Calling a method

Looking at an algorithm, can count the number of operations in each step to analyse its runtime

```java
public static double arrayMax(double[] data){
    int n = data.length; //2 ops
    double max = data[0]; //2 ops
    for (int j=1; j < n;j++) //2n ops
        if(data[j] > max) //2n-2 ops
            max = data[j]; //0 to 2n-2 ops
    return max; //1 op
}
```

- In the best case, there are $4n+3$ primitive operations
- In the worst case, $6n+1$
- The runtime $T(n)$ is therefore $a(4n+3) \leq T(n) \leq a(6n+1)$
  - $a$ is the time to execute a primitive operation

## Functions

There are 7 important functions $f(n) $that appear often when analysing algorithms

- **Constant** - $1$
  - $f(n) = c$
  - A fixed constant
  - Could be any number but 1 is the most fundamental constant
  - Sometimes denoted $f(n) = c \times g(n)$ where $g(n) = 1$
- **Logarithmic** - $\log n$
  - For some constant $b > 1$, $f(n) = \log_b (n)$
  - Logarithm is the inverse of the power function
    - $x = \log_b n \Leftrightarrow b^x = n$
  - Usually, $b=2$ because we are computer scientists and everything is base 2
- **Linear** - $n$
  - $f(n) = cn$
    - $c$ is a fixed constant
- **n-log-n** - $n \log n$
  - $f(n) = n \times \log n$
  - Commonly appears with sorting algorithms
- **Quadratic** - $n^2$
  - $f(n) = n^2$
  - Commonly appears where there are nested loops
- **Cubic** - $n^3$
  - $f(n) = n^3$
  - Less common, also appears where there are 3 nested loops
  - Can be generalised to other polynomial functions
- **Exponential** - $2^n$
  - $f(n) = b^n$
    - $b$ is some arbitrary base, $n$ is the exponent

The growth rate of these functions is not affected by changing the hardware/software environment. Growth rate is also not affected by lower-order terms.

- Insertion sort takes time $\frac 1 2 n^2$
  - Characterised as taking $n^2$ time
- Merge sort takes $2n \log n$
  - Characterised as $n \log n$
- The `arrayMax` example from earlier took $a(4n+3) \leq T(n) \leq a(6n+1)$ time
  - Characterised as $n$
- A polynomial $f(n)$ of degree $d$, is of order $n^d$

## Big-O Notation

- Big-O notation is used to formalise the growth rate of functions, and hence describe the runtime of algorithms.
- Gives an upper bound on the growth rate of a function as $n \to \infty$
- The statement "$f(n)$ is $O(g(n))$" means that the growth rate of $f(n)$ is no more than the growth rate of $g(n)$
- If $f(n)$ is a polynomial of degree $d$, then $f(n)$ is $O(n^d)$
  - Drop lower order terms
  - Drop constant factors
- Always use the smallest possible class of functions
  - $2n$ is $O(n)$, not $O(n^2)$
- Always use the simplest expression
  - $3n+5$ is $O(n)$, not $O(3n)$

Formally, given functions $f(n)$ and $g(n)$, we say that $f(n)$ is $O(g(n))$ if there is a positive constant $c$ and a positive integer constant $n_0$, such that

$$f(n) \leq c g(n)\: \text{for}\: n \geq n_0$$

where $c > 0$, and $n_0 \geq 1$

### Examples

$2n + 10$ is $O(n)$:

$$f(n) = 2n+10,\quad g(n) = n$$
$$2n+10 \leq cn$$
$$(c-2)n \geq 10$$
$$n \geq \frac{10}{c-2}$$
$$c=3,\quad n_0 = 10$$

The function $n^2$ is not $O(n)$
$$f(n) = n^2,\quad g(n) = n$$
$$n^2 \leq cn$$
$$n \leq c$$
The inequality does not hold, since $c$ must be constant.

Big-O of $7n-2$:
$$f(n) = 7n-10,\quad g(n) = n$$
$$7n-2 \leq cn$$
$$(c-7)n \geq 2$$
$$n \geq \frac{2}{c-7}$$
$$c = 7, \quad c_0 = 1$$

Big-O of $3n^3 + 20n^2 + 5$:
$$f(n) = 3n^3 + 20n^2 + 5 ,\quad g(n) = n^3$$
$$3n^3 + 20n^2 + 5 \leq cn^3 \; \text{for}\; n \geq n_0$$
$$c=4, \quad n_0 = 21$$

$3\log n + 5$ is $O(\log n)$
$$f(n) = 3 \log n +5 ,\quad g(n) = \log n$$
$$3 \log n + 5 \leq c\log n \; \text{for}\; n \geq n_0$$
$$\log n \geq \frac{5}{c-3}$$
$$c=8, n_0 = 2$$

## Asymptotic Analysis

- The asymptotic analysis of an algorithm determines the running time big-O notation
- To perform asymptotic analysis:
  - Find the worst-case number of primitive operations in the function
  - Express the function with big-O notation
- Since constant factors and lower-order terms are dropped, can disregard them when counting primitive operations

### Example

The $i$th prefix average of an array $X$ is the average of the first $i+1$ elements of $X$. Two algorithms shown below are used to calculate the prefix average of an array.

#### Quadratic time

```java
//returns an array where a[i] is the average of x[0]...x[i]
public static double[] prefixAverage(double[] x){
    int n = x.length;
    double[] a = new double[n];
    for(int j = 0; j < n; j++){
        double total = 0;
        for(int i = 0; i <= j; i++)
            total += x[i];
        a[j] = total / (j+1);
    }
    return a;
}
```

The runtime of this function is $O(1 + 2 + ... + n) + O(n)$. The sum of the first $n$ integers is $\frac{n^2 + n}{2}$, so this algorithm runs in quadratic $O(n^2)$ time. This can easily be seen by the nested loops in the function too.

#### Linear time

```java
//returns an array where a[i] is the average of x[0]...x[i]
public static double[] prefixAverage(double[] x){
    int n = x.length;
    double[] a = new double[n];
    double total = 0;
    for(int i = 0; i <= n; i++){
        total += x[i];
        a[i] = total / (i+1);
    }
    return a;
}
```

This algorithm uses a running average to compute the same array in linear time, by calculating a running sum.

## Big-Omega and Big-Theta

Big-Omega is used to describe the best case runtime for an algorithm. Formally, $f(n)$ is $\Omega(g(n))$ if there is a constant $c>0$ and an integer constant $n_0 > 1$ such that
$$f(n) \geq c \cdot g(n) \;\text{for}\; n \geq n_0$$

Big-Theta describes the average case of the runtime. $f(n)$ is $\Theta(g(n))$ if there are constants $c' >0$ and $c'' > 0$, and an integer constant $n_0 > 1$ such that
$$c'g(n) \leq f(n) \leq c''g(n) \;\text{for}\; n \geq n_0$$

The three notations compare as follows:

- Big-O
  - $f(n)$ is $O(g(n))$ if $f(n)$ is asymptotically _less than or equal to_ $g(n)$
- Big-$\Omega$
  - $f(n)$ is $\Omega(g(n))$ if $f(n)$ is asymptotically _greater than or equal to_ $g(n)$
- Big-$\Theta$
  - $f(n)$ is $O(g(n))$ if $f(n)$ is asymptotically _equal to_ $g(n)$
