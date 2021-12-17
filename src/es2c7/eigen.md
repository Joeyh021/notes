# Eigenvalues and Eigenvectors

For a square $n$x$n$ matrix $A$, a scalar $\lambda$ is an **eigenvalue** of $A$, where:

$$Av =\lambda v$$

This can be rewritten as a homogenous equation in an unknown vector $v$:

$$(A-\lambda I_n)v = o_n$$

This equation has infinitely many non-trivial solutions for $v$, where:

$$\det(A-\lambda I_n) = 0$$

This is the characteristic equation of $A$, and the eigenvalues $\lambda$ are scalars that satisfy this. Since the characteristic equation is an $n$-th degree polynomial, an $n$x$n$ matrix will have $n$ eigenvalues $\lambda_i$ for $i = 1,2...,n$.

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
