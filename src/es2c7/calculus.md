# Differential Matrix Calculus

## The Derivative of a Matrix

Consider $\mathbf{x}(t)$ where $\mathbf{x}'= \begin{bmatrix}x_1 & x_2 & ... & x_n\end{bmatrix}^{\prime} $ and $t$ is a scalar. The derivative of $\mathbf{x}(t)$ with respect to time $t$ is:

$$
\frac{d\mathbf x}{dt} =
\begin{bmatrix}
\frac{dx_1}{dt} \\
\frac{dx_2}{dt}\\
\vdots\\
\frac{dx_n}{dt}\\
\end{bmatrix}
$$

The derivative of a matrix with respect to a scalar is just the derivative of all the values. Similarly for an $m \times n$ matrix $\mathbf X$

$$
\frac{d\mathbf X}{dt} =
\begin{bmatrix}
\frac{dx_{11}}{dt} & \frac{dx_{12}}{dt}  & \dots \frac{dx_{1n}}{dt} \\
\frac{dx_{21}}{dt} & \frac{dx_{22}}{dt}  & \dots \frac{dx_{2n}}{dt} \\
\vdots & \vdots  & \ddots \vdots\\
\frac{dx_{m1}}{dt} & \frac{dx_{m2}}{dt}  & \dots \frac{dx_{mn}}{dt} \\
\end{bmatrix}
$$

## Vector-Valued Functions

The set of $m$ functions on the same $n$ variables can be represented as a vector-valued function $\mathbf f$ over the vector $x$

$$
\mathbf f( \mathbf x) =
\begin{bmatrix}
f_1(x_1,x_2,...,x_n) \\
f_2(x_1,x_2,...,x_n) \\
\vdots \\
f_m(x_1,x_2,...,x_n) \\
\end{bmatrix}
$$

**Each element of the vector $\mathbf f$ is a function of the $\mathbf n$ variables $x_1,x_2,...x_n$**

- $\mathbf f$ is an $m \times 1$ vector function over $x$
- $\mathbf x$ is an $n \times 1$ vector

## The Matrix Form of the Chain Rule

If $\mathbf f = \mathbf f (\mathbf x) $ and $\mathbf x = ( \boldsymbol \theta )$ such that $\mathbf f = \mathbf f( \mathbf x (\boldsymbol \theta ))$:

$$
\frac{\partial \mathbf f}{\partial \boldsymbol \theta} = \frac{\partial \mathbf f}{\partial \boldsymbol x} \cdot \frac{\partial \mathbf x}{\partial \boldsymbol \theta}
$$

This is the same as the scalar case, but note that matrix multiplication is not commutative so the order matters.

## The Jacobian Matrix

The derivative of a vector function $\mathbf f$ with respect to a column vector $\mathbf x$ is defined formally as the $m \times n$ **Jacobian** matrix:

$$
\mathbf f =
\begin{bmatrix}
f_1 \\
f_2 \\
\vdots \\
f_m \\
\end{bmatrix}
\quad
\mathbf x =
\begin{bmatrix}
f_1 \\
f_2 \\
\vdots \\
f_m \\
\end{bmatrix}
$$

$$
\mathbf J =
\frac{\partial \mathbf f}{\partial \mathbf x} =
\begin{bmatrix}
\frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \dots & \frac{\partial f_1}{\partial x_n} \\
\frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \dots & \frac{\partial f_2}{\partial x_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial f_m}{\partial x_1} & \frac{\partial f_m}{\partial x_2} & \dots & \frac{\partial f_m}{\partial x_n} \\
\end{bmatrix}
$$

$$
\mathbf J_{ij} = \frac{\partial  f_i}{\partial  x_j}
$$

The Jacobian matrix is the derivative of a multivariate function, representing the best linear approximation to a differentiable function near a point. Geometrically, it defines a tangent plane to the function $\mathbf f$ at the point $\mathbf x$

## Linearisation of a Matrix Differential Equation

Assume that $\mathbf x^{*}$ is a stationary point (equilibrium state) of a non-linear system described by a matrix differential equation:

$$
\dot{\mathbf{x}}(t) = \mathbf f \left[ \mathbf x (t)\right] \quad \mathbf f \left[ \mathbf x^* (t)\right] = 0 \quad
\mathbf f( \mathbf x) =
\begin{bmatrix}
f_1(x_1,x_2,...,x_n) \\
f_2(x_1,x_2,...,x_n) \\
\vdots \\
f_m(x_1,x_2,...,x_n) \\
\end{bmatrix}
$$

The linearisation of this system is the evaluation of the Jacobian matrix at $\mathbf x^*$. The linearised equation is $\dot{\mathbf x}(t) = \mathbf{Ax}(t)$, with the matrix of constants $A$.

$$
\mathbf A = \frac{\partial \mathbf f}{\partial \mathbf x}\Bigr|_{\mathbf x = \mathbf x^*} =
\begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{11} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn} \\
\end{bmatrix}
$$

### Example

Linearise the system around an equilibrium state:

$$
\frac{d}{d\mathbf x}
\begin{bmatrix}
x_1 \\ x_2 \\ x_3
\end{bmatrix}
= \mathbf f (\mathbf x) =
\begin{bmatrix}
\sigma (x_1 - x_2) \\
x_1 (\rho - x_3) - x_2 \\
x_1 x_2 - \beta x_3 \\
\end{bmatrix}
$$

$\sigma$, $\rho$, and $\beta$ are parameters. At it's equilibrium, $\mathbf f (\mathbf x) =0$

$$
\mathbf f (\mathbf x) =
\begin{bmatrix}
\sigma (x_1 - x_2) \\
x_1 (\rho - x_3) - x_2 \\
x_1 x_2 - \beta x_3 \\
\end{bmatrix} = 0
$$

There are three solutions to this system of algebraic equations, but we're interested in the one at the origin where $\begin{bmatrix}x_1 & x_2 & x_3\end{bmatrix} ^{\prime}=\begin{bmatrix}0 & 0 & 0\end{bmatrix}^{\prime}$. Evaluating the Jacobian at this point:

$$
\mathbf J =
\frac{\partial \mathbf f}{\partial \mathbf x}
=
\begin{bmatrix}
\frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \frac{\partial f_1}{\partial x_3} \\
\frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \frac{\partial f_2}{\partial x_3} \\
\frac{\partial f_3}{\partial x_1} & \frac{\partial f_3}{\partial x_2} & \frac{\partial f_3}{\partial x_3} \\
\end{bmatrix}
=
\begin{bmatrix}
\sigma & -\sigma & 0 \\
\rho - x_3 & -1 & - x_1 \\
x_2 & x_1 & -\beta \\
\end{bmatrix}
$$

$$
\mathbf J (\mathbf x^*) = \mathbf J (0)
\frac{\partial \mathbf f}{\partial \mathbf x}\Bigr|_{\mathbf x = 0} =
\begin{bmatrix}
\sigma & -\sigma & 0 \\
\rho  & -1 & 0\\
0 & 0 & -\beta \\
\end{bmatrix}
$$

The linearised equation is therefore:

$$
\frac{d\mathbf f}{d\mathbf x} = \mathbf{Ax} =
\begin{bmatrix}
\sigma & -\sigma & 0 \\
\rho  & -1 & 0\\
0 & 0 & -\beta \\
\end{bmatrix}
\begin{bmatrix}
x_1 \\ x_2 \\ x_3
\end{bmatrix}
$$

## The Derivative of a Scalar Function With Respect to a Vector

If $Q(\mathbf x) = Q(x_1, x_2, ..., x_n)$ is a scalar quantity that depends on a vector $\mathbf x$ of $n$ variables, then the derivative of $Q$ with respect to $\mathbf$ is a **row vector**:

$$
\frac{\partial Q}{\partial \mathbf x} =
\begin{bmatrix}
\frac{\partial Q}{\partial x_1} &
\frac{\partial Q}{\partial x_2} &
\dots &
\frac{\partial Q}{\partial x_n}
\end{bmatrix} = \nabla Q
$$

This is the gradient $\operatorname{grad}(Q)$ or nabla ($\nabla Q$)

## The Derivative of the Quadratic Form

Using an auxillary result

$$ \alpha = \mathbf{y'Bx} \qquad \frac{\partial \alpha}{\partial\mathbf x} = \mathbf{y'B} \qquad \frac{\partial \alpha}{\partial\mathbf y} = \mathbf{x'B'}$$

We can compute the derivative of a quadratic form $Q = \mathbf{x'Ax}$:

$$
\frac{\partial Q}{\partial \mathbf x} =
\frac{\partial}{\partial \mathbf x} \left(\mathbf{x'Ax}\right) + \frac{\partial}{\partial \mathbf{(x')}} \left(\mathbf{x'Ax}\right)
= \mathbf{x'A + x'A' = x'(A+A')}
$$

Since $A$ is symmetric by definition of the quadratic form, $\mathbf{A = A'}$, the derivative of the quadratic form is a row vector:

$$
\frac{\partial Q}{\partial \mathbf x} = 2\mathbf{x'A}
$$

### Example

Consider the polynomial $Q(x_1,x_2) = x_1^2 + 4x_1 x_2 + 2x_2^2$. Find $\nabla Q$. First putting the equation into quadratic form:

$$
Q(x_1, x_2) =
\begin{bmatrix}
x_1 & x_2
\end{bmatrix}
\begin{bmatrix}
1 & 2 \\ 1 & 2
\end{bmatrix}
\begin{bmatrix}
x_1 \\ x_2
\end{bmatrix}
$$

The derivative $\frac{\partial Q}{\partial \mathbf x} = 2\mathbf{x'A}$:

$$
\frac{\partial Q}{\partial \mathbf x} = 2\mathbf{x'A} = 2
\begin{bmatrix}
x_1 & x_2
\end{bmatrix}
\begin{bmatrix}
1 & 2 \\ 1 & 2
\end{bmatrix}
=
\begin{bmatrix}
2x_1 + 4x_2 & 4x_1 + 4x_2
\end{bmatrix}


$$
