# Oscillators & State Space Systems

## Modal Analysis

Oscillators are coupled mass/spring, pendulums, etc systems, which can be analysed using modal analysis:

- Start with a complex coupled system
- Use **spectral decomposition** to diagonalise the system into simpler uncoupled systems
- Solve for each system

## Single Degree of Freedom Oscillators

### Mass-Spring

![](./img/simple-mass-spring.png)

The equation of motion is:

$$\frac{d^2z(t)}{dt^2} = -kz(t)$$

where $k$ is the normalised stiffness, $k = \bar{k} / m$. Assuming an oscillatory solution:

$$z(t) = A\cos\omega_0t + B\sin\omega_0t$$
$$\dot{z}(t) = -\omega_0A\sin\omega_0t  +\omega_0 B\cos\omega_0t$$
$$\ddot{z}(t) = -\omega_0^2A\cos\omega_0t  -\omega_0^2 B\sin\omega_0t$$

Solving for $\omega_0$ by substituting back in gives $\omega_0 = \sqrt{k}$.

Setting $z(0) = 0$ and $\dot{z}(0) = v_0$:

$$z(t) = a\sin(\omega_0t) \qquad a = \frac{v_0}{\omega_0}$$

This system oscillates at a single frequency, $\omega_0 = \sqrt{\bar{k} / m}$.

## Pendulum

The equation of motion for a pendulum in the tangential direction is:

![](./img/pendulum.png)

$$ml\ddot{\theta} = -mg\sin\theta$$
$$\ddot{\theta}(t) = -k\theta(t) \qquad \text{(for small} \,\theta\text{)}$$

Where $k=g/l$

- The system oscillates at the frequency $\omega_0 = \sqrt{k}$
- This system has the same form, and therefore solution, as the mass-spring.
- The frequency depends only on the length, not the mass, a property unique to pendulums.

## Multiple Degrees of Freedom

This single degree of freedom can be generalised to a 2nd order $n$-degree of freedom system:

$$\frac{d^2y}{dt^2} = -Ky(t)$$

$$
K =
\begin{bmatrix}
k_{11} & k_{12} & \dots & k_{1n} \\
k_{21} & k_{22} & \dots & k_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
k_{n1} & k_{n2} & \dots & k_{nn} \\
\end{bmatrix}
\quad
y=
\begin{bmatrix}
y_1 \\ y_2 \\ \vdots \\ y_n
\end{bmatrix}
$$

- $K$ is an $n\times n$ matrix
- $y$ is an $n$-dimensional column vector

The goal is to find frequencies $\omega$ such that the solution $y(t)$ can be expressed as harmonic functions of $\sin(\omega t)$. This is done by spectral decomposition:

$$K = V\Lambda V^{-1}$$
$$\frac{d^2y}{dt^2} = -V\Lambda V^{-1}y(t)$$
$$\frac{d^2V^{-1}y}{dt^2} = -V^{-1}V\Lambda V^{-1}y(t)$$

Introduce a new variable $z(t) = V^{-1}y(t)$, so that for $z(t)$:

$$\frac{d^2z}{dt^2} = -\Lambda z(t)$$

$$
\Lambda =
\begin{bmatrix}
\lambda_1 & 0 & \dots & 0 \\
0 & \lambda_2 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & \lambda_n \\
\end{bmatrix}
$$

This equation involving a diagonal matrix can then be decomposed to $n$ uncoupled scalar equations (the normal modes) for each scalar $z_i$ in $z$:

$$\frac{d^2z_i}{dt^2} = -\lambda_i z(t)$$

This is a single degree of freedom scalar equation, as the previous two examples, thus:

- $\lambda_i = \omega_i^2$
- $z(t) = a\sin(\omega t)$

The solution of the 2nd order $n$-DoF system is defined by a superposition of the normal modes $z_i(t)$

- $\lambda_i = \omega_i^2$ is an eigenvalue of $K$
  - $\omega_i$ is the **frequency** of the normal mode
- $v_i$ is an eigenvector of $K$
  - Specifies the **shape** of the normal mode

### Example 1

Conside a system of two coupled masses:

- Two masses $m_1$ and $m_2$
- Two displacements $y = \begin{bmatrix} y_1 \\ y_2\end{bmatrix}$
  - The variable to solve for
- Three springs $k_1$, $k_2$, $k_3$

Two equations of motion, one for each mass:

$$m_1 \frac{d^2y_1}{dt^2} = - k_1 y_1 - k_3 (y_1 - y_2)$$
$$m_2 \frac{d^2y_2}{dt^2} = - k_2 y_2 + k_3 (y_1 - y_2)$$

Rearranging into a matrix equation:

$$\frac{d^2y_1}{dt^2} = \frac{-(k_1 + k_3)y_1 + k_3 y_2}{m_1}$$
$$\frac{d^2y_2}{dt^2} = \frac{k_3 y_1 -(k_3 + k_3) y_2}{m_2}$$

$$
\frac{d^2y}{dt^2} = -
\begin{bmatrix}
 \frac{k_1 + k_3}{m_1}& \frac{-k_3}{m_1}\\
 \frac{-k_3}{m_2}&\frac{k_2 + k_3}{m_2}\\
\end{bmatrix}
\begin{bmatrix}
y_1 \\ y_2
\end{bmatrix}
=-Ky
$$

Let $k_1=k_2 = 2$, and $k_3=m_1=m_2=1$:

$$
K =
\begin{bmatrix}
 3& -1\\
 -1&3\\
\end{bmatrix}
$$

To solve the system, need to compute the eigenvalues and eigenvectors of $K$, and hence the normal modes. Starting with the eigenvalues:

$$
\begin{vmatrix}
 3 - \lambda& -1\\
 -1&3 - \lambda\\
\end{vmatrix}
 = 0
$$

$$\lambda^2 -6\lambda +8 = 0$$
$$\lambda_1 = 2 \quad \lambda_2 = 4$$

Hence the two natural frequencies of oscillation are $\omega_1 = \sqrt{2}$ and $\omega_2 = 2$. Now for the eigenvectors:

$$(A-\lambda_i)v = 0$$

$$
\lambda_1 = 2 \quad
\begin{bmatrix}
 1& -1\\
 -1&1\\
\end{bmatrix}
\begin{bmatrix}
v_1^{(1)}\\v_2^{(2)}
\end{bmatrix}
= 0
$$

$$v_1^{(1)} = v_2^{(2)}$$

$$
v^{(1)} = \begin{bmatrix}
1\\1
\end{bmatrix}
$$

$$
\lambda_2 = 4 \quad
\begin{bmatrix}
 -1& -1\\
 -1&-1\\
\end{bmatrix}
\begin{bmatrix}
v_1^{(1)}\\v_2^{(2)}
\end{bmatrix}
= 0
$$

$$v_1^{(1)} = -v_2^{(2)}$$

$$
v^{(1)} = \begin{bmatrix}
1\\-1
\end{bmatrix}
$$

The first mode $\lambda_1=2$, $v^{(1)} = \begin{bmatrix}1\\1\end{bmatrix}$, $\omega_1 = \sqrt 2$ implies that both bodies move in unison at the frequency of the mode $f = \frac{1}{\sqrt{2\pi}$Hz. The spring between the two masses does not stretch or contract.

The second mode $\lambda_1=4$, $v^{(2)} = \begin{bmatrix}1\\-1\end{bmatrix}$, $\omega_2 = 2$ implies that both bodies move in opposition at the frequency of the mode $f = \frac{1}{\pi}$Hz, with the connecting spring stretching and contracting.

### Example 2

The full nonlinear equations of motion for a double pendulum are:

$$(m_1 + m_2)L_1\ddot{\theta_1} + m_2L_2\dot{\theta_2^2} \sin(\theta_1 - \theta_2) + m_2L_2\ddot{\theta_2}\cos(\theta_1-\theta_2) + (m_1 + m_2)g\sin(\theta_1) = 0$$
$$m_2L_2\ddot{\theta_2} + m_2L_1\ddot{\theta_1}\cos(\theta_1 -\theta_2) - m_2L_1\dot{\theta_1^2}\sin(\theta_1 - \theta_2) + m_2 g \sin\theta_2$$

Assuming small angles, and therefore neglecting square terms and making small angle trigonometric approximations:

$$(m_1 + m_2)L_1\ddot{\theta_1} + m_2L_2\ddot{\theta_2} + (m_1 + m_2)g\theta_1 = 0$$
$$m_2L_2\ddot{\theta_2} + m_2L_1\ddot{\theta_1} + m_2g\theta_2 = 0$$

Let:

- $m_1 = 1$
- $m_2 = 5$
- $L_1 = 2$
- $L_2 = 3$

$$12\ddot{\theta_1} + 15\ddot{\theta_2} + 60\theta_1 = 0$$
$$10\ddot{\theta_2} + 15\ddot{\theta_1} + 50\theta_2 = 0$$

$$
\begin{bmatrix}
12 & 15 \\
10 & 15 \\
\end{bmatrix}
\begin{bmatrix}
\ddot{\theta_1} \\ \ddot{\theta_2}
\end{bmatrix}
+
\begin{bmatrix}
60 & 0 \\ 0 & 50\\
\end{bmatrix}
\begin{bmatrix}
\theta_1 \\ \theta_2
\end{bmatrix}
 = 0
$$

$$
\begin{bmatrix}
12 & 15 \\
10 & 15 \\
\end{bmatrix}
\begin{bmatrix}
\ddot{\theta_1} \\ \ddot{\theta_2}
\end{bmatrix}
= -
\begin{bmatrix}
60 & 0 \\ 0 & 50\\
\end{bmatrix}
\begin{bmatrix}
\theta_1 \\ \theta_2
\end{bmatrix}
$$

To put into the form $\ddot{\theta} = -K\theta$, we can premultiply by the inverse of the first matrix:

$$
\begin{bmatrix}
\ddot{\theta_1} \\ \ddot{\theta_2}
\end{bmatrix}
= -
\begin{bmatrix}
12 & 15 \\
10 & 15 \\
\end{bmatrix}^{-1}
\begin{bmatrix}
60 & 0 \\ 0 & 50\\
\end{bmatrix}
\begin{bmatrix}
\theta_1 \\ \theta_2
\end{bmatrix}
$$

$$

\begin{bmatrix}
\ddot{\theta_1} \\ \ddot{\theta_2}
\end{bmatrix}
= -
\begin{bmatrix}
30 & -25 \\ -20 & 20
\end{bmatrix}
\begin{bmatrix}
\theta_1 \\ \theta_2
\end{bmatrix}
$$

Now we have $K$, we can compute it's normal modes.

Mode 1 $\lambda_1$:

- $\lambda_1 = 2.0871$
- $\omega_1 = 1.4447$ rad/s
  - The system oscillates at a low frequency
- $v^{(1)} = \begin{bmatrix}0.6672\\0.7449\end{bmatrix}$
  - System oscillates in-phase

Mode 2 $\lambda_2$:

- $\lambda_2 = 47.9129$
- $\omega_1 = 6.9219$ rad/s
  - The system oscillates at a high frequency
- $v^{(1)} = \begin{bmatrix}0.8129\\-0.5824\end{bmatrix}$
  - System oscillates out of phase

The oscillation of the overall system will be the superposition of these two modes.

## State Space Linear Systems

Consider a second order linear ODE of the form $\ddot{y}(t) + a \dot{y}(t) + by(t) = 0$. Two variables are needed to uniquely specify the state of the system at any moment in time, the displacement $x_1 = y(t)$, and the velocity $x_2 = \dot{y}(t)$. The system can be rewritten in terms of these:

$$\dot{x_1} = \dot{y} = x_2$$
$$\dot{x_2} = \ddot{y} = -a\dot{y} - by = -ax_2 - bx_1$$

$$
\begin{bmatrix}
\dot{x_1} \\ \dot{x_2}
\end{bmatrix}
=
\begin{bmatrix}
0 & 1 \\ -b & -a
\end{bmatrix}
\begin{bmatrix}
x_1 \\ x_2
\end{bmatrix}
$$

This has replaced a 2nd order scalar equation with a two-state 1st order matrix equation. This concept can be generalised to express an $n$th order linear ODE as an $n$-state first order linear matrix ODE:

$$
\begin{bmatrix}
\dot{x_1} \\ \dot{x_2} \\ \vdots \\ \dot{x_n}
\end{bmatrix}
=
\begin{bmatrix}
0 & 1 & 0 & \dots & 0 \\
0 & 0 & 1 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \dots & 1 \\
-a_n & -a_{n-1} & -a_{n-2} & \dots & -a_1
\end{bmatrix}
\begin{bmatrix}
x_1 \\ x_2 \\ \vdots \\ x_n
\end{bmatrix}
$$

Where the state vector $x(t) = \begin{bmatrix}x_1 & x_2 & \dots & x_n\end{bmatrix}^{\prime}$

- $x_1 = y$
- $x_2 = y' = \dot{x_1}$
- $x_3 = y'' = \dot{x_2}$
- $x_n = y^{(n)} = \dot{x_{n-1}}$

Now to work out how to solve it. In the scalar case, the solution to $\dot{x}(t) = ax(t)$ with $x(0) = 0$ has the form

$$x(t) = e^{at}x_0 = x_0(1 + at + \frac{(at)^2}{2!} + \frac{(at)^3}{3!} + \dots)$$

The sign of $a$ determines the stability of the system:

- $a$ is negative: the system decays exponentially and is stable
- $a$ is zero: nothing ever happens
- $a$ is positive: the system rises exponentially and is unstable

The matrix case has the same solution:

$$x(t) = e^{At}x_0 = x_0(I_n + At + \frac{(At)^2}{2!} + \frac{(At)^3}{3!} + \dots)$$

The task is then to compute the matrix exponential, and characterise the dynamics of the solution using the matrix $A$.

Suppose $A$ has the spectral decomposition $A = V\Lambda V^{-1}$:

$$\dot{x}(t) = Ax(t) = V\Lambda V^{-1}x(t)$$
$$\dot{x}(t) = Ax(t) = \Lambda V^{-1}x(t)$$

Defining $z(t) = V^{-1}x(t)$ again:

$$\dot{z}(t) = \Lambda z(t)$$

$$
z(t) =
\begin{bmatrix}
e^{\lambda_1 t}  & 0  & \dots & 0 \\
0 & e^{\lambda_2 t}   & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0  & \dots & e^{\lambda_n t} \\
\end{bmatrix}
z(0)
$$

Since $\Lambda$ is diagonal, this is now a set of uncoupled equations:

$$\dot{z_1}(t) = \lambda_1 z_1(t) \quad \Longrightarrow \quad z_1(t) = e^{\lambda_1 t}z_1(0)$$
$$\dot{z_2}(t) = \lambda_1 z_2(t) \quad \Longrightarrow \quad z_2(t) = e^{\lambda_1 t}z_2(0)$$
$$\dot{z_n}(t) = \lambda_1 z_n(t) \quad \Longrightarrow \quad z_n(t) = e^{\lambda_1 t}z_n(0)$$

$z_1(t), z_2(t), \dots , z_n(t)$ are the individual **modes** of the solution $x(t)$ and are defined by the eigenvalues $\lambda_1, \lambda_2, \dots , \lambda_n$ alone. The solution $x(t)$ is given by:

$$
x(t) = Vz(t) = V \operatorname{diag}\{e^{\lambda_1 t}, e^{\lambda_2 t},\dots, e^{\lambda_n t\}} V^{-1} x_0
$$

- The solution is a linear combination of the terms $e^{\lambda_1 t}, e^{\lambda_2 t},\dots, e^{\lambda_n t}$
- Hence, behaviour is defined by the eigenvalues
- The system is **stable** if **all eigenvalues are negative**
- If at least one is **positive**, **the system is unstable**

### Example

Consider an elementary RLC circuit with all components in series, with a non-zero initial charge $q_0$ on the capacitor. The instantaneous charge $q(t)$ in the circuit is described by a linear state space differential equation where $x(t) = \begin{bmatrix}q(t)\\\dot{q}(t)\end{bmatrix}$ and $x_0 = \begin{bmatrix}q_0\\0\end{bmatrix}$. Suppose:

- $q_0=6$
- $R =7$
- $L=1$
- $C=0.1$

Find the particular solution for this system and discuss it's stability.

The state space equation for the system in the form $\dot{x}(t) = Aq(t)$ is:

$$
\begin{bmatrix}
\dot{x_1}(t) \\ \dot{x_2}
\end{bmatrix}
=
\begin{bmatrix}
0 & 1 \\ -10 & -7
\end{bmatrix}
\begin{bmatrix}
q(t) \\ \dot{q}(t)
\end{bmatrix}
$$

The eigenvalues and eigenvectors of $A$ are:

$$
\lambda_1 = -2 \quad v^{(1)} =
\begin{bmatrix}
1 \\ -2
\end{bmatrix}
$$

$$
\lambda_2 = -5 \quad v^{(2)} =
\begin{bmatrix}
1 \\ -5
\end{bmatrix}
$$

The spectral resolution of $A$:

$$
V =
\begin{bmatrix}
1 & 1 \\ -2 & -5
\end{bmatrix}
$$

$$
V^{-1} =
-\frac{1}{3}
\begin{bmatrix}
-5 & -1 \\ 2 & 1
\end{bmatrix}
$$

$$
\Lambda=
\begin{bmatrix}
-2 & 0 \\ 0 & -5
\end{bmatrix}
$$

$$
A =
-\frac{1}{3}
\begin{bmatrix}
1 & 1 \\ -2 & -5
\end{bmatrix}
\begin{bmatrix}
-2 & 0 \\ 0 & -5
\end{bmatrix}
\begin{bmatrix}
-5 & -1 \\ 2 & 1
\end{bmatrix}
=
\begin{bmatrix}
0 & 1 \\ -10 & -7
\end{bmatrix}
$$

The solution is given by $x(t) = e^{At}x_0$, and the matrix exponential term $e^{At} = V \operatorname{diag}\{e^{\lambda_1 t}, e^{\lambda_2 t},\dots, e^{\lambda_n t\}} V^{-1} $:

$$
x(t) =
\begin{bmatrix}
1 & 1 \\ -2 & -5
\end{bmatrix}
\begin{bmatrix}
e^{-2t} & 0 \\ 0 & e^{-5t}
\end{bmatrix}
\left(\frac{-1}{3}\right)
\begin{bmatrix}
-5 & -1 \\ 2 & 1
\end{bmatrix}
\begin{bmatrix}
6 \\ 0
\end{bmatrix}
=
\begin{bmatrix}
-10e^{-2t} - 4e^{-5t} \\-20e^{-2t} +20e^{-5t}
\end{bmatrix}
$$

Thus the solution:

$$q(t) = -10e^{-2t} - 4e^{-5t}$$
$$\dot{q}(t) = -20e^{-2t} +20e^{-5t}$$

Also, since both eigenvalues $< 0$, the system is stable.
