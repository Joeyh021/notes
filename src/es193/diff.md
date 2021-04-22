# Differentiation

## Implicit Differentiation

When differentiating a function of one variable with respect to another (ie $\frac{dy}{dx} f(y)$), simply differentiate with respect to $y$, then multiply by $\frac{dy}{dx}$.

For example, find $\frac{dy}{dx}$ where $x^2y^3 - x^2 + 3y - 3 = 0$. First, using the product rule to differentiate the first term:
$$u = x^2 \quad u' = 2x$$
$$v = y^3 \quad v' = 3y^2 \frac{dy}{dx}$$

The equation with all terms differentiated:
$$2xy^3 + 3x^2y^2 \frac{dy}{dx} -2x + 3y \frac{dy}{dx} = 0$$

Rearranging to get in terms of $\frac{dy}{dx}$:
$$3x^2y^2 \frac{dy}{dx}+ 3y \frac{dy}{dx} = 2x - 2xy^3$$
$$\frac{dy}{dx} = \frac{2x - 2xy^3}{3x^2y^2 + 3}$$

## Inverse Trig Functions

All the derivatives of the inverse trig functions are given in the data book. They can be derived as follows ($\sin$ is used as an example).

$$y = \sin^{-1} x$$
$$\sin y = x$$

Differentiating both sides with respect to x

$$\frac{dy}{dx}\cos y = 1$$
$$\frac{dy}{dx} = \frac{1}{\cos y}$$

Using pythagorean identity $\cos y = \sqrt{1 - \sin^2 y}$

$$\frac{dy}{dx} = \frac{1}{\sqrt{1 - \sin^2 y}} = \frac{1}{\sqrt{1 - x^2}}$$

## Differentials

Differentials describe small changes to values/functions
$$y= f(x)$$
$$\frac{dy}{dx} = f'(x)$$
$$dy = f'(x) dx$$

Recall that $\frac{dy}{dx} \approx \frac{\delta y}{\delta x}$. This means this can be rewritten:
$$\delta y \approx f'(x) \delta x$$

Dividing both sides by $y = f(x)$:
$$\frac{\delta y}{y} =  \frac{x f'(x)}{f(x)} \frac{\delta x}{x}$$

$\frac{\delta y}{y}$ represents a _relative_ change in y, and $\frac{\delta x}{x}$ represents a _relative_ change in x. This can be used to give approximations of how one quantity changes based upon another.

For example, given the mass of a sphere $M = \frac{4}{3} \rho \pi r^3$, where $\rho$ is the material density, estimate the change in mass when the radius is increased by 2%.
$$M = \frac{4}{3} \rho \pi r^3$$
$$\frac{dM}{dr} = 4 \rho \pi r^2$$
$$\delta m = 4 \rho\pi r^2 \delta r$$

Dividing both sides by the original formula:
$$\frac{\delta M}{M} = \frac{4 \rho\pi r^2 \delta r}{\frac{4}{3} \rho \pi r^3} = 3 \frac{\delta r}{r}$$

$\frac{\delta r}{r}$ represents a relative change in radius, so when $r$ increases by 2%, $\frac{\delta r}{r} = 0.02$
$$\frac{\delta M}{M} = 3 \times 0.02 = 0.06$$

Meaning the mass increases by 6%.

## Hyperbolic Functions

Hyperbolic functions have similar identities to circular trig functions. They're the same, except anywhere there is a product of two $\sinh$s, the term should be negated. Hyperbolic functions can also be defined in terms of exponential functions, making them easy to differentiate.

$$y = \cosh x = \frac{1}{2} (e^x + e^{-x})$$
$$\frac{dy}{dx} = \frac{1}{2} (e^x - e^{-x}) = \sinh x$$

All the derivatives of hyperbolic functions are given in the formula book.

## Parametric Differentiation

For a function given in parametric form $y = f(t)$, $x = f(t)$:
$$\frac{dy}{dx} = \frac{dy}{dt} \times \frac{dt}{dx}$$
$$\frac{d}{dx} = \frac{dt}{dx} \times \frac{d}{dt}$$

$$\frac{d^2y}{dx^2} = \frac{d}{dx}(\frac{dy}{dx}) = \frac{dt}{dx} \times \frac{d}{dt}(\frac{dy}{dx})$$

## Partial Differentiation

For a function of two variables $z = f(x,y)$ there are two gradients at the point $z$, one in $x$ and one in $y$. To find the gradient in the x direction, differentiate $f(x,y)$ treating y as a constant. To find the gradient in the y direction, differentiate $f(x,y)$ treating x as a constant. These are the two partial derivatives of the function, $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$.

For example, for a function $z= 4x^3 + 5y^7 x$:
$$\frac{\partial z}{\partial x} = 12x^2 + 5y^7 $$
$$\frac{\partial z}{\partial y} = 35y^6 x$$

### Higher Order Partial Derivatives

Three 2nd order derivatives for functions of 2 variables. For $z = f(x,y)$:
$$\frac{\partial^2 z}{\partial x^2} = \frac{\partial}{\partial x}(\frac{\partial z}{\partial x} ) $$
$$\frac{\partial^2 z}{\partial y^2} = \frac{\partial}{\partial y}(\frac{\partial z}{\partial y} ) $$
$$\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial}{\partial x}(\frac{\partial z}{\partial y}) = \frac{\partial}{\partial y}(\frac{\partial z}{\partial x}) = \frac{\partial^2 z}{\partial y \partial x} $$

Note how for the last one, the order is interchangable as it yields the same result.

### Chain Rule

The chain rule for a function $w(x,y)$, where x and y are functions of a parameter $t$:
$$\frac{dw}{dt} = \frac{\partial w}{\partial x}\frac{dx}{dt} + \frac{\partial w}{\partial y} \frac{dy}{dt}$$

## Total Differential

The total differential represents the total height gain or lost when moving along the function described by $z = f(x,y)$
$$dz = \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy$$

### Contour Plots

Along a line of a contour plot, the total differential is zero: the height doesn't change. This allows $\frac{dy}{dx}$ to be found
$$dh = \frac{\partial h}{\partial x}dx + \frac{\partial h}{\partial y}dy = 0$$
$$\frac{dy}{dx} = \frac{\partial h / \partial x}{\partial h / \partial y}$$
