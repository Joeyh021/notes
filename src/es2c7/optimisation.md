# Optimisation

## Multidimensional Taylor Series

The scalar case of the taylor series is an expansion of the function $f(x)$ about the point $x^* = a$:

$$
f(x) = \sum^{\infty}_{n=0} \frac{1}{n!} f^{(n)}(a)(x-a)^n
$$

This can be generalised to a matrix case. Let $f$ be a scalar function of a column vector $\mathbf x$. The taylor series expansion of $f(\mathbf x)$ about the point $\mathbf{x^*=a}$ is:

$$
f(\mathbf x) = \sum^{\infty}_{n=0} \frac{1}{n!}(\mathbf{x-a})^n(\partial^{(n)}f)(\mathbf a)
$$

This result $f$ is a scalar. Consider the first three terms:

$$
f(\mathbf x) = \sum^{\infty}_{n=0} \frac{1}{n!}(\mathbf{x-a})^n(\partial^{(n)}f)(\mathbf a) =
f(\mathbf a) +
\left(\frac{\partial  f}{\partial \mathbf x}\Bigr|_{\mathbf x = \mathbf a}\right)(\mathbf{x-a}) +
\frac{1}{2!} (\mathbf{x-a})^{\prime} \left(\frac{\partial^2  f}{\partial \mathbf x^2}\Bigr|_{\mathbf x = \mathbf a}\right)(\mathbf{x-a})
$$

$\mathbf{g_{x=a}}$ is a $1 \times n$ row vector with it's gradient evaluated at the point $\mathbf a$:

$$
\left(\frac{\partial  f}{\partial \mathbf x}\Bigr|_{\mathbf x = \mathbf a}\right) =
\begin{bmatrix}
\frac{\partial  f}{\partial x_1}\Bigr|_{\mathbf x = \mathbf a} &
\frac{\partial  f}{\partial x_2}\Bigr|_{\mathbf x = \mathbf a} &
\dots &
\frac{\partial  f}{\partial x_n}\Bigr|_{\mathbf x = \mathbf a}
\end{bmatrix}
$$

$\mathbf{H_{x=a}}$ is the $n \times n$ matrix of second derivatives, called the **Hessian matrix**, evaluated at point $\mathbf a$

- The Hessian matrix is generally symmetric
- Matrix of mixed partial derivatives

$$
\mathbf{H_{x=a}} =  \left(\frac{\partial^2  f}{\partial \mathbf x^2}\Bigr|_{\mathbf x = \mathbf a}\right) =
\left[ \frac{\partial^2 f}{\partial x_i \partial x_j}\Bigr|_{\mathbf x = \mathbf a}\right]
$$

Taylor series can be used to approximate multidimensional functions:

- Let $S$ be a scalar function of an $n \times 1$ vector $\mathbf x$, $S(\mathbf x)$
- Expand $S$ about a point $\mathbf x$, assuming displacements $\mathbf h$ about $\mathbf x$
- The first term is a linear form
- Second term a quadratic form
- Higher order terms are ignored

$$
S(\mathbf{x+h}) = S(\mathbf x) + \mathbf{g_x h} + \frac{1}{2} \mathbf{x'H_x h} + ...
$$

## Multidimensional Optimisation

Optimisation tasks involve finding $\mathbf x$ such that $S$ is at an extremum (max/min).

Consider a continuous function $S (\mathbf x)$, expanded about the point $\mathbf x_0$, with a vector $\boldsymbol \zeta$ as the displacement from $\mathbf x_0$:

$$
S(\mathbf{x_0+\zeta}) \approxeq
S(\mathbf x_0) + \left( \frac{\partial S}{\partial \mathbf x} \right)^{\prime} \zeta + \frac{1}{2} \mathbf{\zeta}' \left(\frac{\partial^2 S}{\partial \mathbf x^2} \right) \mathbf{\zeta}
=S(\mathbf x_0) + \mathbf{g_{x_0}^{\prime} \zeta} + \frac{1}{2} \mathbf{\zeta'H_x \zeta}
$$

The point $\mathbf x_0$ is an **extremum** if the gradient vector $\mathbf{g'(x)} = 0$ when $\mathbf{x=x_0}$. The homogenous nonlinear equation $\mathbf{g'(x_0)} = 0$ therefore defines an extremum $\mathbf x_0$.

If $\mathbf{g'(x_0)} = 0$, then:

$$
S(\mathbf x_0) + \mathbf{g_{x_0}^{\prime} \zeta} + \frac{1}{2} \mathbf{\zeta'H_x \zeta}
\Longrightarrow
S(\mathbf x_0) + \frac{1}{2} \mathbf{\zeta'H_x \zeta}
$$

Therefore:

$$

S(\mathbf{x_0+\zeta}) - S(\mathbf x_0) = \frac{1}{2} \mathbf{\zeta'H_x \zeta}
$$

**This is the important result that defines the extremum of a function $\mathbf{S(x)}$**

To determine the nature of the extremum, the sign of the $\mathbf{\zeta'H_x \zeta}$ must be determined. By the spectral resolution, this is determined by the eigenvalues $\lambda_i$ of $\mathbf H$. It is said that the **sign definiteness** of $\mathbf H$ is determined by $\lambda_i$

Let $Q(\mathbf x)$ be a quadratic form $Q(\mathbf x) = \mathbf{\zeta'H_x \zeta}$ m, where $H$ is a symmetric $n \times n$ matrix. The eigenvalues of $\mathbf H$ are $\lambda_1, \lambda_2, ..., \lambda_n$. The definiteness is determined by _all_ of the eigenvalues:

| $\lambda_i,\; i=1...n$ | Definiteness of $\mathbf H$ | Nature of Point $\mathbf x_0$ |
| ---------------------- | --------------------------- | ----------------------------- |
| $>0$                   | Positive Definite           | Minimum                       |
| $\geq 0$               | Positive Semidefinite       | Probable Valley               |
| $>0$ and $<0$          | Indefinite                  | Saddle Point                  |
| $\leq 0$               | Negative Semidefinite       | Probable Ridge                |
| $<0$                   | Negative Definite           | Maximum                       |

### Extrema of a Multivariate Quadratic

For a quadratic $Q(\mathbf x) = \mathbf{x'Ax + b'x + c}$, the extremum is at the point where $\frac{\partial Q}{\partial \mathbf x} = 0$:

$$
\frac{\partial Q}{\partial \mathbf x} = 2 \mathbf{x'A+b'} = 0
$$

$$
2\mathbf{Ax}_0 = -\mathbf{b}
$$

$$
\mathbf x_0 = -\frac{1}{2}\mathbf{A^{-1}b}
$$

A maximum/minimum exists at the point $\mathbf x_0$ if the matrix $\mathbf A$ is positive/negative definite.

## Example 1

Find the extremum (and it's nature) of the quadratic function:

$$f(x_1,x_2) = 4x^2_1 + 2x_1x_2 - x_1 + 2x_2 + 1$$

Put into matrix form:

$$
f(\mathbf x) =
= \mathbf x'
\mathbf A'
\mathbf x
+
\mathbf b'
\mathbf x
+1
= \mathbf x'
\begin{bmatrix}
4 & 1 \\ 1 & 0
\end{bmatrix}
\mathbf x
+
\begin{bmatrix}
-1 & 2
\end{bmatrix}
\mathbf x
+1
$$

The extremum of this quadratic form exists at the point $\mathbf x_0$ where:

$$
\mathbf x_0 = -\frac{1}{2}\mathbf{A^{-1}b}
$$

$$
\mathbf A^{-1} =
\begin{bmatrix}
0 & 1 \\ 1 & -4
\end{bmatrix}
$$

$$
\mathbf x_0 = -\frac{1}{2}\mathbf{A^{-1}b}=
-\frac{1}{2}
\begin{bmatrix}
0 & 1 \\ 1 & -4
\end{bmatrix}
\begin{bmatrix}
-1 \\ 2
\end{bmatrix}
=
\begin{bmatrix}
-1 \\ 4.5
\end{bmatrix}
$$

$$
\mathbf x_0 =
\begin{bmatrix}
-1 \\ 4.5
\end{bmatrix}
$$

To determine the nature, find the eigenvalues of $\mathbf A$:

$$\lambda_1 = 4.235 \qquad \lambda_2 = -0.236$$

The eigenvalues lie either side of zero, which makes $\mathbf A$ indefinite, and the extremum is therefore a saddle point.

## Example 2

Find the stationary points (and their nature) for the function:

$f(\mathbf x) = f(x_1,x_2) = x^2_1 + 3x_1x^2_2 - x_2^3 + 4$

The stationary points lie where $g(\mathbf x_0) = 0$:

$$
g(\mathbf x) =
\begin{bmatrix}
\frac{\partial f}{\partial x_1} \\  \frac{\partial f}{\partial x_2}
\end{bmatrix}
=
\begin{bmatrix}
2x_1 + 3x_2^2 \\  6x_1x_2 - 3x_2^2
\end{bmatrix}
$$

The solutions are therefore:

$$
\begin{bmatrix}
2x_1 + 3x_2^2 \\  6x_1x_2 - 3x_2^2
\end{bmatrix}= 0
$$

$$ 2x_1 + 3x_2^2 = 0 \\ 6x_1x_2 - 3x_2^2 = 0$$

Two solutions:

$$
\mathbf x_0 =
\begin{bmatrix}
0 \\ 0
\end{bmatrix}
\qquad
\mathbf x_0 =
\begin{bmatrix}
-1/6 \\ -1/3
\end{bmatrix}
$$

To determine the nature of the extremum, we need the hessian matrix:

$$
\mathbf H(\mathbf x) =
\begin{bmatrix}
\frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_2x_1} \\
\frac{\partial^2 f}{\partial x_1x_2} & \frac{\partial^2 f}{\partial x_2^2} \\
\end{bmatrix}
=
\begin{bmatrix}
2 & 6x_2 \\
6x_2 & 6x_1 - 6x_2
\end{bmatrix}
$$

The eigenvalues at each point will give the nature. For $\mathbf x_0 = \begin{bmatrix}0 \\ 0\end{bmatrix}$:

$$\lambda_1 = 0 \qquad \lambda_2 = 2$$

The hessian matrix is positive semidefinite, so the point is probably a valley, but further analysis is required to determine the nature of the point.

For $\mathbf x_0 =\begin{bmatrix}-1/6 \\ -1/3\end{bmatrix}:

$$\lambda_1 = 3.56 \qquad \lambda_2 = -0.56$$

The hessian matrix is indefinite, so the point is a saddle point.
