# Brief Notes + Equations
This is just a collection of notes for ES3C5 Signal Processing that I have found useful to have on hand and easily accessible.


Use `./generateTables.sh ../src/es2c5/brief-notes.md ` in the scripts folder.

<equation-table>

| [Part 1 - Analogue Signals and Systems](#part-1---analogue-signals-and-systems) |                  |
| ------------------------------------------------------------------------------- | ---------------- |
| [Laplace Table](#laplace-table)                                                 | ERR              |
| [Finding Time Domain Output $y(t)$](#finding-time-domain-output-yt)             | ERR              |
| [Input as Delta Function $\delta(t)$](#input-as-delta-function-deltat)          | $x(t)=\delta(t)$ |
| [Input as Step Function $u(t)$](#input-as-step-function-ut)                     | $x(t)=u(t)$      |
| [LTI System Properties](#lti-system-properties)                                 | ERR              |

</equation-table>


<div class="equations">

## Part 1 - Analogue Signals and Systems

### Laplace Table
Insert table here
![](./img/laplace.png)

### Finding Time Domain Output $y(t)$
1. Transform $x(t)$ and $h(t)$ into Laplace domain
2. Find product $Y(s) = X(s)H(s)$
3. Take inverse Laplace transform $Y(s)$

### Input as Delta Function $\delta(t)$
$$x(t)=\delta(t)$$
Then $X(s) = 1$, so $Y(s) = H(s)$.

### Input as Step Function $u(t)$
$$x(t)=u(t)$$
Then $X(s) = \frac{1}{s}$, so $Y(s) = \frac{H(s)}{s}$.

### LTI System Properties
LTI = **Linear Time Invariant**.
- LTI systems are *linear*. Given system $F\{\}$ and signals $x_1(t)$, $x_2(t)$ etc
  - LIT is *Additive*:
    $$ F\{x_1(t) + x_2(t)\} = F \{x_1(t)\} + F\{x_2(t)\} $$
  - LTI is scalable (or *homogeneous*)
    $$ F\{\alpha{}x_1(t)\} = \alpha{}F\{x_1(t)\}$$
- LTI is *time-invariant*, ie, if output $y(t) = F\{x_1(t)\}$ then:
    - $$ y (t - \tau) = F\{x_1(t - \tau)\} $$

### 

</div>