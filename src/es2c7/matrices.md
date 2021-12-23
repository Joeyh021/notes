# Matrices & Quadratic Forms

## Linear Algebra

Linear algebra is the formalisation/generalisation of linear equations involving vectors and matrices. A linear algebraic equation looks like

$$
Ax = b

$$

where $A$ is a matrix, and $x$, $b$ are vectors. In an equation like this, we're interested in the existence of and the number of solutions. Linear ODEs are also of interest, looking like

$$
\dot{x}(t) = Ax(t)

$$

where $A$ is a matrix, $t$ is a vector, and $x$ is a function over a vector.

- I'm really not about to go into what a matrix or it's transpose is
- $A'$ denotes the transpose of $A$
- $b$ is a column vector, indexed $b_i$
- $b'$ is a row vector
- You can index matrices using the notation $A_{ij}$, which is the element in row $i$ and column $j$, indexed from 1

Matrices can be partitioned into sub-matrices:

$$
M=
\left[
\begin{array}{c:c}
A & B \\
\hdashline
C & D
\end{array}
\right]

$$

Column and row partitions give row/column vectors.

$$
A =
\left[
\begin{array}{}
1 & 2 & 3 & 4 \\
\hdashline
5 & 6 & 7 & 8 \\
\hdashline
9 & 10 & 11 & 12 \\
\end{array}
\right]

$$

$$
w^{(1)'} = \left[\begin{array}{}1 & 2 & 3 & 4 \end{array} \right] \\

$$

$$
w^{(2)'} = \left[\begin{array}{}5 & 6 & 7 & 8 \end{array} \right] \\

$$

$$
w^{(3)'} = \left[\begin{array}{}9 & 10 & 11 & 12 \end{array} \right] \\

$$

- A square matrix of order $n$ has dimensions $n$x$n$
- The leading diagonal is entries $A_{11}, A_{22}, A_{33},... ,A_{nn}$
  - The trace of a square matrix is the sum of the leading diagonal
- A diagonal matrix has only entries on the leading diagonal
- The identity matrix is a diagonal matrix of ones

### The Inner Product

The inner product of two vectors $w'$, a row vector, and $v$, a column vector:

$$
w'v = w_1 v_1 + w_2 v_2 + ... + w_n v_n

$$

- (1x$n$) matrix times ($n$x1) to yield a scalar
- If the inner product is zero, then $w$ and $v$ are orthogonal
- In euclidian space, the inner product is the dot product
- The norm/magnitude/length of a vector is $||w|| = \sqrt{w'w} = \left( w_1^2 + w_2^2 + ... + w^2_n \right)$
  - If norm is one, vector is unit vector

## Linear Independence

Consider a set of vectors all of equal dimensions, $v^{(1)}, v^{(2)}, ..., v^{(r)}$. The vector $v^{(r)}$ is **linearly dependent** on the vectors $v^{(1)}, v^{(2)}, ..., v^{(r-1)}$ if there exists $(r-1)$ non-zero scalars $\alpha_1, \alpha_2, ..., \alpha_{r-1}$ such that:

$$
v^{(r)} = \alpha_1 v^{(1)} + \alpha_2 v^{(2)} + ... + \alpha_{r-1} v^{(r-1)}

$$

If no such scalars exist, the set of vectors are linearly independent.

Finding the linearly independent rows in a matrix:

$$
A =
\left[
\begin{array}{}
0 & 1 & 2 & 3 \\
\hdashline
4 & 5 & 6 & 7  \\
\hdashline
4&7 & 10 & 13 \\
\end{array}
\right]
=
\left[
\begin{array}{}
w^{(1)'} \\

w^{(2)'} \\

w^{(3)'} \\
\end{array}
\right]

\\
w^{(1)'} = \left[\begin{array}{}0 & 1 & 2 & 3 \end{array} \right] \\
w^{(2)'} = \left[\begin{array}{}4 & 5 & 6 & 7 \end{array} \right] \\
w^{(3)'} = \left[\begin{array}{}4 & 7& 10 & 13 \end{array} \right] \\

$$

- $w^{(2)'}$ is independent of $w^{(1)'}$ since $w^{(2)'} != kw^{(1)'}$ for any $k$
- $w^{(3)'} = 2w^{(2)'} + w^{(1)'}$
  - Row 3 is linearly dependent on rows 1 and 2
- There are 2 linearly independent rows
- It can also be found that there are two linearly independent columns

**Any matrix has the same number of linearly independent rows and linearly independent columns**

A more formalised approach is to put the matrix into row echelon form, and then count the number of non-zero rows. $A$ in row echelon form may be obtained by [gaussian elimination](../es193/equations.html#gaussian-elimination):

$$
\left[
\begin{array}{}
1&0&-1&2 \\
0 & 1 & 2 & 3\\
0&0&0&0\\
\end{array}
\right]

$$

## Minors, Cofactors, and Determinants

For an $n$x$n$ matrix $A$, the determinant is defined as

$$
\det(A) = \sum^n_{j=1} a_{ij}\gamma_{ij} \quad \text{for any}\; i = 1,2,...,n

$$

- $i$ denotes a chosen row along which to compute the sum
- $\gamma_{ij}$ is the **cofactor** of element $a_{ij}$
  - $\gamma_{ij} = (-1)^{i+j} \mu_{ij}$
- $\mu_{ij}$ is the **minor** of element $a_{ij}$
- The minor is obtained by calculating the determinant from the matrix obtained by deleting row $i$ and column $j$
- The cofactor is the minor with the appropriate sign from the matrix of signs

### Determinant Properties

- $\det(A) = \det(A')$
- If a constant scalar $\alpha$ times any row/column is added to any other row/column, the $\det(A)$ is unchanged
- If $A$ and $B$ are of the same order, then $\det(AB) = \det(A)\det(B)$
- $\det(A) = 0$ if the **rank of $A$ is less than its order**, for a square matrix.

### Rank

**The rank of a matrix is the number of linearly independent columns/rows**

Any non-zero $n$x$m$ matrix $A$ has rank $r$ if at least one of it's $r$-square minors is non-zero, while every $(r+1)$-square minor is zero.

- $r$-square denotes the order of the determinant used to calculate the minor

For example:

$$
\det(A) =
\left|
\begin{array}{}
1&2&3 \\
2&3&4\\
3&5&7\\
\end{array}
\right| = 0

$$

- The determinant is 0
- The rank is less than 3
- The minor $a_{33} = -1 \neq 0$.
- The order of this minor is 2
- Thus, the rank of $A$ is 2

There are two other ways to find the rank of a matrix, via gaussian elimination into row-echelon form, or by the definition of linear independence.

## Inverses of Matrices

The inverse of a square matrix is defined:

$$
A^{-1} = \frac{1}{\det(A)} \operatorname{adj}(A)

$$

- $AA^{-1} = A^{-1}A = I_n$
- $A^{-1}$ is unique

$\operatorname{adj}(A)$ is the **adjoint** of $A$, the transpose of the matrix of cofactors:

$$
\operatorname{adj}(A) =
\begin{bmatrix}
\gamma_{11} & \gamma_{12} & \dots & \gamma_{1n} \\
\gamma_{21} & \gamma_{22} & \dots & \gamma_{1n} \\
\vdots & \vdots & \ddots & \vdots \\
\gamma_{n1} & \gamma_{n2} & \dots & \gamma_{nn} \\

\end{bmatrix}^{\prime}

$$

**If $\det(A)=0$, $A$ is singular and has no inverse.**

### Pseudo-inverse of a Non-Square Matrix

Given a more general $n$x$m$ matrix $A$, we want some inverse such that $AB = I_m$, or $BA = I_n$.

If $m < n$ (more columns than rows, matrix is fat), and $\det(AA') \neq 0$, then the **right pseudo-inverse** is defined as:

$$
A^+_R = A'(AA')^{-1}

$$

If $n < m$ (more rows than columns, matrix is tall), and $\det(A'A) \neq 0$, then the **left pseudo-inverse** is defined as:

$$
A^+_L = (A'A')^{-1}A'

$$

For example, the right pseudo inverse of $A=\begin{bmatrix}1 & 2&3\\ 4&5&6\end{bmatrix}$:

$$
A' = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix} \quad
AA'= \begin{bmatrix} 14 & 32 \\ 32 & 77 \end{bmatrix}
\quad \det(AA') = 54

$$

$$
(AA')^{-1} = \frac{1}{54}\begin{bmatrix} 77 & -32 \\ -32 & 14 \end{bmatrix}

$$

$$
A^+_R = A'(AA')^{-1} = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix} \frac{1}{54}\begin{bmatrix} 77 & -32 \\ -32 & 14 \end{bmatrix} = \frac{1}{54} \begin{bmatrix}-51 & 24 \\-6 & 6 \\ 39 & -12 \end{bmatrix}

$$

## Symmetric Matrices

A matrix $A$ is symmetric if $A=A'$

$$
A=
\left[
\begin{array}{}
1 & 2 \\ 2 & 2
\end{array}
\right] = A'

$$

A matrix is skew-symmetric if $A=-A'$

$$
A=
\left[
\begin{array}{}
0 & -2 \\ 2 & 0
\end{array}
\right] = -A'

$$

For **any square matrix** $A$:

- $AA'$ is a symmetric matrix
- $A+A'$ is a symmetric matrix
- $A-A'$ is a skew-symmetric matrix

Every square matrix $A$ can be written as the sum of a symmetric matrix $B$ and skew-symmetric matrix $C$:

$$
A = B+C  \qquad B = \frac{1}{2}(A+A') \qquad C=\frac{1}{2}(A-A')

$$

## Quadratic forms

Consider a polynomial with $n$ variables $x_i$ and $n^2$ constants $a_{ij}$ of the form:

$$
Q(x_1,x_2,...,x_n) = \sum^n_{i=1}\sum^n_{j=1} \,a_{ij}\, x_i \,x_j

$$

When expanded:

$$
Q = a_{11}x_1^2 + a_{22}x_2^2 + ... + a_{nn}x^2_n + ... + (a_{12}+a_{21})x_1x_2 + ... + (a_{n-1,n}+a_{n,n-1})x_{n-1}x_n

$$

This is known as a quadratic form, and can be written:

$$
Q(x) = x'Ax

$$

where $x$ is an $n\times1$ column vector, and $A$ is an $n\times{}n$ symmetric matrix. In two variables:

$$
Q(x*1,x_2) = d*{11}x*1^2 + d*{22}x*2^2 + d*{12}x*1x_2 =
\begin{bmatrix}
x_1 & x_2
\end{bmatrix}
\begin{bmatrix}
d*{11} & d*{12} / 2 \\
d*{12} /2 & d\_{22}
\end{bmatrix}
\begin{bmatrix}
x_1 & x_2
\end{bmatrix}

$$

$$
Q(x_1,x_2) = d_{11}x_1^2 + d_{22}x{_2}^2 + d_{12}x_1x_2 =
\begin{bmatrix}
x_1 & x_2
\end{bmatrix}
\begin{bmatrix}
d_{11} & d_{12} / 2 \\
d_{12} /2 & d_{22}
\end{bmatrix}
\begin{bmatrix}
x_1 & x_2
\end{bmatrix}

$$

Linear forms are also a thing. A general linear form in three variables $x_1$, $x_2$, $x_3$:

$$
Q(x_1,x_2,x_3) = d_1x_1 + d_2x_2 + d_3x_3 =

\begin{bmatrix}
d_1&d_2&d_3
\end{bmatrix}
\begin{bmatrix}
x_1 \\ x_2 \\ x_3
\end{bmatrix}

$$

This allows us to represent **any quadratic function** $f(x)$ as a sum of:

$$
f(x) = x'Ax + b'x + c

$$

For example:

$$
f(x_1,x_2) = -x^2_1 + 4x_1x_2 + 2x^2_x + 3x_1 - 3x_2 + 7 =
\begin{bmatrix}
x_1 & x_2
\end{bmatrix}
\begin{bmatrix}
1 & 2 \\
2 & 2
\end{bmatrix}
\begin{bmatrix}
x_1 & x_2
\end{bmatrix}

$$
