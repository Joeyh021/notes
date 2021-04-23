# Simultaneous Linear Equations

Several methods for solving systems of simultaneous linear equations. All the examples shown are for 3 variables, but can easily be expanded 2 $n$ variables.

## Cramer's Rule

For a system of 3 equations:

- Calculate the determinant $\Delta$ of the matrix of coefficients
- Calculate determinants $\Delta_1, \Delta_2,...,\Delta_n$ by replacing 1 column of the matrix with the solutions
- Use determinants to calculate unknowns

$$
\begin{aligned}
a_1 x + b_1 y + c_1 z = d_1\\
a_2 x + b_2 y + c_2 z = d_2\\
a_3 x + b_3 y + c_3 z = d_3
\end{aligned}
$$

$$
\begin{pmatrix}
a_1 & b_1 & c_1 \\
a_2 & b_2 & c_2 \\
a_3 & b_3 & c_3
\end{pmatrix}
\cdot
\begin{pmatrix}
x \\ y \\ z
\end{pmatrix}
=
\begin{pmatrix}
d_1 \\ d_2 \\ d_3
\end{pmatrix}
$$

$$
\Delta =
\begin{vmatrix}
a_1 & b_1 & c_1 \\
a_2 & b_2 & c_2 \\
a_3 & b_3 & c_3
\end{vmatrix}
\qquad
\Delta_1 =
\begin{vmatrix}
d_1 & b_1 & c_1 \\
d_2 & b_2 & c_2 \\
d_3 & b_3 & c_3
\end{vmatrix}
$$

$$
\Delta_2 =
\begin{vmatrix}
a_1 & d_1 & c_1 \\
a_2 & d_2 & c_2 \\
a_3 & d_3 & c_3
\end{vmatrix}
\qquad
\Delta_3 =
\begin{vmatrix}
a_1 & b_1 & d_1 \\
a_2 & b_2 & d_2 \\
a_3 & b_3 & d_3
\end{vmatrix}
$$

$$
x = \frac{\Delta_1}{\Delta} \quad y = \frac{\Delta_2}{\Delta} \quad z= \frac{\Delta_3}{\Delta}
$$

## Matrix Inversion

For a system of equations in matrix form
$$Mx = a$$
The solutions $x$ is given by

$$x = M^{-1}a$$

**The system has no solutions if $\det M = 0$**

## Gaussian Elimination

Eliminating variables from equations one at a time to give a solution. Generally speaking, for a system of 3 equations

$$
\begin{aligned}
a_1 x + b_1 y + c_1 z = d_1 \quad (1)\\
a_2 x + b_2 y + c_2 z = d_2 \quad (2)\\
a_3 x + b_3 y + c_3 z = d_3 \quad (3)
\end{aligned}
$$

First, eliminate x from $(2)$ and $(3)$
$$a_1(2) - a_2(1) = (2)(new)$$
$$a_1(3) - a_3(1) = (3)(new)$$

This gives

$$
\begin{aligned}
a_1 x + b_1 y + c_1 z = d_1 \quad (1)\\
\tilde{b_2} y + \tilde{c_2} z = \tilde{d_2} \quad (2)\\
\tilde{b_3} y + \tilde{c_3} z = \tilde{d_3} \quad (3)
\end{aligned}
$$

Then, eliminate y from $(3)$
$$b_2(3) - b_3(2) = (3)(new)$$

Giving

$$
\begin{aligned}
a_1 x + b_1 y + c_1 z = d_1 \quad (1)\\
\tilde{b_2} y + \tilde{c_2} z = \tilde{d_2} \quad (2)\\
\tilde{\tilde{c_3}} z = \tilde{\tilde{d_3}} \quad (3)
\end{aligned}
$$

This gives a solution for $z$, which can then be back-substituted to find the solutions for $x$ and $y$.

$$z = \frac{\tilde{\tilde{d_3}}}{\tilde{\tilde{c_3}}}$$
$$y = \frac{\tilde{d_2}}{\tilde{b_2}} - \frac{\tilde{c_2}}{\tilde{b_2}}z$$
$$x = \frac{d_1}{a_1} - \frac{b_1}{a_1}y - frac{c_1}{a_1}z$$

The advantages of this method are:

- No need for matrices (yay)
- Works for homogenous and inhomogeneous systems
- The matrix need not be square
- Works for any size of system if a solution exists

Sometimes, the solution can end up being in a parametric form, for example:

$$
\begin{aligned}
4 x + y + z = 9 & \quad (1)\\
x + y + z = 6 & \quad (2)\\
x + 2 y + 2 z = 11 & \quad (3)
\end{aligned}
$$

$$
\begin{aligned}
4 x + y + z = 9 & \quad (1)\\
3y + 3z = 15 & \quad 4(2) - 1(1)\\
7 y + 7 z = 35 & \quad 4(3) - 1(1)
\end{aligned}
$$

$$
\begin{aligned}
4 x + y + z = 9 & \quad (1)\\
3y + 3z = 15 & \quad 4(2) - 1(1)\\
0z = 0 & \quad 3(3) - 7(2)
\end{aligned}
$$

This doesn't make sense, as the final equation is satisfied for any value of $z$. Substituting a parameter $\lambda$ for $z$ gives:

$$
z\ = \lambda \quad y = 5-\lambda \quad x = 1
$$

## Gauss-Seidel Iteration

Iterative methods involve starting with a guess, then making closer and closer approximations to the solution. If iterations tend towards a limit, then the system converges and the limit will be a solution. If the system diverges, there is no solution for this iteration. For the gauss-seidel scheme:

$$
\begin{aligned}
a_1 x + b_1 y + c_1 z = d_1 \quad (1)\\
a_2 x + b_2 y + c_2 z = d_2 \quad (2)\\
a_3 x + b_3 y + c_3 z = d_3 \quad (3)
\end{aligned}
$$

Rearrange to get iterative formulae:

$$
\begin{aligned}
x^{r+1} = (d_1 - b_1 y^r - c_1 z^r) / a_1 \quad (1)\\
y^{r+1} = (d_2 - a_2x^{r+1} - c_2z^r) / b_2\quad (2)\\
z^{r+1} = (d_3 - a_3x^{r+1} - b_3y^{r+1}) / c_3 \quad (3)
\end{aligned}
$$

Using these formulae, make a guess at a starting value and then continue to iterate. For example:

$$
\begin{aligned}
4 x + 1 y + 1 z = 9 \quad (1)\\
1 x + 5 y + 1 z = 14 \quad (2)\\
1 x + 1 y + 3 z = 12 \quad (3)
\end{aligned}
$$

Rearranging:

$$
\begin{aligned}
x^{r+1} = (9 - y^r - z^r) / 4 \quad (1)\\
y^{r+1} = (14 - x^{r+1} - z^r) / 5\quad (2)\\
z^{r+1} = (12- x^{r+1} - y^{r+1}) / 3 \quad (3)
\end{aligned}
$$

The solutions are $x=1$, $y=2$, $z=3$, as can be seen from the table below containing the iterations:

| r   | x     | y     | z     |
| --- | ----- | ----- | ----- |
| 0   | 0     | 0     | 0     |
| 1   | 2.25  | 2.35  | 2.467 |
| 2   | 1.046 | 2.098 | 2.952 |
| 3   | 0.988 | 2.012 | 3.000 |
| 4   | 0.997 | 2.001 | 3.001 |

Note that this will only work if the system is diagonally dominant. For a system to be diagonally dominant, the divisor of the iterative equation must be greater than the sum of the other coefficients.

$$
\begin{aligned}
\bm{4} x + 1 y + 1 z = 9 \\
1 x + \bm{5} y + 1 z = 14 \\
1 x + 1 y + \bm{3} z = 12
\end{aligned}
$$

Systems can be rearranged to have this property:

$$
\begin{aligned}
\bm{2} x + 7 y + 1 z = 5 \\
-1 x + \bm{3} y + 3 z = 2 \\
-6 x + 2 y + \bm{2} z = -3
\end{aligned}
$$

Rearranges to:

$$
\begin{aligned}
\bm{-6} x + 2 y + 1 z = -3 \\
2 x + \bm{7} y + 1 z = 5 \\
-1 x + 3 y + \bm{8} z = 2
\end{aligned}
$$
