# Laplace Transforms

The laplace transform transforms a function from the time domain to the laplace domain. For a continuous function $f(t)$. with $t \geq 0 $, the laplace transform is defined as

$$
\mathcal{L} \{ f(t)\}(s) = \int_0^{\infty}e^{-st}f(t) \,dt
$$

The notation used is

$$
\mathcal{L} \{ f(t)\} = F(s)


$$

Where $F(s)$ is the function in the laplace domain. Tables of laplace transforms for common functions are given in the formula book, so there is no need to work out most transforms manually.

Transforms are linearly independent in the same way integrals are:

$$
\mathcal{L}\{4x + 2y\} = 4\mathcal{L}\{x\} + 2\mathcal{L}\{y\}
$$

For example, find the laplace transform of $f(t) = \frac{1}{2}e^{-2t} + 3\sin 4t$:

$$
\mathcal{L} \{ f(t)\} = \frac{1}{2}\mathcal{L} \{ e^{-2t}\} + 3 \mathcal{L} \{ \sin 4t\}
$$

$$
= \frac{1}{2} \frac{1}{s+2} + 3 \times \frac{4}{s^2 + 16} = \frac{1}{2s + 4} + \frac{12}{s^2 + 16}
$$

## Inverse Transforms

Transforms also have an inverse:

$$
f(t) = \mathcal{L}^{-1} \{ F(s)\}
$$

For example, find $f(t)$ from $F(s) = \frac{3}{s^2 + 25 + 5}$

$$
f(t) = \mathcal{L}^{-1} \left\{ \frac{3}{s^2 + 25 + 5}\right\} = \mathcal{L}^{-1} \left\{ \frac{3}{(s+1)^2 + 4}\right\}
$$

$$
= \frac{3}{2}\mathcal{L}^{-1} \left\{ \frac{2}{(s+1)^2 + 4}\right\} = \frac{3}{2} e^{-t}\sin 2t
$$

Sometimes, partial fractions and/or completing the square is required to get the equation into a form recognisable from the table.

## First Shift Theorem

$$
\mathcal{L}^{-1} \left\{F(s + a) \right\} = e^{-at} f(t)
$$

## Differential Equations

Laplace transforms exist of derivatives:

$$
\mathcal{L} \left\{ \frac{dx}{dt} \right\} = sX(s) - x(0)
$$

$$
\mathcal{L} \left\{ \frac{d^2x}{dt^2} \right\} = s^2X(s) - sx(0) - \frac{dx}{dt}(0)
$$

This can be used to solved differential equations, by laplace transforming the differential equation to make an algebraic one, then inverse laplace transforming the result back.

### Example

Solve:

$$
\ddot y + 3 \dot y + 2y = e^t \qquad y(0) = 1 \quad \dot y(0) = 1
$$

$$
\mathcal{L} \{ \ddot y + 3 \dot y + 2y \}= \mathcal{L} \{e^t\}
$$

$$
s^2 Y(s) - sy(0) - \dot y(0) + 3(sY(s) - y(0)) + 2Y(s) = \frac{1}{s-1}
$$

$$
s^2 Y(s) - s - 1 + 3sY(s) - 3 + 2Y(s) = \frac{1}{s-1}
$$

$$
(s^2 + 3s + 2)(Y(s)) - s - 4 = \frac{1}{s-1}
$$

$$
Y(s) = \frac{1}{(s-1)(s^2 + 3s + 2)} + \frac{s+4}{(s^2 + 3s + 2)} = \frac{s^2 + 3s - 3}{(s-1)(s+1)(s+2)}
$$

Need to use partial fractions to inverse transform

$$
\frac{s^2 + 3s - 3}{(s-1)(s+1)(s+2)} = \frac A {s-1} +  \frac B {s+1} + \frac C {s+2}
$$

$$
s^2 + 3s - 3 = A(s+1)(s+2) + B(s-1)(s+2) + C(s+1)(s-1)
$$

$$
s = 1 \Rightarrow A= \frac 1 6
$$

$$
s = -1 \Rightarrow B = \frac 5 2
$$

$$
s = -2 \Rightarrow C = \frac {-5} 3
$$

$$
Y(s) = \frac 1 6 \cdot \frac 1 {(s-1)} + \frac 5 2 \cdot \frac 1 {(s+1)} - \frac 5 3 \cdot \frac 1 {(s+2)}
$$

Taking inverse laplace transforms using table:

$$
y(t) = \frac 1 6 e^t + \frac 5 2 e^{-t} - \frac 5 3 e^{-2t}
$$
