# Eigenvalues & Eigenvectors

For a square $n\times n$ matrix $A$, a scalar $\lambda$ is an **eigenvalue** of $A$, where:

$$Av =\lambda v$$

This can be rewritten as a homogenous equation in an unknown vector $v$:

$$(A-\lambda I_n)v = o_n$$

This equation has infinitely many non-trivial solutions for $v$, where:

$$\det(A-\lambda I_n) = 0$$

This is the characteristic equation of $A$, and the eigenvalues $\lambda$ are scalars that satisfy this. Since the characteristic equation is an $n$-th degree polynomial, an $n\times n$ matrix will have $n$ eigenvalues $\lambda_i$ for $i = 1,2...,n$.

Corresponding to each eigenvalue $\lambda_i$, eigenvectors $v^{(i)}$ are non-trivial solutions of:

$$(A-\lambda_i I_n)v^{(i)} = o_n$$

## Example

Eigenvalues and vectors of:

$$
A =
\begin{bmatrix}
0 & 1 \\ -2 & -3
\end{bmatrix}
$$

The characteristic equation and it's solutions:

$$
\det(A - \lambda I_n) = 0
$$

$$
\begin{vmatrix}
-\lambda & 1 \\
-2 & -3-\lambda
\end{vmatrix}
= \lambda^2 + 3\lambda + 2 = 0\\
\lambda = -1, -2
$$

Eigenvector for $\lambda = -1$:

$$(A-\lambda I_n)v = o_n$$

$$
\left(
\begin{bmatrix}
0 & 1 \\ -2 & -3
\end{bmatrix}
-
\begin{bmatrix}
-1 & 0 \\ 0 & -1
\end{bmatrix}
\right)
\begin{bmatrix}
x_1 \\ x_2
\end{bmatrix}
=0
$$

$$
x_1 + x_2 = 0 \\
-2x_1 - 2x_2 = 0
$$

$$
x_1 = -x_2 \qquad
x = \begin{bmatrix}
-\alpha \\ \alpha
\end{bmatrix}
$$

Eigenvector for $\lambda = -2$:

$$(A-\lambda I_n)v = o_n$$

$$
\left(
\begin{bmatrix}
0 & 1 \\ -2 & -3
\end{bmatrix}
-
\begin{bmatrix}
-2 & 0 \\ 0 & -2
\end{bmatrix}
\right)
\begin{bmatrix}
x_1 \\ x_2
\end{bmatrix}
=0
$$

$$
2x_1 + x_2 = 0 \\
-2x_1 - x_2 = 0
$$

$$
-2x_1 = x_2 \qquad
x = \begin{bmatrix}
\alpha \\ -2\alpha
\end{bmatrix}
$$

## Spectral Decomposition

An $n$x$n$ matrix $A$ has $n$ eigenvectors $\lambda_1 ... \lambda_n$ and $n$ associated eigenvectors $v^{(1)} ... v^{(1)}$.

$V$ is an $n$x$n$ matrix of column eigenvectors, and $\Lambda$ is an $n$x$n$ diagonal matrix of eigenvalues

$$
V =
\left[
\begin{array}{c:c:c:c}
v^{(1)} & v^{(2)} & ... & v^{(n)}
\end{array}
\right]
$$

$$
\Lambda =
\begin{bmatrix}
\lambda_1 & 0 & \dots & 0 \\
0 & \lambda_2 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & \lambda_n \\
\end{bmatrix}
$$

$AV=V\Lambda$ **for all $n\times n$ matrices**

In general, eigenvectors of $A$ are linearly independent and so $V^{-1}$ exists. The **spectral decomposition** of a matrix $A$ can then be written:

$$A = V \Lambda V^{-1}$$

This allows for diagonalisation of a matrix in terms of its eigenvectors, and for breaking down a multi-dimensional problem into a set of single dimensional problems.

- This is only possible if all eigenvectors are linearly independent.
  - If any are repeated then this is not the case

If $A$ is a symmetric matrix, then the eigenvectors are **mutually orthogonal**, ie $v^{(i)} \cdot v^{(j)} = 0$ for all $i \neq j$. If these eigenvectors are **orthonormalised** (of unit length), then the matrix of eigenvectors $V$ is an orthogal matrix, meaning its transpose is equal to it's inverse. Hence, the spectral resolution of a symmetric matrix $A$ is:

$$A = V\Lambda V^{-1} = V \Lambda V'$$

### Example

Find the spectral resolution of, and hence diagonalise:

$$
A =
\begin{bmatrix}
1 & 2 \\ 2 & 1
\end{bmatrix}
$$

The eigenvalues of $A$ are $\lambda_1 = 3$ and $\lambda_2 = -1$. These can then be used to compute the corresponding eigenvectors:

$$
v^{(1)} =
\begin{bmatrix}
\alpha \\ \alpha
\end{bmatrix}
\qquad
v^{(2)} =
\begin{bmatrix}
\alpha \\ -\alpha
\end{bmatrix}
$$

Using $\alpha = 1$:

$$
\Lambda =
\begin{bmatrix}
\lambda_1 & 0 \\ 0 & \lambda_2
\end{bmatrix}
=
\begin{bmatrix}
3 & 0 \\ 0 & -1
\end{bmatrix}
$$

$$
V =
\begin{bmatrix}
v^{(1)}_1 & v^{(2)}_1 \\ v^{(1)}_2 & v^{(2)}_2
\end{bmatrix}
=
\begin{bmatrix}
1 & 1 \\ 1 & -1
\end{bmatrix}
$$

$$
V^{-1} =
\begin{bmatrix}
0.5 & 0.5 \\ 0.5 & -0.5
\end{bmatrix}
$$

The spectral resolution of $A$ is given by:

$$
A = V \Lambda V^{-1} =
\begin{bmatrix}
1 & 1 \\ 1 & -1
\end{bmatrix}
\begin{bmatrix}
3 & 0 \\ 0 & -1
\end{bmatrix}
\begin{bmatrix}
0.5 & 0.5 \\ 0.5 & -0.5
\end{bmatrix}
$$

$A$ can then be diagonalised by $V^{-1}AV$:

$$
V^{-1}AV
=
\begin{bmatrix}
0.5 & 0.5 \\ 0.5 & -0.5
\end{bmatrix}
\begin{bmatrix}
3 & 0 \\ 0 & -1
\end{bmatrix}
\begin{bmatrix}
1 & 1 \\ 1 & -1
\end{bmatrix}
=
\begin{bmatrix}
3 & 0 \\ 0 & -1
\end{bmatrix}
$$
