# Partial Differential Equations

PDEs are use to model many kinds of problems. Their solutions give evolution of a function $y(x,t)$ as a function of time and space. Boundary conditions involving time and space are used as initial conditions.

A method of separation of variables is used for solving them, where it is assumed that $V(x,y) = X(x)Y(y)$. Two other auxiliary ODE results are also needed:

$$
\frac{d^2y}{dx^2} = a^2 y \quad \Longrightarrow \quad y = A_1 e^{\alpha x} + A_2 e^{-\alpha x}
$$

$$
\frac{d^2y}{dx^2} = -a^2 y \quad \Longrightarrow \quad y = B_1 \sin\alpha x + A_2 \cos\alpha x
$$

The general process for solving PDEs:

- Apply separation of variables
- Make an appropriate choice of constant $\pm \mu^2$
  - Nearly always $-\mu^2$
- Solve resulting ODEs
- Combine ODE solutions to form general PDE solution
- Apply boundary conditions to obtain particular PDE solution
  - Work out values for the arbitrary constants

## Laplace's Equation

Laplace's equation described many problems involving flow in a plane:

$$
\frac{\partial^2 V(x,y)}{\partial x^2} + \frac{\partial^2 V(x,y)}{\partial y^2} = 0
$$

Find the solution with the following boundary conditions:

- $V(0,y)=0$ and $V(\pi,y) = 0$
- $V(x,y) \to 0$ as $y \to \infty$
- $V(x,0) = 10\sin x + 7\sin 3x$

Starting with separation of variables:

$$
\frac{\partial V(x,y)}{\partial x} = Y(y) \frac{dX(x)}{dx} \quad \Rightarrow \quad \frac{\partial^2 V(x,y)}{\partial x^2} = Y(y) \frac{d^2X(x)}{dx^2}
$$

$$
\frac{\partial V(x,y)}{\partial y} = X(x) \frac{dY(y)}{dy} \quad \Rightarrow \quad \frac{\partial^2 V(x,y)}{\partial y^2} = X(x) \frac{d^2Y(y)}{dy^2}
$$

Substituting back into the original PDE:

$$
Y(y) \frac{d^2X(x)}{dx^2} + X(x) \frac{d^2Y(y)}{dy^2} = 0
$$

$$
\frac{1}{X(x)} \frac{d^2X(x)}{dx^2} = -\frac{1}{Y(y)} \frac{d^2Y(y)}{dy^2}
$$

We have transformed the PDE into an ODE, where each side is a function of $x$/$y$ only. The only circumstances under which the two sides can be equal for all values of $x$ and $y$ is if both sides independent and equal to a constant. Since the constant is arbitrary, let it be $\mu^2$. Now we have two ODEs and their solutions from the auxiliary results earlier:

$$
\frac{1}{X(x)} \frac{d^2X(x)}{dx^2} = \mu^2 \qquad -\frac{1}{Y(y)} \frac{d^2Y(y)}{dy^2} = \mu^2
$$

$$
\frac{d^2X(x)}{dx^2} = \mu^2 X(x) \qquad \frac{d^2Y(y)}{dy^2} = -\mu^2Y(y)
$$

$$
X(x) = A_1 e^{\mu x} + A_2 e^{-\mu x} \qquad Y(y) = B_1 \sin\mu y + B_2 \cos\mu y
$$

Substituting the solutions back into $V(x,y) = X(x) Y(y)$, we have a general solution to our PDE in terms of 4 arbitrary constants:

$$
V(x,y) = ( A_1 e^{\mu x} + A_2 e^{-\mu x}) ( B_1 \sin\mu y + B_2 \cos\mu y)
$$

We can now apply boundary conditions:

- Substituting in $V(0,y) = 0$ gives $A_1 + A_2 = 0$
- Substituting in $V(\pi,y) = 0$ gives $A_1e^{\mu\pi} + A_2e^{-\mu\pi} = 0$
- Using the two together gives $A_1(1-e^{-2\mu\pi) } =0$, so either:
  - $A_1 = 0$
  - $(1-e^{-2\mu\pi}) = 0$
- If $A_1 =0$, then $A_2 = 0$, so $V(x,y)=0$
  - This is the trivial solution and is of no interest
- If $(1-e^{-2\mu\pi}) = 0$, then $\mu =0$
  - This also implies that $V(x,y)= 0$, so is useless too

The issue is that we selected our arbitrary constant badly. If we use $-\mu^2$ instead, then our solutions are the other way round:

$$
X(x) = A_1 \sin\mu x + A_2 \cos\mu x \qquad Y(y) =  B_1 e^{\mu y} + B_2 e^{-\mu y}
$$

Checking the boundary conditions again:

- First condition, $V(0,y) = 0$
  - Gives $A_2 = 0$
- Second condition $X(\pi,y) = 0$
  - Gives $A_1\sin\mu\pi = 0$
    - Either $A_1 = 0$ (not interested)
    - $\sin\mu\pi = 0$
  - $\mu$ is an integer, $n$

We now have:

$$
V(x,y) = (A_1\sin nx)(B_1 e^{n y} + B_2 e^{-n y})
$$

Where $n$ is any integer. Using the other boundary conditions:

- $V(x,y) \to 0$ as $y \to \infty$
- If $n$ is positive, then $B_1 = 0$ (otherwise $B_1e^{ny} \to \infty$)
- If $n$ is negative, then $B_2 = 0$ (otherwise $B_2e^{-ny} \to \infty$)

Taking $n$ as positive, the form of the solutions is:

$$
V(x,y) = C_1 e^{-y}\sin x \quad (C_1 = A_1B_2 \: \text{for} \: n=1)
$$

$$
V(x,y) = C_2 e^{-2y}\sin 2x \quad (C_2 = A_1B_2 \: \text{for} \: n=2)
$$

$$
V(x,y) = C_n e^{-ny}\sin nx \quad (C_n = A_1B_2 \: \text{for} \: n)
$$

The most general form is the sum of these:

$$
\sum^{\infty}_{n=1} C_n e^{-ny}\sin nx
$$

Applying the final boundary condition: $V(x,0) = 10\sin x + 7\sin 3x$

- $C_1 = 10$
- $C_3 = 7$
- $C_n = 0$ for all other $n$

The complete solution is therefore:

$$
V(x,y) = 10e^{-y} \sin x + 7 e^{-3y} \sin 3x
$$

## The Heat Equation

The heat equation describe diffusion of energy or matter. With a diffusion coefficient $c$:

$$

\frac{\partial^2 u(x,t)}{\partial x^2} = \frac{1}{c^2}\frac{\partial u(x,t)}{\partial t}
$$

Solving with the following boundary conditions:

- $u(0,t) =0$
- $u(2,t) =0$
- $u(x,0) = 10$

Separating variables, $u(x,t) = X(x)T(t)$, and substituting, exactly the same as Laplace's equation, we have:

$$
\frac{1}{X(x)} \frac{d^2 X(x)}{dx^2} = \frac{1}{c^2T(t)}\frac{dT(t)}{dt}
$$

Setting both sides again equal to a constant $-\mu^2$, we have two ODEs (one 2nd order, one 1st):

$$
\frac{d^2X(x)}{dx^2} = -\mu^2 X(x) \quad \Rightarrow \quad X(x) = A \cos \mu x + B \sin \mu x
$$

$$
\frac{dT(t)}{dt} = -\mu^2 c^2 T(t) \quad \Rightarrow \quad T(t) = Ce^{-\mu^2c^2t}
$$

The general solution is therefore:

$$
u(x,y) = (A \cos \mu x + B \sin \mu x)Ce^{-\mu^2c^2t}
$$

Tidying up a bit, let $D=AC$, $E=BC$, $\lambda = \mu c$:

$$
u(x,y) = (D \cos \frac{\lambda}{c} x + E \sin \frac{\lambda}{c} x)e^{-\mu^2 t}
$$

Applying the first boundary condition:

- $u(0,t) = 0$
- Gives $0 = De^{-\lambda^2 t}$
- Since $e^{-\lambda^2 t} \neq 0$ for all $t$, $D=0$

We now have $u(x,t) = E \sin \left(\frac{\lambda x}{c} \right)e^{-\lambda^2 t}$. The second boundary condition:

- $u(2,t) = 0$, so $0 = E \sin \left(\frac{2\lambda }{c} \right)e^{-\lambda^2 t}$
- For the non trivial solution $E \neq 0$,and since $e^{-\lambda^2 t} \neq 0$, $ \sin \frac{2\lambda}{c} = 0 = n\pi$
- Therefore, $\lambda = \frac{n\pi c}{2}$ for $n=1,2,3,...$

Substituting this in gives:

$$
u(x,t) = E \sin \left( \frac{n\pi x}{2}\right) e^{\frac{-n^2\pi^2 c^2 t}{4}} \quad \text{for} \: n=1,2,3,...
$$

The above equation is valid for any $n=1,2,3,...$, so summing these gives the most general solution:

$$
u(x,t) = \sum^{\infty}_{n=1}E_n \sin \left( \frac{n\pi x}{2}\right)e^{\frac{-n^2\pi^2 c^2 t}{4}}
$$

The last boundary condition is $u(x,0) = 10$:

$$
10 = \sum^{\infty}_{n=1}E_n \sin \frac{n\pi x}{2}
$$

This is in the form of the a Fourier series:

$$
f(t) = \sum^{\infty}_{n=1} b_n \sin \frac{2\pi n t}{T} \qquad b_n = \frac{2}{T} \int^T_0 f(t) \sin \frac{2\pi n t}{T} \: dt
$$

We have:

$$
10 = \sum^{\infty}_{n=1}E_n \sin \frac{n\pi x}{2} \qquad E_n = \frac{2}{2} \int^2_0 10 \sin \frac{n\pi x}{2} \: dt
$$

$$
\int^2_0 10 \sin \frac{n\pi x}{2} \: dt = 10 \left[ \frac{-2}{n\pi} \cos \frac{n\pi x}{2}  \right]^2_0 = \frac{-20}{n\pi}[(-1)^n - 1]
$$

$$
E_n =
\begin{cases}
0 & n \:\text{even} \\
\frac{40}{n\pi} & n\: \text{odd}
\end{cases}
$$

Substituting this into $u$, and letting $n= 2k-1$:

$$
u(x,t) = \frac{40}{\pi}  \sum^{\infty}_{n=1} \frac{1}{2k-1} \sin \left(\frac{(2k-1)\pi x}{2}\right) e^{-\frac{(2k-1)^2}{4} \pi^2c^2t}
$$

## The Wave Equation

The wave equation is used to describe vibrational problems:

$$
\frac{\partial^2 y(x,t)}{\partial x^2} = c^2 \frac{\partial^2 y(x,t)}{\partial t^2}
$$

Solving the equation with the boundary conditions:

- $y(0,t) = 0$
- $y(0,l) = 0$
- $y(x,0) = \frac{\partial y(x,t)}{\partial t}$
- $y(x,0) = 12\sin\frac{3\pi x}{l}$

Doing the usual separation of variables and substitution, and choosing a constant $-\mu^2$:

$$
\frac{1}{X(x)} \frac{d^2X(x)}{dx^2} = \frac{c^2}{T(t)} \frac{d^2T(t)}{dt^2} = -\mu^2
$$

Solving both ODEs:

$$
\frac{d^2X(x)}{dx^2} =-\mu^2 X(x) \quad \Rightarrow \quad X(x) = A\cos\mu x + B \sin\mu x
$$

$$
\frac{d^2T(x)}{dt^2} = \frac{-\mu^2}{c^2} T(t) \quad \Rightarrow \quad T(t) = C \cos \frac{\mu}{c} t+ D \sin \frac{\mu}{c} t
$$

$$
y(x,t) = (A\cos\mu x + B \sin\mu x)(C \cos \frac{\mu}{c} t+ D \sin \frac{\mu}{c} t)
$$

This is the general solution. Start applying boundary conditions:

- $y(0,t) = 0$ implies that $0 = A(C \cos \frac{\mu}{c} t+ D \sin \frac{\mu}{c} t)$
  - As this is true for all $t$, $A=0$
- $y(0,t) = l$ implies that $0 = B\sin \mu l(C \cos \frac{\mu}{c} t+ D \sin \frac{\mu}{c} t)$
  - This is also true for all $t$, so $B\sin \mu l = 0$
  - Required that $B!=0$, so $0 = \sin \mu l$
  - $\mu = \frac{n\pi}{l}$ for $n = 1,2,3,...$

We now have:

$$
y(x,t) = B\sin \frac{n\pi}{l}x (C \cos \frac{\mu}{c} t+ D \sin \frac{\mu}{c} t) \quad \text{for} \: n=1,2,3,...
$$

Applying the third boundary condition, $y(x,0) = \frac{\partial y(x,t)}{\partial t}$:

$$
\frac{\partial y(x,t)}{\partial t} = B \sin \frac{n\pi}{l} x (-C \frac{\mu}{c} \sin \frac{\mu}{c}t + D \frac{\mu}{c} \cos \frac{\mu}{c} t)
$$

$$
\frac{\partial y(x,t)}{\partial t} = 0 = B \sin \frac{n\pi}{l} x (D \frac{\mu}{c})
$$

As this is for all $x$, $B \sin \frac{n\pi}{l} x \neq 0$, so $D = 0$. We now have:

$$
y(x,t) =  E\sin \frac{n\pi x}{l} \cos \frac{n\pi t}{cl} \quad \text{for} \: n=1,2,3,...
$$

The general solution is then:

$$
y(x,t) = \sum^{\infty}_{n=1} E_n \sin \frac{n\pi x}{l} \cos \frac{n\pi t}{cl}
$$

Applying the final boundary condition of $y(x,0) = 12\sin \frac{3\pi x}{l}$, gives $E_3 = 12$, else $E_n =0$. The particular solution is therefore:

$$
y(x,t) = 12\sin \frac{3\pi x}{l} \cos \frac{3\pi t}{cl}
$$
