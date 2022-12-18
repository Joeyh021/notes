# Brief Notes + Equations
This is just a collection of notes for ES3C5 Signal Processing that I have found useful to have on hand and easily accessible.


Use `./generateTables.sh ../src/es2c5/brief-notes.md ` in the scripts folder.

<equation-table>

| [Laplace Conversion](#laplace-conversion)                              |                   |
| ---------------------------------------------------------------------- | ----------------- |
| [Laplace Table](#laplace-table)                                        | Insert table here |
| [Finding Time Domain Output $y(t)$](#finding-time-domain-output-yt)    |                   |
| [Input as Delta Function $\delta(t)$](#input-as-delta-function-deltat) | $x(t)=\delta(t)$  |
| [Input as Step Function $u(t)$](#input-as-step-function-ut)            | $x(t)=u(t)$       |
| [LTI System Properties](#lti-system-properties)                        | LTI =             |

| [3 - Poles and Zeros](#3---poles-and-zeros)                                               |                                                                                                               |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [General Transfer Function as 2 polynomials](#general-transfer-function-as-2-polynomials) | $H (s) = \frac{b_0s^M + b_1s^{M-1} + \cdots + b_{M-1}s + b_M}{a_0s^N + a_1s^{N-1} + \cdots + a_{N-1}s + a_N}$ |
| [Factorised Transfer Function](#factorised-transfer-function)                             | $H (s) = K \frac{(s - z_1)(s - z_2) \cdots (s - z_M)}{(s - p_1)(s - p_2) \cdots (s - p_N)}$                   |
| [Real system as real](#real-system-as-real)                                               | $M \le N$                                                                                                     |
| [Zero Definition](#zero-definition)                                                       | Roots z of the numerator. When $s =$ any $z$, $H(s)=0$                                                        |
| [Pole Definition](#pole-definition)                                                       | Poles p of the denominator. When $s =$ any $p$, $H(s)$ approaches $\inf$                                      |
| [Transfer Function Gain](#transfer-function-gain)                                         | K is the overall transfer function gain. (Coefficient of $s^M$ and $s^N$ is 1.)                               |
| [Stable System](#stable-system)                                                           | A system is considered stable if its impulse response tends to zero or a finite ...                           |
| [Components to Response](#components-to-response)                                         | Real Components $\rArr$ Exponential Response $\vert$ Imaginary $\rArr$ angular f...                           |

| [4 - Analog Frequency Response](#4---analog-frequency-response)                                                                          |                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Frequency Response](#frequency-response)                                                                                                | Frequency response of a system = output in response to sinusoid input of unit ma...                                                                                                       |
| [Continuous Fourier Transform](#continuous-fourier-transform)                                                                            | $F(jw) = \int{}^{\infty}_{t=0} ,f(t) , e^{-j\omega{}t} , dt$                                                                                                                              |
| [Inverse Fourier Transform](#inverse-fourier-transform)                                                                                  | $f(t) = \frac{1}{2\pi} \int{}^{\infty}_{\omega{}=-\infty} , F(j\omega{}) , e^{j\omega{}t} , d\omega{}$                                                                                    |
| [Magnitude of Frequency Response (MFR) $\vert H(j\omega{})\vert$](#magnitude-of-frequency-response-mfr-vert-hjomegavert)                 | $\left \vert H(j\omega ) \right \vert = \left \vert K \right \vert \frac{\prod _{i=1}^{M} \left \vert j\omega -z_i \right \vert}{\prod _{i=1}^{N} \left \vert j\omega -p_i \right \vert}$ |
| [Phase Angle of Frequency Response (PAFR) $\angle H(j\omega)$ - $K > 0$](#phase-angle-of-frequency-response-pafr-angle-hjomega---k--0)   | $\angle H(j\omega) = \sum _{i=1}^{M}\angle(j\omega -z_i) - \sum _{i=1}^{N}\angle(j\omega -p_i)$                                                                                           |
| [Phase Angle of Frequency Response (PAFR) $\angle H(j\omega)$ - $K < 0$](#phase-angle-of-frequency-response-pafr-angle-hjomega---k--0-1) | $\angle H(j\omega) = \sum _{i=1}^{M}\angle(j\omega -z_i) - \sum _{i=1}^{N}\angle(j\omega -p_i) + \pi$                                                                                     |

| [5 - Analog Filter Design](#5---analog-filter-design)                                                                                       |                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [Ideal Filters](#ideal-filters)                                                                                                             | Each ideal filter has unambiguous                                                                                                    |
| [Realisability](#realisability)                                                                                                             | System starts to respond to input before input is applied. Non-zero for $t<0$.                                                       |
| [Causality](#causality)                                                                                                                     | Output depends only on past and current inputs, not future inputs.                                                                   |
| [Realising Filters](#realising-filters)                                                                                                     | Realise as we seek smooth behaviour.                                                                                                 |
| [Gain $G_{dB}$ (linear $\rightarrow$ dB)](#gain-g_db-linear-rightarrow-db)                                                                  | $G_{dB} = 20 , log_{10}(G_{linear})$                                                                                                 |
| [Gain $G_{linear}$ (dB $\rightarrow$ linear)](#gain-g_linear-db-rightarrow-linear)                                                          | $G_{linear} = 10 ^{\frac{G_{dB}}{20}}$                                                                                               |
| [Transfer Function of Nth Order Butterworth Low Pass Filter](#transfer-function-of-nth-order-butterworth-low-pass-filter)                   | $H(s) = \frac{\omega_{c}^{N}}{\prod _{n=1}^{N}(s-p_n)}$                                                                              |
| [Frequency Response of common Low pass Butterworth filter](#frequency-response-of-common-low-pass-butterworth-filter)                       | $H(j\omega) = \frac{1}{sqrt{1 + (\frac{w}{w_c})^{2N}}}$                                                                              |
| [Normalised Frequency Response of common Low pass Butterworth filter](#normalised-frequency-response-of-common-low-pass-butterworth-filter) | $H(j\omega) = \frac{1}{sqrt{1 + w^{2N}}}$                                                                                            |
| [Minimum Order for Low Pass Butterworth](#minimum-order-for-low-pass-butterworth)                                                           | $N = \left \lceil \frac{log(\frac{10^{-\frac{G_s}{10}}-1}{10^{-\frac{G_p}{10}}-1})}{2,log(\frac{\omega_s}{\omega_p})} \right \rceil$ |
| [Low pass Butterworth Cut-off frequency $\omega_c$ (Pass)](#low-pass-butterworth-cut-off-frequency-omega_c-pass)                            | $\omega_c = \frac{\omega_p}{(10^{-\frac{G_p}{10}}-1)^\frac{1}{2N}}$                                                                  |
| [Low pass Butterworth Cut-off frequency $\omega_c$ (Stop)](#low-pass-butterworth-cut-off-frequency-omega_c-stop)                            | $\omega_c = \frac{\omega_s}{(10^{-\frac{G_s}{10}}-1)^\frac{1}{2N}}$                                                                  |

| [6 - Periodic Analogue Functions](#6---periodic-analogue-functions) |     |
| ------------------------------------------------------------------- | --- |

| [7 - Computing with Analogue Signals](#7---computing-with-analogue-signals) |     |
| --------------------------------------------------------------------------- | --- |

| [8 - Signal Conversion between Analog and Digital](#8---signal-conversion-between-analog-and-digital) |     |
| ----------------------------------------------------------------------------------------------------- | --- |

| [9 - Z-Transforms and LSI Systems](#9---z-transforms-and-lsi-systems) |     |
| --------------------------------------------------------------------- | --- |

| [10 - Stability of Digital Systems](#10---stability-of-digital-systems) |     |
| ----------------------------------------------------------------------- | --- |

| [11 - Digital Frequency Response](#11---digital-frequency-response) |     |
| ------------------------------------------------------------------- | --- |

| [12 - Filter Difference equations and Impulse responses](#12---filter-difference-equations-and-impulse-responses) |     |
| ----------------------------------------------------------------------------------------------------------------- | --- |

| [13 - FIR Digital Filter Design](#13---fir-digital-filter-design) |     |
| ----------------------------------------------------------------- | --- |

| [14 - Discrete fourier transform and FFT](#14---discrete-fourier-transform-and-fft) |     |
| ----------------------------------------------------------------------------------- | --- |

| [15 - Computing Digital Signals](#15---computing-digital-signals) |     |
| ----------------------------------------------------------------- | --- |

| [16 - Digital vs Analogue Recap](#16---digital-vs-analogue-recap) |     |
| ----------------------------------------------------------------- | --- |

| [17 - Probabilities and random signals](#17---probabilities-and-random-signals) |     |
| ------------------------------------------------------------------------------- | --- |

| [18 - Signal estimation](#18---signal-estimation) |     |
| ------------------------------------------------- | --- |

| [19 - Correlation and Power spectral density](#19---correlation-and-power-spectral-density) |     |
| ------------------------------------------------------------------------------------------- | --- |

| [20 - Image Processing](#20---image-processing) |     |
| ----------------------------------------------- | --- |

</equation-table>

# Part 1 - Analogue Signals and Systems

<div class="equations">

## Laplace Conversion

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

</div>

<div class="equations">

## 3 - Poles and Zeros
### General Transfer Function as 2 polynomials
$$ H (s) = \frac{b_0s^M + b_1s^{M-1} + \cdots + b_{M-1}s + b_M}{a_0s^N + a_1s^{N-1} + \cdots + a_{N-1}s + a_N} $$

### Factorised Transfer Function
$$ H (s) = K \frac{(s - z_1)(s - z_2) \cdots (s - z_M)}{(s - p_1)(s - p_2) \cdots (s - p_N)}$$
Is factorised and rewrite as a ratio of products:
$$ 
= K \frac{\prod{}^M_{t=1}s-z_t}{\prod{}^N_{t=1}s-p_t}
$$
### Real system as real
$$ M \le N $$
Where the numerator i a $M$th order polynomial with coefficients $b$s and the denominator is a $N$th order polynomial with coefficients $a$s. For a system to be real, the order of the numerator polynomial must be no greater than the order of the denominator polynomial, ie: $M \le N$.

### Zero Definition
Roots z of the numerator. When $s =$ any $z$, $H(s)=0$ 

### Pole Definition
Poles p of the denominator. When $s =$ any $p$, $H(s)$ approaches $\inf$ 

### Transfer Function Gain
K is the overall transfer function gain. (Coefficient of $s^M$ and $s^N$ is 1.)

### Stable System
A system is considered stable if its impulse response tends to zero or a finite value in the time domain. 

Requires all real components to be negative (on the left hand side of the complex s-plane of a pole-zero plot (left if the imaginary s axis)).

![](img/negative-real-zone.png)

### Components to Response
Real Components $\rArr$ Exponential Response $\vert$ Imaginary $\rArr$ angular frequency of oscillating responses.


</div>

<div class="equations">

## 4 - Analog Frequency Response


### Frequency Response
Frequency response of a system = output in response to sinusoid input of unit magnitude and specified frequency, $\omega{}$. Response is measured as **magnitude** and **phase angle**.

### Continuous Fourier Transform
$$  F(jw) = \int{}^{\infty}_{t=0} \,f(t) \, e^{-j\omega{}t} \, dt$$

Laplace transform evaluated on the imaginary s-axis at some frequency $s = j\omega{}$.

$\omega{}=$ radial frequency, $\frac{rad}{s}$

### Inverse Fourier Transform
$$  f(t) = \frac{1}{2\pi} \int{}^{\infty}_{\omega{}=-\infty} \, F(j\omega{}) \, e^{j\omega{}t} \, d\omega{}$$

### Magnitude of Frequency Response (MFR) $\vert H(j\omega{})\vert$ 
$$\left \vert H(j\omega ) \right \vert = \left \vert K \right \vert \frac{\prod _{i=1}^{M} \left \vert j\omega -z_i \right \vert}{\prod _{i=1}^{N} \left \vert j\omega -p_i \right \vert}$$



In words, the **magnitude** of the frequency response (MFR) $\vert H(j\omega{}) \bar$  is equal
to the **gain** multiplied by the **magnitudes** of the **vectors** corresponding to the **zeros**,
divided by the **magnitudes** of the vectors corresponding to the **poles**.

### Phase Angle of Frequency Response (PAFR) $\angle H(j\omega)$ - $K > 0$
$$ \angle H(j\omega) = \sum _{i=1}^{M}\angle(j\omega -z_i) - \sum _{i=1}^{N}\angle(j\omega -p_i) $$

### Phase Angle of Frequency Response (PAFR) $\angle H(j\omega)$ - $K < 0$
$$ \angle H(j\omega) = \sum _{i=1}^{M}\angle(j\omega -z_i) - \sum _{i=1}^{N}\angle(j\omega -p_i) + \pi$$


In words, the **phase angle** of the frequency response (**PAFR**) $\angle H(j\omega)$ is
equal to the **sum** of the **phases** of the vectors corresponding to the **zeros**, **minus** the
**sum** of the phases of the vectors correspond to the **poles**, plus $\pi$ if the gain is **negative**.

Each phase vector is measured from the **positive** real s-axis (or a line parallel to the
real s-axis if the pole or zero is not on the real s-axis).


</div>

<div class="equations">

## 5 - Analog Filter Design

### Ideal Filters
Each ideal filter has unambiguous **pass bands**, which are ranges of frequencies that pass through the system without distortion, and **stop bands**, which are ranges of frequencies that are rejected and do not pass through the system without significant loss of signal strength. The **transition** band between stop and pass bands in ideal filters has a size of 0; transitions occur at single frequencies.

![](img/ideal-filters.png)

### Realisability
System starts to respond to input before input is applied. Non-zero for $t<0$.

### Causality
Output depends only on past and current inputs, not future inputs.

### Realising Filters
Realise as we seek smooth behaviour.

- Drop $h_i(t)$ for $t < 0$ ($h_i(t) u(t)$) 
  - Would not get suitable behaviour in frequency domain, as discarded 50% of system energy
- But can tolerate delays
  - So shift sinc to the right
  - Time domain shift = scaling by complex exponential in laplace
  - True in fourier transform, so delay in *time* maintains *magnitude* but changes *phase* of frequency response
- Truncate
  - As can't wait for infinity, so truncate impulse response. 
- 
![](img/realising-filter.png)


### Gain $G_{dB}$ (linear $\rightarrow$ dB)
$$ G_{dB} = 20 \, log_{10}(G_{linear})$$

### Gain $G_{linear}$ (dB $\rightarrow$ linear)
$$ G_{linear} = 10 ^{\frac{G_{dB}}{20}}$$


### Transfer Function of Nth Order Butterworth Low Pass Filter
$$ H(s) = \frac{\omega_{c}^{N}}{\prod _{n=1}^{N}(s-p_n)} $$

Butterworth = Maximally flat in pass band (freq response magnitudes are flat as possible for given order)

- $p_n$ = nth pole
  -  = $j\omega{}_ce^{\frac{j\pi}{2N}(2n-1)}$
  -  = $-\omega{}_c\,sin(\frac{\pi(2n-1)}{2N}) + j\omega_c \, cos(\frac{\pi(2n-1)}{2N})$
  -  Form semi-circle to left of imaginary s-axis
-  $\omega{}_c$ = **half-power cut-off frequency**
   -  Frequency where filter gain is $G_{linear} = \frac{1}{\sqrt{2}}$ or $G_{dB} = - 3dB$

### Frequency Response of common Low pass Butterworth filter
$$ H(j\omega) = \frac{1}{\sqrt{1 + (\frac{w}{w_c})^{2N}}} $$

Increasing order improves approximation of ideal behaviour
![](img/butterworth-lowpass-orders.png)

### Normalised Frequency Response of common Low pass Butterworth filter
$$ H(j\omega) = \frac{1}{\sqrt{1 + w^{2N}}} $$

To convert *normalised frequency* form to *non-normalised* = multiply $\omega$ by the actual $\omega_c$ 


### Minimum Order for Low Pass Butterworth
$$N = \left \lceil \frac{log(\frac{10^{-\frac{G_s}{10}}-1}{10^{-\frac{G_p}{10}}-1})}{2\,log(\frac{\omega_s}{\omega_p})} \right \rceil$$

Round up as want to **over-satisfy** not **under-satisfy**


### Low pass Butterworth Cut-off frequency $\omega_c$ (Pass)
$$ \omega_c = \frac{\omega_p}{(10^{-\frac{G_p}{10}}-1)^\frac{1}{2N}} $$

Gain in dB
### Low pass Butterworth Cut-off frequency $\omega_c$ (Stop)
$$ \omega_c = \frac{\omega_s}{(10^{-\frac{G_s}{10}}-1)^\frac{1}{2N}}$$

Gain in dB


</div>



<div class="equations">

## 6 - Periodic Analogue Functions


</div>
<div class="equations">

## 7 - Computing with Analogue Signals


</div>

<div class="equations">

## 8 - Signal Conversion between Analog and Digital


</div>
<div class="equations">

## 9 - Z-Transforms and LSI Systems


</div>

<div class="equations">

## 10 - Stability of Digital Systems


</div>
<div class="equations">

## 11 - Digital Frequency Response


</div>

<div class="equations">

## 12 - Filter Difference equations and Impulse responses


</div>
<div class="equations">

## 13 - FIR Digital Filter Design


</div>

<div class="equations">

## 14 - Discrete fourier transform and FFT


</div>
<div class="equations">

## 15 - Computing Digital Signals


</div>

<div class="equations">

## 16 - Digital vs Analogue Recap


</div>
<div class="equations">

## 17 - Probabilities and random signals


</div>

<div class="equations">

## 18 - Signal estimation


</div>
<div class="equations">

## 19 - Correlation and Power spectral density


</div>

<div class="equations">

## 20 - Image Processing


</div>
