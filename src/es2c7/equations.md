# Linear Simultaneous Equations

The general form of a set of linear simulatenous equations:

$$
\begin{aligned}
a_{11} x_1 + a_{12} x_2 + ... + a_{1n}x_n = b_1\\
a_{21} x_1 + a_{22} x_2 + ... + a_{2n}x_n = b_2\\
a_{m1} x_1 + a_{m2} x_2 + ... + a_{mn}x_n = b_m\\
\end{aligned}

$$

This can be rewritten in a matrix/vector form:

$$
Ax=b

$$

$$
A=
\begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{1n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn} \\
\end{bmatrix}
\quad
b=
\begin{bmatrix}
b_1 \\ b_2 \\ \vdots \\ b_n
\end{bmatrix}
\quad
x=
\begin{bmatrix}
x_1 \\ x_2 \\ \vdots \\ x_n
\end{bmatrix}

$$

Equations of this form have three cases for their solutions:

- The system has **no solution**
- The system has a **unique solution**
- The system has an **infinite number of solutions**
  - $x$ can take a number of values

An **over-determined** system has more equations than unknowns and has no solution:

$$
\begin{bmatrix}
1 & 1 \\ -1 & 2 \\ -2 & 1
\end{bmatrix}
\begin{bmatrix}
x_1 \\ x_2
\end{bmatrix}
\begin{bmatrix}
2 \\ 1 \\ 2
\end{bmatrix}

$$

An **under-determined** system has more unknowns than equations and has infinite solutions:

$$
\begin{bmatrix}
1 & 1
\end{bmatrix}
\begin{bmatrix}
x_1 \\ x_2
\end{bmatrix}
\begin{bmatrix}
2
\end{bmatrix}

$$

A consistent system has a unique solution

$$
\begin{bmatrix}
1 & 1 \\ -1 & 2
\end{bmatrix}
\begin{bmatrix}
x_1 \\ x_2
\end{bmatrix}
\begin{bmatrix}
2 \\ 1
\end{bmatrix}

$$

The solution for this system is $\begin{bmatrix}1 \\ 1\end{bmatrix}$. Note that the rank and order of $A$ are both 2, and $A^{-1}$ exists in this case. If the determinant of a consistent system is 0, there will be no solutions.

## Solutions of Equations

To determine which of the three cases a system is:

- Introduce the **augmented matrix**: $\widetilde{A} = \left[A \,| \,b\right]$
- Calculate the rank of $A$ and $\widetilde{A}$

### No Solution

- If $\operatorname{rank}(A) \neq \operatorname{rank}(\widetilde A)$, then the system has no solution
- All vectors $x$ will result in an error vector
- A particular error vector will minimise the norm of the equation error
  - The least square error solution, $x^*$

$$
||\epsilon||^2 = ||Ax-b||^2 = (Ax-b)'(Ax-b)

$$

$$
x^* = A^+_Lb = (A'A)^{-1}A'b

$$

### Unique Solution

$\operatorname{rank}(A) = \operatorname{rank}(\widetilde A) = n$ where $n$ is the number of variables in $x$

- $\det(A) \neq 0$.

$$
x = A^{-1}b

$$

### Infinite Solutions

- $\operatorname{rank}(A) =\operatorname{rank}(\widetilde A) = k < n$
- Paramaeters can be assigned to any $n-k$ elements of the vector $x$ and the remaining $k$ elements can be computed in terms of these parameters
- A particular vector $x^*$ will again minimise the square of the norm of the solution vector

$$
x^* = A^+_Rb = A'(AA')^{-1}b

$$

## Homogenous Systems

A system of homogenous equations take the form:

$$
Ax = o_n \quad b = o_n=
\begin{bmatrix}
0 \\ 0 \\ \vdots \\ 0
\end{bmatrix}

$$

- $A$ is an $n$x$n$ matrix of known coefficients
- $b$ is an $n$x$1$ **null column vector**
- $x$ is an $n$x$1$ vector of unknowns

The augmented matrix $\operatorname{rank}(\widetilde A) =\left[A \,| \,o_n\right]$ and $\operatorname{rank}(A) = \operatorname{rank}(\widetilde A)$, so there is at least one solution vector $x=o_n$. There are two possible cases for other solutions:

- $\operatorname{rank}(A) = n$ and $\det(A) \neq 0$, then the trivial solution is the only unique solution
- If $\operatorname{rank}(A) < n$ and $\det(A) = 0$, then there is an infinite number of non-trivial solutions $x \neq o_n$
  - This includes the trivial solution $x = o_n$

## Example 1

Solutions to:

$$
\begin{bmatrix}
1&2&3\\4&5&6\\7&8&0
\end{bmatrix}
\begin{bmatrix}
x_1 \\ x_2\\ x_3
\end{bmatrix}
=
\begin{bmatrix}
6 \\ 15 \\15
\end{bmatrix}

$$

$$
\widetilde{A} =
\left[
\begin{array}{ccc:c}
1 & 2 & 3 & 6 \\
4 & 5 & 6 & 15 \\
7 & 8 & 0 & 15 \\
\end{array}
\right]

$$

First calculate the determinant of $A$:

$$
\begin{vmatrix}
1&2&3\\4&5&6\\7&8&0
\end{vmatrix}
=
\begin{vmatrix}
5 & 6 \\ 8 & 0
\end{vmatrix}
-2
\begin{vmatrix}
4 & 6 \\ 7 & 0
\end{vmatrix}
+3
\begin{vmatrix}
5&5 \\ 7&8
\end{vmatrix}
= 27

$$

$\det(A) = 3$ so $A$ is a full rank matrix (rank = order = 3). We know solutions exist, but need to find the rank of $\widetilde A$ to check if unique or infinite solutions. Using gaussian elimination to put $\widetilde A$ into row-echelon form:

$$
\begin{bmatrix}
1&2&3&6\\0&-2&-6&-9\\0&0&-9&-9
\end{bmatrix}

$$

The rank of $\operatorname{rank}(A) = \operatorname{rank}(\widetilde A) = 3$, so there is a unique solution $x=A^{-1}b$

$$
A^{-1} = \frac{1}{27}
\begin{bmatrix}
-48 & -24 & -3 \\ 42 & -21 & 6 \\ 3 & 6 & -3
\end{bmatrix}

$$

$$
x =
\frac{1}{27}
\begin{bmatrix}
-48 & -24 & -3 \\ 42 & -21 & 6 \\ 3 & 6 & -3
\end{bmatrix}
\begin{bmatrix}
6\\15\\15
\end{bmatrix}
=
\begin{bmatrix}
1\\1\\1
\end{bmatrix}

$$

## Example 2

Solutions to:

$$
\begin{bmatrix}
1&2&3\\4&5&6\\7&8&9
\end{bmatrix}
\begin{bmatrix}
x_1 \\ x_2\\ x_3
\end{bmatrix}
=
\begin{bmatrix}
0 \\ 0 \\ 0
\end{bmatrix}

$$

There is the trivial solution $x = o_n$, but we need to known if there is infinite solutions, which we can determine from $\operatorname{rank}(A)$. Putting it into row-echelon form:

$$
\begin{bmatrix}
1&2&3\\0 &-3 &-6\\ 0&0&0
\end{bmatrix}

$$

$\operatorname{rank}(A) = 2 < n$, so there is infinite solutions. Can introduce a parameter $\alpha$ to express solutions in terms of. Using the coefficients from the row-echelon form:

$$
x_1 + 2x_2 + 3x_3 =0 \\
-3x_2-6x_3 = 0

$$

$$
x_1 = x_3 = \alpha \\
x_2 = -2x_3 = -2\alpha

$$

$$
x = \begin{bmatrix}
0\\0\\0
\end{bmatrix}

$$

$$
x = \begin{bmatrix}
\alpha \\ -2\alpha \\ \alpha
\end{bmatrix}

$$
