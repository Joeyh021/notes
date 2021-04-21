# Matrices

## Determinant & Inverse of a 2x2 Matrix

The determinant of a 2x2 matrix:

$$
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix}
= ad - bc
$$

The inverse:

$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}^{-1}
= \frac{1}{ad - bc}
\begin{pmatrix}
d & -b \\
-c & a
\end{pmatrix}
$$

**The inverse of a matrix $M$ only exists where $\det \,M \neq 0$**

## Minors & Cofactors

- There is a matrix minor corresponding to each element of a matrix
- The minor is calculated by
  - ignoring the values on the current row and column
  - calculate the determinant of the remaining 2x2 matrix

Example:

$$
M =
\begin{pmatrix}
3 & 0 & 2\\
2 & 0 & -2 \\
0 & 1 & 1
\end{pmatrix}
$$

The minor of the top left corner is:

$$
\begin{vmatrix}
0 & -2 \\
1 & 1
\end{vmatrix}
= 2
$$

The cofactor is the minor multiplied by it's correct sign. The signs form a checkerboard pattern:

$$
\begin{vmatrix}
+ & - & +\\
- & + & - \\
+ & - & +
\end{vmatrix}
$$

The matrix of cofactors is denoted $C$.

## Determinant of a 3x3 Matrix

The determinant of a 3x3 matrix is calculated by multiplying each element in one row/column by it's cofactor, then summing them. For the matrix:

$$
M =
\begin{pmatrix}
a & b & c\\
d & e & f \\
h & h & i
\end{pmatrix}
$$

$$
\det M =
a \cdot
\begin{vmatrix}
e & f \\
h & i
\end{vmatrix}
- b \cdot
\begin{vmatrix}
d & f \\
g & i
\end{vmatrix}
+ c \cdot
\begin{vmatrix}
d & e \\
g & h
\end{vmatrix}
$$

This shows the expansion of the top row, but any column or row will produce the same result.

## Inverse of a 3x3 Matrix

- Calculate matrix of minors
- Calculate matrix of cofactors $C$
- Transpose $C^T$
- Multiply by 1 over determinant

$$M^{-1} = \frac{1}{\det M} C^T$$

### Example

$$
M =
\begin{pmatrix}
3 & 0 & 2\\
2 & 0 & -2 \\
0 & 1 & 1
\end{pmatrix}
$$

$$
M_{11} = +
\begin{vmatrix}
0 & -2 \\
1 & 1
\end{vmatrix}
= 2 \qquad
M_{12} = -
\begin{vmatrix}
2 & -2 \\
0 & 1
\end{vmatrix}
= -2 \qquad
M_{13} = +
\begin{vmatrix}
2 & 0 \\
0 & 1
\end{vmatrix}
= 2 \qquad
$$

$$
M_{21} = -
\begin{vmatrix}
0 & 2 \\
1 & 1
\end{vmatrix}
= 2 \qquad
M_{22} = +
\begin{vmatrix}
3 & 2 \\
0 & 1
\end{vmatrix}
= 3 \qquad
M_{23} = -
\begin{vmatrix}
3 & 0 \\
0 & 1
\end{vmatrix}
= -3 \qquad
$$

$$
M_{31} = +
\begin{vmatrix}
0 & 2 \\
0 & -2
\end{vmatrix}
= 0 \qquad
M_{32} = -
\begin{vmatrix}
3 & 2 \\
2 & -2
\end{vmatrix}
= 10 \qquad
M_{33} = +
\begin{vmatrix}
3 & 0 \\
2 & 0
\end{vmatrix}
= 0 \qquad
$$

The transposed matrix of cofactors $C^T$ is therefore:

$$
C^T =
\begin{pmatrix}
2 & 2 & 0\\
-2 & 3 & 10 \\
2 & -3 & 0
\end{pmatrix}
$$

Explanding by the bottom row to calculate the determinant (it has 2 zeros so easy calculation):
$$\det M = 0 \times 0 + 1 \times 10 + 0 \times 0 = 10$$

Calculating inverse:

$$
M^{-1} = \frac{1}{\det M} C^T = \frac{1}{10}
\begin{pmatrix}
2 & 2 & 0\\
-2 & 3 & 10 \\
2 & -3 & 0
\end{pmatrix}
=
\begin{pmatrix}
0.2 & 0.2 & 0\\
-0.2 & 0.3 & 1 \\
0.2 & -0.3 & 0
\end{pmatrix}
$$
