# Differential Equations

## First Order

A first order differential equation has $\frac{dy}{dx}$ as it's highest derivative. For the two methods below, it is important the equation is in the correct form specified.

### Seperating Variables

For an equation of the form
$$\frac{dy}{dx} = f(x) g(y)$$

The solution is
$$\int \frac{dy}{g(y)} = \int f(x) dx$$

### Integrating Factors

For an equation of the form
$$\frac{dy}{dx} + P(x)y = Q(x)$$

An integrating factor $\mu$ can be found such that:
$$\mu(x) = e^{\int P(x) dx}$$

Multiplying through by $\mu$ gives

$$\mu(x)\frac{dy}{dx} + \mu(x)P(x)y = \mu(x)Q(x)$$

Then, applying he product rule backwards gives a solution:

$$\frac{d}{dx}(\mu(x) y) = \mu(x)Q(x)$$
$$\mu(x) y = \int \mu(x) Q(x) dx$$

## Second Order

A second order ODE has the form:
$$a \frac{d^2 y}{dx^2} + b\frac{dy}{dx} + cy = f(x)$$

The equation is _homogeneous_ if $f(x) = 0$.

The _auxillary equation_ is
$$ak^x + bk +c = 0$$

This gives two roots $k_1$ and $k_2$, which determine the _complementary function_:

| Roots                                                 | Complementary Function                            |
| ----------------------------------------------------- | ------------------------------------------------- |
| $k_1$ and $k_2$ both real                             | $y = Ae^{k_1 x} + Be^{k_2 x}$                     |
| $k_1 = k_2$, both real                                | $y = (A+Bx) e^{kx}$                               |
| $k_1 = \alpha + \beta i$ and $k_2 = \alpha - \beta i$ | $y = e^{\alpha x} (A\cos\beta x + B \sin\beta x)$ |

The complementary function is the solution. Sometimes, initial conditions will be given which allow the constants $A$ and $B$ to be found.

### Non-Homogeneous Systems

If the system is non-homogenous, ie $f(x) \neq 0$, then a _particular integral_ is needed too, and the solution will have form $y = c.f. + p.i.$. The particular integral is found using a trial solution, then substituting it into the equation to find the coefficients. Note that if the particular integral takes the same form as the complementary function, an extra $x$ will need to be added to the particular integral for it to work, it $ae^{kx}$ would become $axe^{kx}$

| $f(x)$                         | Trial Solution                        |
| ------------------------------ | ------------------------------------- |
| const $k$                      | const $\alpha$                        |
| polynomial $ax^r +...+ bx + c$ | $\alpha x^r + ... + \beta x + \gamma$ |
| $a\cos kx$ or $a\sin kx$       | $\alpha\cos kx + \beta\sin kx$        |
| $ae^{kx}$                      | $\alpha e^{kx}$                       |

### Example

$$\frac{d^2y}{dx^2} + 4y = \sin x \qquad y(0) = 1, \; \frac{dy}{dx}(0) = 1$$

Auxillary equation:
$$k^2 + 4 = 0$$
$$k = \pm 2i$$

Complementary function is therefore:
$$y = A\cos 2x + B\sin 2x$$

System is non-homogeneous, so have to find a particular integral. For this equation $f(x) = \sin x$, so the p.i. is $y = a\cos x + b \sin x$.
$$y = a \cos x + b\sin x$$
$$\frac{dy}{dx} = -a \sin x + b\cos x$$
$$\frac{d^2 y}{dx^2} = -a \cos x -b \sin x$$

Substituting this into the original equation:
$$\frac{d^2y}{dx^2} + 4y = -a \cos x -b \sin x + 4a \cos x + 4b\sin x = \sin x$$

Comparing coefficients:
$$\cos x: \quad 3a = 0 \Rightarrow a = 0$$
$$\sin x: \quad 3b = 1 \Rightarrow b = 1/3$$

The general solution is therefore:
$$y = c.f. + p.i. = A\cos 2x + B\sin 2x + \frac{1}{3} \sin x$$

Using initial conditions to find constants, for $y(0) = 1$
$$1 = A\cos 0 + B\sin 0 + \frac{1}{3} \sin 0 \Rightarrow A = 1 $$

For $\frac{dy}{dx}(0) = 1$
$$\frac{dy}{dx} = -2A \sin 2x + 2B \cos 2x + \frac{1}{3} cos x$$
$$1 = -2A \sin 0 + 2B \cos 0 + \frac{1}{3} cos 0$$
$$1 = 2B + \frac{1}{3} \Rightarrow B = \frac{1}{3}$$

Particular solution for given initial conditions is therefore:
$$y = \cos 2x + \frac{1}{3} \sin 2x + \frac{1}{3} sin x$$
