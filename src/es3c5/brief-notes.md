# Brief Notes + Equations
This is just a collection of notes for ES3C5 Signal Processing that I have found useful to have on hand and easily accessible.

The notes made by Adam (MO) cover everything so this is just intended to be an easy to search document.

Download [lecture notes here](https://moodle.warwick.ac.uk/mod/resource/view.php?id=1673561)

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
| [Frequency Response of common Low pass Butterworth filter](#frequency-response-of-common-low-pass-butterworth-filter)                       | $|H(j\omega)| = \frac{1}{sqrt{1 + (\frac{w}{w_c})^{2N}}}$                                                                              |
| [Normalised Frequency Response of common Low pass Butterworth filter](#normalised-frequency-response-of-common-low-pass-butterworth-filter) | $|H(j\omega)| = \frac{1}{sqrt{1 + w^{2N}}}$                                                                                            |
| [Minimum Order for Low Pass Butterworth](#minimum-order-for-low-pass-butterworth)                                                           | $N = \left \lceil \frac{log(\frac{10^{-\frac{G_s}{10}}-1}{10^{-\frac{G_p}{10}}-1})}{2,log(\frac{\omega_s}{\omega_p})} \right \rceil$ |
| [Low pass Butterworth Cut-off frequency $\omega_c$ (Pass)](#low-pass-butterworth-cut-off-frequency-omega_c-pass)                            | $\omega_c = \frac{\omega_p}{(10^{-\frac{G_p}{10}}-1)^\frac{1}{2N}}$                                                                  |
| [Low pass Butterworth Cut-off frequency $\omega_c$ (Stop)](#low-pass-butterworth-cut-off-frequency-omega_c-stop)                            | $\omega_c = \frac{\omega_s}{(10^{-\frac{G_s}{10}}-1)^\frac{1}{2N}}$                                                                  |

| [6 - Periodic Analogue Functions](#6---periodic-analogue-functions)                                                                         |                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [Exponential Representation from  Trigonometric representation](#exponential-representation-from--trigonometric-representation)             | $e^{jx} = \cos x + j\sin x$                                                                         |
| [Trigonometric from exponential - Real (cos)](#trigonometric-from-exponential---real-cos)                                                   | $\cos x = Re{e^{jx}} = \frac{e^{jx} + e^{-jx}}{2}$                                                  |
| [Trigonometric from exponential - Imaginary (cos)](#trigonometric-from-exponential---imaginary-cos)                                         | $\sin x = Im{e^{jx}} = \frac{e^{jx} + e^{-jx}}{2j}$                                                 |
| [Fourier Series](#fourier-series)                                                                                                           | $x(t) = \sum_{k=-\infty}^{\infty}X_ke^{jk\omega_0t}$                                                |
| [Fourier Coefficients](#fourier-coefficients)                                                                                               | $X_k = \frac{1}{T_0} \int_{T_0}x(t)e^{-jk\omega_0t}dt$                                              |
| [Fourier Series of Periodic Square Wave (Example)](#fourier-series-of-periodic-square-wave-example)                                         | $x(t) = \sum_{k=-\infty }^{\infty} \frac{A\tau}{T_0} sinc(k\omega_0\frac{\tau}{2}) e^{jk\omega_0t}$ |
| [Output of LTI system from Signal with multiple frequency components](#output-of-lti-system-from-signal-with-multiple-frequency-components) | $y(t) = \sum_{k=-\infty }^{\infty} H(jk\omega_0) X_k e^{jk\omega_0t}$                               |
| [Filtering Periodic Signal (Example 6.2)](#filtering-periodic-signal-example-62)                                                            | See example 6.2 below...                                                                            |

| [7 - Computing with Analogue Signals](#7---computing-with-analogue-signals) |     |
| --------------------------------------------------------------------------- | --- |

| [8 - Signal Conversion between Analog and Digital](#8---signal-conversion-between-analog-and-digital) |                                                                                     |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [Digital Signal Processing Workflow](#digital-signal-processing-workflow)                             | See diagram:                                                                        |
| [Sampling](#sampling)                                                                                 | Convert signal from continuous-time to discrete-time. Record amplitude of the an... |
| [Oversample](#oversample)                                                                             | Sample too often, use more complexity, wasting energy                               |
| [Undersample](#undersample)                                                                           | Not sampling often enough, get                                                      |
| [Aliasing](#aliasing)                                                                                 | Multiple signals of different frequencies yield the same data when sampled.         |
| [Nyquist Rate](#nyquist-rate)                                                                         | $\omega_s = 2\omega_B$                                                              |
| [Quantisation](#quantisation)                                                                         | The mapping of                                                                      |
| [Data Interpolation](#data-interpolation)                                                             | Convert digital signal back to analogue domain, reconstruct continous signal fro... |
| [Hold Circuit](#hold-circuit)                                                                         | Simplest interpolation in a DAC, where amplitude of continuous-time signal match... |
| [Resolution](#resolution)                                                                             | $\frac{1}{2^W} \times 100%$                                                         |
| [Dynamic range](#dynamic-range)                                                                       | $,20log_{10}2^W \approx 6WdB$                                                       |

| [9 - Z-Transforms and LSI Systems](#9---z-transforms-and-lsi-systems)                                 |                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [LSI Rules](#lsi-rules)                                                                               | Linear Shift-Invariant                                                                                                           |
| [Common Components of LSI Systems](#common-components-of-lsi-systems)                                 | For digital systems, only need 3 types of LSI circuit components.                                                                |
| [Discrete Time Impulse Function](#discrete-time-impulse-function)                                     | Impulse response is very similar in digital domain, as it is the system output w...                                              |
| [Impulse Response Sequence](#impulse-response-sequence)                                               | $h[n] = \mathcal{F}{\delta[n]}$                                                                                                  |
| [LSI Output](#lsi-output)                                                                             | $y[n] = \sum _{k=-\infty}^{\infty}x[k]h[n-k] = x[n] *h[n] = h[n]*x[n]$                                                           |
| [Z-Transform](#z-transform)                                                                           | $\mathcal{Z}{f[n]} = F(z) = \sum _{k=0}^{\infty}f[k]z^{-k}$                                                                      |
| [Z-Transform Examples](#z-transform-examples)                                                         | Simple examples...                                                                                                               |
| [Binomial Theorem for Inverse Z-Transform](#binomial-theorem-for-inverse-z-transform)                 | $\sum _{n=0}^{\infty} a^n = \frac{1}{1-a}$                                                                                       |
| [Z-Transform Properties](#z-transform-properties)                                                     | Linearity, Time Shifting and Convolution                                                                                         |
| [Sample Pairs](#sample-pairs)                                                                         | See example                                                                                                                      |
| [Z-Transform of Output Signal](#z-transform-of-output-signal)                                         | $Y(z) = \mathcal{Z}{y[n]} = \mathcal{Z}{x[n]*h[n]} = \mathcal{Z}{x[n]}\mathcal{Z}{h[n]} = X(z)H(z) \Rightarrow Y(z) = X(z) H(z)$ |
| [Finding time-domain output $y[n]$ of an LSI System](#finding-time-domain-output-yn-of-an-lsi-system) | Transform, product, inverse.                                                                                                     |
| [Difference Equation](#difference-equation)                                                           | Time domain output $y[n]$ directly as a function of time-domain input $x[n]$ as ...                                              |
| [Z-Transform Table](#z-transform-table)                                                               | See table...                                                                                                                     |

| [10 - Stability of Digital Systems](#10---stability-of-digital-systems)                               |                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [Z-Domain Transfer Function](#z-domain-transfer-function)                                             | $H(z) = \frac{b[M]z^{-M} + b[M-1]z^{1-M}+\cdots + b[1]z^{-1}+b[0]}{a[N]z^{-N} + a[N-1]z^{1-N}+\cdots + a[1]z^{-1}+1}$            |
| [General Difference Equation](#general-difference-equation)                                           | $y[n] = \sum_{k=0}^{M}b[k]x[n-k] - \sum_{k=0}^{N}a[k]y[n-k]$                                                                     |
| [Poles and Zeros of Transfer Function](#poles-and-zeros-of-transfer-function)                         | $H(z) = K\frac{(z-z_1)(z-z_2)\cdots (z-z_M)}{(z-p_1)(z-p_2)\cdots (z-p_M)} = K\frac{\prod_{i=1}^{M}z-z_i}{\prod_{i=1}^{N}z-p_i}$ |
| [Bounded Input and Bounded Output (BIBO) Stability](#bounded-input-and-bounded-output-bibo-stability) | Stable if bounded input sequence yields bounded output sequence.                                                                 |

| [11 - Digital Frequency Response](#11---digital-frequency-response)                                                                         |                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [LSI Frequency Response](#lsi-frequency-response)                                                                                           | Output in response to a sinusoid input of unit magnitude and some specified freq...                                                                                                                   |
| [Discrete-Time Fourier Transform (DTFT) - Digital Frequency Response](#discrete-time-fourier-transform-dtft---digital-frequency-response)   | $F(e^{j\Omega}) = F(\Omega) = \sum _{k=0}^{\infty}f[k]e^{-jk\Omega}$                                                                                                                                  |
| [Inverse Discrete-Time Fourier Transform (Inverse DTFT)](#inverse-discrete-time-fourier-transform-inverse-dtft)                             | $f[k] = \frac{1}{2\pi}\int_{-\pi}^{\pi}F(e^{j\Omega})e^{jk\Omega}d\Omega$                                                                                                                             |
| [LSI Transfer Function](#lsi-transfer-function)                                                                                             | $H(e^{j\Omega}) = K\frac{\prod_{i=1}^{M}e^{j\Omega}-z_i}{\prod_{i=1}^{N}e^{j\Omega}-p_i}$                                                                                                             |
| [Magnitude of Frequency Response (MFR) $\vert H(e^{j\Omega}) \vert$](#magnitude-of-frequency-response-mfr-vert-hejomega-vert)               | $\left \vert H(e^{j\Omega} ) \right \vert = \left \vert K \right \vert \frac{\prod _{i=1}^{M} \left \vert e^{j\Omega} -z_i \right \vert}{\prod _{i=1}^{N} \left \vert e^{j\Omega} -p_i \right \vert}$ |
| [Phase Angle of Frequency Response (PAFR) $\angle H(e^{j\Omega})$ - $K > 0$](#phase-angle-of-frequency-response-pafr-angle-hejomega---k--0) | $\angle H(e^{j\Omega}) = \sum _{i=1}^{M}\angle(e^{j\Omega} -z_i) - \sum _{i=1}^{N}\angle(e^{j\Omega} -p_i)$                                                                                           |
| [Example 11.1 - Simple Digital High Pass Filter](#example-111---simple-digital-high-pass-filter)                                            | See image...                                                                                                                                                                                          |

| [12 - Filter Difference equations and Impulse responses](#12---filter-difference-equations-and-impulse-responses)    |                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [Z-Domain Transfer Function](#z-domain-transfer-function-1)                                                          | $H(z) = \frac{b[M]z^{-M} + b[M-1]z^{1-M}+\cdots + b[1]z^{-1}+b[0]}{a[N]z^{-N} + a[N-1]z^{1-N}+\cdots + a[1]z^{-1}+1}$ |
| [General Difference Equation](#general-difference-equation-1)                                                        | $y[n] = \sum_{k=0}^{M}b[k]x[n-k] - \sum_{k=0}^{N}a[k]y[n-k]$                                                          |
| [Example 12.1 Proof y[n] can be obtained directly from H[z]](#example-121-proof-yn-can-be-obtained-directly-from-hz) | See image...                                                                                                          |
| [Order of a filter](#order-of-a-filter)                                                                              | $order = max(N,M)$                                                                                                    |
| [Taps in a filter](#taps-in-a-filter)                                                                                | Minimum number of unit delay blocks required. Equal to the order of the filter.                                       |
| [Example 12.2 Filter Order and Taps](#example-122-filter-order-and-taps)                                             | See example...                                                                                                        |
| [Tabular Method for Difference Equations](#tabular-method-for-difference-equations)                                  | Given a difference equation, and its input x[n], can write specific output y[n] ...                                   |
| [Example 12.3 Tabular Method Example](#example-123-tabular-method-example)                                           | See example                                                                                                           |
| [Infinite Impulse Response (IIR) Filters](#infinite-impulse-response-iir-filters)                                    | IIR filters have                                                                                                      |
| [Example 12.4 IIR Filter](#example-124-iir-filter)                                                                   | See example                                                                                                           |
| [Finite Impulse Response (FIR) Filters](#finite-impulse-response-fir-filters)                                        | FIR Filter are none recursive (ie, no feedback components), so a[k] = 0 for k!=0...                                   |
| [FIR Difference Equation](#fir-difference-equation)                                                                  | $y[n] = \sum_{k=0}^{M}b[k]x[n-k]$                                                                                     |
| [FIR Transfer function](#fir-transfer-function)                                                                      | $H(z) = b[M]z^{-M} + b[M-1]z^{1-M}+\cdots + b[1]z^{-1}+b[0]$                                                          |
| [FIR Transfer Function - Roots](#fir-transfer-function---roots)                                                      | $H(z) = \frac{b[M] + b[M-1]z+\cdots + b[1]z^{M-1}+b[0]z^M}{z^M} = K \frac{\prod_{k=0}^{M}(z-z_k)}{z^M}$               |
| [FIR Stability](#fir-stability)                                                                                      | FIR FILTERS ARE ALWAYS STABLE. As in transfer function, all M poles are all on t...                                   |
| [FIR Linear Phase Response](#fir-linear-phase-response)                                                              | Often have a linear phase response. The phase shift at the output corresponds to...                                   |
| [FIR Filter Example](#fir-filter-example)                                                                            | See example 12.5                                                                                                      |
| [Ideal Digital Filters](#ideal-digital-filters)                                                                      | Four main types of filter magnitude responses (defined over $0 \le \Omega \le \p...$                                  |
| [Realising Ideal Digital Filters](#realising-ideal-digital-filters)                                                  | Use poles and zeros to create simple filters. Only need to consider response ove...                                   |
| [Example 12.6 - Simple High Pass Filter Design](#example-126---simple-high-pass-filter-design)                       | See diagram                                                                                                           |

| [13 - FIR Digital Filter Design](#13---fir-digital-filter-design)                        |                                                                                     |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [Discrete Time Radial Frequency](#discrete-time-radial-frequency)                        | $\Omega = \frac{\omega}{f_s} = \frac{2\pi f}{f_s}$                                  |
| [Realising Ideal Digital Filter](#realising-ideal-digital-filter)                        | Aim is to get as close as possible to                                               |
| [Practical Digital Filters](#practical-digital-filters)                                  | Good digital low pass filter will try to realise the (unrealisable) ideal respon... |
| [Windowing](#windowing)                                                                  | Window Method - design process: start with ideal $h_i[n]$ and windowing infinite... |
| [Windowing Criteria](#windowing-criteria)                                                |                                                                                     |
| [Practical FIR Filter Design Example 13.2](#practical-fir-filter-design-example-132)     | See example...                                                                      |
| [Specification for FIR Filters Example 13.3](#specification-for-fir-filters-example-133) | See example...                                                                      |

| [14 - Discrete Fourier Transform and FFT](#14---discrete-fourier-transform-and-fft) |                                                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [Discrete Fourier Transform DFT](#discrete-fourier-transform-dft)                   | $X[k] = \sum_{n=0}^{N-1}x[n]e^{-jnk\frac{2\pi}{N}}$                                                         |
| [Inverse DFT](#inverse-dft)                                                         | $x[n] = \frac{1}{N}\sum_{k=0}^{N-1}X[k]e^{jnk\frac{2\pi}{N}}, \quad n=\left { 0,1,2, \cdots , N-1 \right }$ |
| [Example 14.1 DFT of Sinusoid](#example-141-dft-of-sinusoid)                        | See example                                                                                                 |
| [Zero Padding](#zero-padding)                                                       | Artificially increase the length of the time domain signal $x[n]$ by adding zero...                         |
| [Example 14.2 Effect of Zero Padding](#example-142-effect-of-zero-padding)          | See example                                                                                                 |
| [Fast Fourier Transform FFT](#fast-fourier-transform-fft)                           | Family of alogrithms that evaluate DFT with complexity of $O(N log_2 N)$ compare...                         |

| [15 - Computing Digital Signals](#15---computing-digital-signals) |     |
| ----------------------------------------------------------------- | --- |

| [16 - Digital vs Analogue Recap](#16---digital-vs-analogue-recap)                                               |                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [Aperiodic (simple periodic) continuous-time signal f(t)](#aperiodic-simple-periodic-continuous-time-signal-ft) | Laplace, fourier transform.                                                         |
| [More Complex Continuous-time signal f(t)](#more-complex-continuous-time-signal-ft)                             | Fourier series, multiples of fundamental, samples of frequency response.            |
| [Discrete-time signal f[n] (infinite length)](#discrete-time-signal-fn-infinite-length)                         | Z-Domain, Discrete-time fourier transform                                           |
| [Discrete-time signal f[n] (finite length)](#discrete-time-signal-fn-finite-length)                             | Finite Length N, convert to frequency domain (DFT), N points distributed over 2 ... |
| [Stability](#stability)                                                                                         | S-domain: negative real component, Z domain: poles within unit circle.              |
| [Bi-Linearity](#bi-linearity)                                                                                   | Not core module content.                                                            |

| [17 - Probabilities and random signals](#17---probabilities-and-random-signals)                                                     |                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [Random Variable](#random-variable)                                                                                                 | A quantity that takes a non-deterministic values (ie we don't know what the valu...                  |
| [Probability Distribution](#probability-distribution)                                                                               | Defines the probability that a random variable will take some value.                                 |
| [Probability Density Function (PDF) - Continuous random variables](#probability-density-function-pdf---continuous-random-variables) | $\int_{x=x_{min}}^{x_{max}} p(x)dx = 1$                                                              |
| [Probability mass function (PMF) - Discrete random variables](#probability-mass-function-pmf---discrete-random-variables)           | $\sum_{x=x_{min}}^{x_{max}} p(x) = 1$                                                                |
| [Moments](#moments)                                                                                                                 | $E[X^n] = \sum_{x=x_{min}}^{x_{max}}x^np(x)\quad \quad E[X^n] = \int_{x=x_{min}}^{x_{max}}x^np(x)dx$ |
| [Uniform Distribution](#uniform-distribution)                                                                                       | Equal probability for a random variable to take any value in its domain, ie over...                  |
| [Bernoulli](#bernoulli)                                                                                                             | Discrete probability distribution with only 2 possible values (yes no, 1 0, etc)...                  |
| [Gaussian (Normal) Distribution](#gaussian-normal-distribution)                                                                     | Continuous probability distribution over $(-\infty,\infty)$, where values closer...                  |
| [Central Limit Theorem (CLT)](#central-limit-theorem-clt)                                                                           | Sum of independent random variables can be approximated with Gaussian distributi...                  |
| [Independent Random Variables](#independent-random-variables)                                                                       | No dependency on each other (i.e., if knowing the value of one random variable g...                  |
| [Empirical Distributions](#empirical-distributions)                                                                                 | Scaled histogram by total number of samples.                                                         |
| [Random Signals](#random-signals)                                                                                                   | Random variables can appear in signals in different ways, eg:                                        |

| [18 - Signal estimation](#18---signal-estimation)                         |                                                                                     |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [Signal Estimation](#signal-estimation)                                   | Signal estimation, refers to estimating the values of parameters embedded in a s... |
| [Linear Model](#linear-model)                                             | See equation                                                                        |
| [Generalised Linear From](#generalised-linear-from)                       | See equation                                                                        |
| [Optimal estimate](#optimal-estimate)                                     | See equation                                                                        |
| [Predicted estimate](#predicted-estimate)                                 | See equation                                                                        |
| [Observation Matrix $\Theta$](#observation-matrix-theta)                  | See below                                                                           |
| [Mean Square Error (MSE)](#mean-square-error-mse)                         | See equation                                                                        |
| [Example 18.1](#example-181)                                              | See example                                                                         |
| [Example 18.2](#example-182)                                              | See example                                                                         |
| [Linear Regression](#linear-regression)                                   | $theta = Obs\setminus  y$                                                           |
| [Weighted Least Squares Estimate](#weighted-least-squares-estimate)       | Weighted least squares, includes a weight matrix W, where each sample associated... |
| [Maximum Likelihood Estimation (MLE)](#maximum-likelihood-estimation-mle) | See equation                                                                        |

| [19 - Correlation and Power spectral density](#19---correlation-and-power-spectral-density) |                                                                                |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [Correlation](#correlation)                                                                 | Correlation gives a measure of time-domain similarity between two signals.     |
| [Cross Correlation](#cross-correlation)                                                     | $R_{x_1x_2}[k] \approx \frac{1}{N-k} \sum_{n=0}^{N-k} x_1[n] x_2[k+n]$         |
| [Example 19.1 - Discrete Cross-Correlation](#example-191---discrete-cross-correlation)      | See example                                                                    |
| [Autocorrelation](#autocorrelation)                                                         | Correlation of a signal with itself, ie $x_2[n] = x_1[n]$ or $x_2(t) = x_1(t)$ |
| [Example 19.2 - Discrete Autocorrelation](#example-192---discrete-autocorrelation)          | See example                                                                    |
| [Example 19.3 - Correlation in MATLAB](#example-193---correlation-in-matlab)                | See example                                                                    |

| [20 - Image Processing](#20---image-processing)                                                |                                                                                |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [Types of colour encoding](#types-of-colour-encoding)                                          | Binary (0, 1), Indexed (colour map), Greyscale (range 0->1), True Colour (RGB) |
| [Notation](#notation)                                                                          | See below                                                                      |
| [Digital Convolution](#digital-convolution)                                                    | $y[n] = \sum_{k=-\infty}^{\infty} x[k]h[n-k] = x[n] * h[n] = h[n] * x[n]$      |
| [Example 20.1 - 1D Discrete Convolution](#example-201---1d-discrete-convolution)               | See example                                                                    |
| [Example 20.2 - Visual 1D Discrete Convolution](#example-202---visual-1d-discrete-convolution) | See example                                                                    |
| [Image Filtering](#image-filtering)                                                            | Determine output y[i][j] from input x[i][j] through filter (kernel) h[i][j]    |
| [Edge Handling](#edge-handling)                                                                | Zero-padding and replicating                                                   |
| [Kernels](#kernels)                                                                            | Different types of kernels.                                                    |
| [Example 20.3 - Image Filtering](#example-203---image-filtering)                               | See example                                                                    |

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



In words, the **magnitude** of the frequency response (MFR) $\vert H(j\omega{}) \vert$  is equal
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

### Exponential Representation from  Trigonometric representation
$$ e^{jx} = \cos x + j\sin x $$

### Trigonometric from exponential - Real (cos)
$$ \cos x = Re\{e^{jx}\} = \frac{e^{jx} + e^{-jx}}{2}$$

### Trigonometric from exponential - Imaginary (cos)
$$ \sin x = Im\{e^{jx}\} = \frac{e^{jx} + e^{-jx}}{2j}$$

### Fourier Series
$$ x(t) = \sum_{k=-\infty}^{\infty}X_ke^{jk\omega_0t} $$
Period signal = sum of complex exponentials.

Fundamental frequency $f_0$, such that all frequencies in signal are multiples of $f_0$.

Fundamental period $T_0 = 1/f_0$

$w_0 = 2\pi f_0 = 2\pi / T_0$

Fourier spectra **only** exist at **harmonic frequencies** (ie integer multiples of fundamental frequency)

### Fourier Coefficients
$$ X_k = \frac{1}{T_0} \int_{T_0}x(t)e^{-jk\omega_0t}dt$$

Important property of Fourier series is how is represents **real** signals $x(t)$.
- **Even** magnitude spectrum  $\rightarrow \vert X_k \vert = \vert X_{-k} \vert$
- **Odd** phase spectrum = $\rightarrow \angle X_k = -\angle X_{-k}$

### Fourier Series of Periodic Square Wave (Example)
$$ x(t) = \sum_{k=-\infty }^{\infty} \frac{A\tau}{T_0} sinc(k\omega_0\frac{\tau}{2}) e^{jk\omega_0t} $$

Where $X_k = \frac{A\tau}{T_0} sinc(k\omega_0\frac{\tau}{2})$

![](img/6.2-fourier-series-peridodic-square.png)

### Output of LTI system from Signal with multiple frequency components
$$ y(t) = \sum_{k=-\infty }^{\infty} H(jk\omega_0) X_k e^{jk\omega_0t} $$

Or in other words:

$$ Y_k = H(jk\omega_0)X_k$$

The output of an LTI system due to a signal with multiple frequency components can be found by superposition of the outputs due to the individual frequency components.
IE  system will change amplitude and phase of each frequency in the input.

### Filtering Periodic Signal (Example 6.2)
See example 6.2 below...

![](img/6.2-example.png)

![](img/6.2-example-diagrams.png)

</div>
<div class="equations">

## 7 - Computing with Analogue Signals
***This topic isn't examined as it is MATLAB***

</div>

<div class="equations">

## 8 - Signal Conversion between Analog and Digital

### Digital Signal Processing Workflow

See diagram:

![](img/8.1-digital-sig-proc-workflow.png)

- Low pass filter applied to time-domain input signal $x(t)$ to limit frequencies
- An **analogue-to-digital converter** (ADC) samples and quantises the continuous time analogue signal to convert it to discrete time digital signal $x[n]$.
- Digital signal processing (DSP) performs operations required and generates output signal $y[n]$.
- A **digital-to-analogue converter** (DAC) uses hold operations to reconstruct an analogue signal from $y[n]$
- An output low pass filter removes high frequency components introduced by the DAC operation to give the final output $y(t)$.

### Sampling
Convert signal from continuous-time to discrete-time. Record amplitude of the analogue signal at specified times. 
Usually sampling period is fixed.

### Oversample
Sample too often, use more complexity, wasting energy

### Undersample
Not sampling often enough, get **aliasing** of our signal (multiple signals of different frequencies yield the same data when sampled.)

### Aliasing
Multiple signals of different frequencies yield the same data when sampled.

![](img/8.3-aliasing-time-domain.png)

If we sample the **black** sinusoid at the times indicated with the **blue** marker, it could be mistaken for the red dashed sinusoid. This happens when *under-sampling*, and the lower signal is called the alias. The alias makes it **impossible** to recover the original data.

### Nyquist Rate
$$\omega_s = 2\omega_B$$

Minimum ant-aliasing sampling Frequency.

Frequencies above this $\omega_s \ge 2\omega_B$ remain *distinguishable*. 


### Quantisation
The mapping of **continuous** amplitude levels to a **binary** representation.

IE: $W$ bits then there are $2^W$ quantisation levels. ADC Word length $= W$.

Continuous amplitude levels are *approximated* to the nearest level (rounding). Resulting error between nearest level and actual level = **quantisation noise**

![](img/8.5-quantisation.png)


### Data Interpolation
Convert digital signal back to analogue domain, reconstruct continous signal from discrete time series of points.

### Hold Circuit
Simplest interpolation in a DAC, where amplitude of continuous-time signal matches that of the previous discrete time signal.

IE: *Hold* amplitude until the next discrete time value. Produces staircase like output.

![](img/8.6-hold-circuit.png)

### Resolution
$$ \frac{1}{2^W} \times 100\% $$

Space between levels, often represented as a **percentage**.

For $W$-bit DAC, with uniform levels

### Dynamic range
$$ \,20log_{10}2^W \approx 6WdB$$

Range of signal amplitudes that a DAC can resolve between its smallest and largest (undistorted) values.

</div>
<div class="equations">

## 9 - Z-Transforms and LSI Systems

### LSI Rules
Linear Shift-Invariant

![](img/9.1-LSI-rules.png)

### Common Components of LSI Systems
For digital systems, only need 3 types of LSI circuit components.

![](img/9.1-common-lsi-components.png)

1. A multiplier **scales** the current input by a constant, i.e., $y [n] = b [1] x [n]$.
2. An adder outputs the **sum** of two or more inputs, e.g., $y [n] = x_1 [n] + x_2 [n]$.
3. A unit delay imposes a **delay** of one sample on the input, i.e, $y [n] = x [n - 1]$.


### Discrete Time Impulse Function
Impulse response is very similar in digital domain, as it is the system output when the input is an impulse.

### Impulse Response Sequence
$$ h[n] = \mathcal{F}\{\delta[n]\}$$

### LSI Output
$$y[n] = \sum _{k=-\infty}^{\infty}x[k]h[n-k] = x[n] *h[n] = h[n]*x[n]  $$

**Discrete Convolution** of input signal with the impulse response.

### Z-Transform
$$ \mathcal{Z}\{f[n]\} = F(z) = \sum _{k=0}^{\infty}f[k]z^{-k} $$

Converts discrete-time domain function $f[n]$ into complex domain function $F(z)$, in the z-domain
Assume $f[n]$ is causal, ie $f[n]= 0, \forall n < 0$

Discrete time equivalent to Laplace Transform. However can be written by *direct inspection* (as have summation instead of intergral). Inverse equally as simple.

### Z-Transform Examples
Simple examples...

![](img/9.2a-example.png)
![](img/9.2b-example.png)

![](img/9.3-example.png)

### Binomial Theorem for Inverse Z-Transform
$$ \sum _{n=0}^{\infty} a^n = \frac{1}{1-a}$$

Cannot always find inverse Z-tranform by immediate inspection, in particular if the Z-transform is written as a **ratio of polynomials of z**. Can use *Binomial theorem* to convert into single (sometimes infinite length) polynomial of $z$

![](img/9.4a-example.png)
![](img/9.4b-example.png)

### Z-Transform Properties
Linearity, Time Shifting and Convolution

![](img/9.3.1-z-transform-properties.png)

### Sample Pairs
See example

![](img/9.5-example-sample-pairs.png)

### Z-Transform of Output Signal
$$ Y(z) = \mathcal{Z}\{y[n]\} = \mathcal{Z}\{x[n]*h[n]\} = \mathcal{Z}\{x[n]\}\mathcal{Z}\{h[n]\} = X(z)H(z) \Rightarrow Y(z) = X(z) H(z)    $$

Where $H(z)$ = **Pulse Transfer Function** (as it is also the system output when the time-domain input is a unit impulse.) but by convention can refer to $H(z)$ as the **Transfer Function**

### Finding time-domain output $y[n]$ of an LSI System
Transform, product, inverse.

1. Transform $x[n]$ and $h[n]$ into z-domain
2. Find product $Y(z) = X(z)H(z)$ 
3. Taking the inverse Z-transform of $Y(z)$
   
### Difference Equation
Time domain output $y[n]$ directly as a function of time-domain input $x[n]$ as well as *previous* time-domain outputs $x[n-k]$ (ie can be feedback).

![](img/9.7-example.png)

### Z-Transform Table
See table...

![](img/z-transform-a.png)
![](img/z-transform-b.png)

</div>


<div class="equations">

## 10 - Stability of Digital Systems

### Z-Domain Transfer Function
$$H(z) = \frac{b[M]z^{-M} + b[M-1]z^{1-M}+\cdots + b[1]z^{-1}+b[0]}{a[N]z^{-N} + a[N-1]z^{1-N}+\cdots + a[1]z^{-1}+1}$$

**Negative** powers of z.

No constraint on $M$ and $N$to be real (unlike analogue) but often assume $M=N$

### General Difference Equation
$$y[n] = \sum_{k=0}^{M}b[k]x[n-k] - \sum_{k=0}^{N}a[k]y[n-k] $$

### Poles and Zeros of Transfer Function
$$ H(z) = K\frac{(z-z_1)(z-z_2)\cdots (z-z_M)}{(z-p_1)(z-p_2)\cdots (z-p_M)} = K\frac{\prod_{i=1}^{M}z-z_i}{\prod_{i=1}^{N}z-p_i} $$

- Coefficient of each $z$ in this form is 1.
- Poles $p_i$ and zeros $z_i$ carry same meaning as analogue
- Unfortunately symbol for variable $z$ and zeros $z_i$ are very similar (take care)
- Insightful to plot


![](img/10.1-example.png)
![](img/10.1-figure.png)

### Bounded Input and Bounded Output (BIBO) Stability 
Stable if bounded input sequence yields bounded output sequence. 

A system is **BIBO** **stable** if all of the poles lie inside the $\vert z \vert = 1$ unit circle

A system is **Conditionally** stable if there is atleast 1 pole directly on the unit circle.

![](img/10.2-stability.png)

Explanation:
- An input sequence $x [n]$ is bounded if each element in the sequence is smaller than some value $A$. 
- An output sequence $y [n]$ corresponding to $x [n]$ is bounded if each element in the sequence is smaller than some value $B$.

</div>
<div class="equations">

## 11 - Digital Frequency Response

### LSI Frequency Response
Output in response to a sinusoid input of unit magnitude and some specified frequency. Shown in two plots (magnitude and phase) as a function of input frequency.

### Discrete-Time Fourier Transform (DTFT) - Digital Frequency Response
$$F(e^{j\Omega}) = F(\Omega) = \sum _{k=0}^{\infty}f[k]e^{-jk\Omega}$$

Where angle $\Omega$ is the angle of th unit vector measured from the *positive real* $z$-axis. Denotes *digital* radial frequency, measured in **radians per sample** $\frac{rad}{sample}$

$F(e^{j\Omega})$ as **spectrum** of $f[n]$ (frequency response).

Convention of writing DTFT includes $F(e^{j\Omega})$ or simply $F(\Omega)$

**Derivation**: Using Z-Transform Definition. 
$$\mathcal{Z}\{f[n]\} = F(z) = \sum _{k=0}^{\infty}f[k]z^{-k}$$

Let $z$ be polar coords ($z=re^{j\Omega}$), ie magnitude to r, angle $\Omega$. Hence rewrite
$$F(re^{j\Omega}) = \sum _{k=0}^{\infty}f[k]r^{-k}e^{-jk\Omega}$$

Then let $r=1$, so that any point lies on the unit circle.
$$F(e^{j\Omega}) = F(\Omega) = \sum _{k=0}^{\infty}f[k]e^{-jk\Omega}$$

### Inverse Discrete-Time Fourier Transform (Inverse DTFT)
$$ f[k] = \frac{1}{2\pi}\int_{-\pi}^{\pi}F(e^{j\Omega})e^{jk\Omega}d\Omega$$

### LSI Transfer Function
$$ H(e^{j\Omega}) = K\frac{\prod_{i=1}^{M}e^{j\Omega}-z_i}{\prod_{i=1}^{N}e^{j\Omega}-p_i} $$

$H(e^{j\Omega})$ is a function of vectors from the system's poles and zeros to the unit circle at angle $\Omega$.Thus from pole-zero plot, can geometrically determine magnitude and phase of frequency response.

### Magnitude of Frequency Response (MFR) $\vert H(e^{j\Omega}) \vert$ 
$$\left \vert H(e^{j\Omega} ) \right \vert = \left \vert K \right \vert \frac{\prod _{i=1}^{M} \left \vert e^{j\Omega} -z_i \right \vert}{\prod _{i=1}^{N} \left \vert e^{j\Omega} -p_i \right \vert}$$

In words, the **magnitude** of the frequency response (MFR) $\vert H(e^{j\Omega}) \vert$  is equal
to the **gain** multiplied by the **magnitudes** of the **vectors** corresponding to the **zeros**,
divided by the **magnitudes** of the vectors corresponding to the **poles**.

**Repeats** every $2\pi$ as Eulers Formula. Due to symettery of poles and zeros about real $z$-axis, frequency response is symmetric about $\Omega=\pi$, so only need to find over **one interval** of $\pi$

### Phase Angle of Frequency Response (PAFR) $\angle H(e^{j\Omega})$ - $K > 0$
$$ \angle H(e^{j\Omega}) = \sum _{i=1}^{M}\angle(e^{j\Omega} -z_i) - \sum _{i=1}^{N}\angle(e^{j\Omega} -p_i) $$


In words, the **phase angle** of the frequency response (**PAFR**) $\angle H(e^{j\Omega})$ is
equal to the **sum** of the **phases** of the vectors corresponding to the **zeros**, **minus** the
**sum** of the phases of the vectors correspond to the **poles**, plus $\pi$ if the gain is **negative**.

**Repeats** every $2\pi$ as Eulers Formula. Due to symettery of poles and zeros about real $z$-axis, frequency response is symmetric about $\Omega=\pi$, so only need to find over **one interval** of $\pi$

### Example 11.1 - Simple Digital High Pass Filter
See image...

![](img/11.1-example.png)
![](img/11.1-example-figures.png)

</div>

<div class="equations">

## 12 - Filter Difference equations and Impulse responses

### Z-Domain Transfer Function
$$H(z) = \frac{b[M]z^{-M} + b[M-1]z^{1-M}+\cdots + b[1]z^{-1}+b[0]}{a[N]z^{-N} + a[N-1]z^{1-N}+\cdots + a[1]z^{-1}+1}$$

### General Difference Equation
$$y[n] = \sum_{k=0}^{M}b[k]x[n-k] - \sum_{k=0}^{N}a[k]y[n-k] $$

Real coefficients $b[\dot]$ and $a[\dot]$ are the same. (Note $a[0]$ = 1, so no coefficient corresponding to $y[n]$).

Easier to convert directly between transfer function $H(z)$ (with negative powers of z) and the difference equation for output $y[n]$, ideal for *implementation* of the system. (rather than use time-domain impulse response $h[n]$)

### Example 12.1 Proof y[n] can be obtained directly from H[z]
See image...

![](img/12.1-proof.png)

### Order of a filter
$$ order = max(N,M)$$

### Taps in a filter
Minimum number of unit delay blocks required. Equal to the order of the filter.

![](img/12.1-geneal-diff-implementation.png)


### Example 12.2 Filter Order and Taps
See example...

![](img/12.2a-taps.png)
![](img/12.2b-taps.png)

### Tabular Method for Difference Equations
Given a difference equation, and its input x[n], can write specific output y[n] using tabular method.

1. Starting with input $x[n]$, make a **column** for every input and output that appears in difference equation
2. ASsume every output and delayed input is **initially zero** (ie the filter is *causal*, initially no memory, hence system is **quiescent**)
3. Fill in column for $x[n]$ with given system input for all rows needed, and fill in delayed versions of $x[n]$ 
4. **Evaluate** $y[0]$ from inital input, and **propagate** the value of y[0] to delayed outputs (as relavent)
5. **Evaluate** $y[1]$ from $x[\dot]$s and $y[0]$
6. Continue evaluating output and propagating delayed outputs.

Can be alternative method for finding time-domain impulse response $h[n]$

### Example 12.3 Tabular Method Example
See example

![](img/12.1a-example.png)
![](img/12.1b-example.png)

### Infinite Impulse Response (IIR) Filters 
IIR filters have **infinite length** impulse responses because they are **recursive** (ie feedback terms associated with non-zero poles in transfer function, hence $y[n-k]$ exists.)

**Standard** transfer function and difference equation can be used to represent.
$$H(z) = \frac{b[M]z^{-M} + b[M-1]z^{1-M}+\cdots + b[1]z^{-1}+b[0]}{a[N]z^{-N} + a[N-1]z^{1-N}+\cdots + a[1]z^{-1}+1}$$
$$y[n] = \sum_{k=0}^{M}b[k]x[n-k] - \sum_{k=0}^{N}a[k]y[n-k] $$

**Not possible** to have a **linear phase response** (so there are different delays associated with different frequencies, and they are not always stable (depending on the exact locations of poles.))

IIR filters are **more efficient** than FIR designs at controlling **gain** of response.

Although response is *technically infinite*, in practice decays towards zero or can be truncated to zero (assume response is $h[n] = 0$ beyond some value $n$)

### Example 12.4 IIR Filter
See example

![](img/12.4a-example.png)
![](img/12.4b-example.png)

### Finite Impulse Response (FIR) Filters
FIR Filter are none recursive (ie, no feedback components), so a[k] = 0 for k!=0.

Finite in length, and strictly zero beyond that ($h[n] = 0$ for $n \gt M$). Therefore *the number of filter taps dictates the length of an FIR impulse response*

Since there is no feedback, can write impulse response $h[n]$ as:
$$ h[n] = b[n] $$

### FIR Difference Equation
$$y[n] = \sum_{k=0}^{M}b[k]x[n-k] $$

### FIR Transfer function
$$H(z) = b[M]z^{-M} + b[M-1]z^{1-M}+\cdots + b[1]z^{-1}+b[0]$$

Simplified from general differernce equation tranfer function. 

### FIR Transfer Function - Roots
$$H(z) = \frac{b[M] + b[M-1]z+\cdots + b[1]z^{M-1}+b[0]z^M}{z^M} = K \frac{\prod_{k=0}^{M}(z-z_k)}{z^M}$$ 

More convenient to work with positive powers of z, so multiply top and bottom by $z^M$ then factor.

### FIR Stability
FIR FILTERS ARE ALWAYS STABLE. As in transfer function, all M poles are all on the origin (z =0) and so always in the unit circle.

### FIR Linear Phase Response
Often have a linear phase response. The phase shift at the output corresponds to a time delay.

### FIR Filter Example
See example 12.5

![](img/12.5a-example.png)
![](img/12.5b-example.png)

### Ideal Digital Filters
Four main types of filter magnitude responses (defined over $0 \le \Omega \le \pi$, mirrored over $\pi \le \Omega \lt 2\pi$ and repeated every $2\pi$)

- **Low Pass** - pass frequencies less than cut-off frequency $\Omega_c$ and reject frequencies greater.
- **High Pass** - rejects frequencies less than cut-off frequency $\Omega_c$ and pass frequencies greater.
- **Band Pass** - Passes frequency within specified range, ie between $\Omega_1$ and $\Omega_2$, and reject frequencies that are either below or above the band within $[0,\pi]$
- **Band Stop** - Rejects frequency within specified range, ie between $\Omega_1$ and $\Omega_2$, and passes all other frequencies within $[0,\pi]$

Ideal response appear to be fundamentally different from ideal analogue, however we only care over **fundamental band** $[-\pi,\pi)$ where behaviour is **identical**

![](img/12.7-ideal-filters.png)

### Realising Ideal Digital Filters
Use poles and zeros to create simple filters. Only need to consider response over the fixed $[-\pi,\pi)$ band. 

**Key Concepts:**
- To be physically realisable, complex poles and zeros need to be in conjugate pairs
- Can place zeros anywhere, so will often place directly on unit circle when frequency / range of frequency needs to be **attenuated**
- Poles on the unit circle should generally be avoided (conditionally stable). Can try to keep all poles at origin so can be **FIR**, otherwise IIR, so feedback. Poles used to amplify response in the neighbourhood of some frequency.

- **Low Pass** - zeros at or near $\Omega=\pi$, poles near $\Omega = 0$ which can amplify maximum gain, or be used at a higher frequency to increase size of pass band.
- **High Pass** - literally inverse of *low pass*. Zeros at or near $\Omega=0$, poles near $\Omega = \pi$ which can amplify maximum gain, or be used at a lower frequency to increase size of pass band.
- **Band Pass** - Place zeros at or near both $\Omega = 0$ and $\Omega = \pi$; so must be atleast second order. Place pole if needed to amplify the signal in the neighbourood of the pass band.
- **Band Stop** - Place zeros at or near the stop band. Zeros must be complex so such a filter must be atelast second order. Place poles at or near both $\Omega = 0$ and $\Omega = \pi$ if needed.

### Example 12.6 - Simple High Pass Filter Design
See diagram

![](img/12.6-example.png)
![](img/12.6b-example.png)

</div>
<div class="equations">

## 13 - FIR Digital Filter Design

### Discrete Time Radial Frequency
$$ \Omega = \frac{\omega}{f_s} = \frac{2\pi f}{f_s} $$

As long as $\Omega \le \pi$ - otherwise there will be an alias at a lower frequency. So $2f \le f_s$ to avoid aliasing.

### Realising Ideal Digital Filter
Aim is to get as close as possible to *ideal behaviour*. But when using **Inverse DTFT**, the *ideal impulse* response is $\frac{\Omega_c}{\pi}sinc(n\Omega_c)$.

This is analogous to the inverse Fourier transform of the ideal analogue low pass frequency response. 

Sampled a *scaled* sinc function, **non-zero** values for $n \lt 0$. So needs to respond to an input before the input is applied, thus **unrealisable**.

![](img/13.1-example.png)

### Practical Digital Filters
Good digital low pass filter will try to realise the (unrealisable) ideal response. Will try to do this with FIR filters (always stable, tend to have greater flexibility to implement different frequency responses).

- Need to induce a **delay** to capture most of the ideal signal energy in causal time, ie: use $h_i[n-k]u[n]$
- **Truncate** response to delay tolerance $k_d$, such that $h[n] = 0$ for $n \gt k_d$. Also limits complexity of filter: shorter = smaller order
- **Window** response, *scales* each sample, attempt to mitigate **negative effects of truncation**

### Windowing
Window Method - design process: start with ideal $h_i[n]$ and windowing infinite time-domain response to obtain a realsiable $h[n]$ that can be implemented.

![](img/13.2-windowing.png)
![](img/13.2-band-characteristic.png)

### Windowing Criteria
- **Main Lobe Width** - Width in frequency of the main lobe. 
- **Roll-off rate** - how sharply main lobe decreases, measured in dB/dec (db per decade).
- **Peak side lobe level** - Peak magnitude of the largest side lobe relative to the main lobe, measured in dB.
- **Pass Band ripple** - The amount the gain over the pass band can vary about unity $1-\delta_p/2$ and $1+\delta_p/2$
- **Pass Band Ripple Parameter, dB**- $r_p = 20log_{10}(\frac{1+\delta_p/2}{1-\delta_p/2})$
- **Stop Band ripple** - Gain over the stop band, must be less than the stop band ripple $\delta_s$
- **Transition Band** - $\Omega_\Delta = \Omega_s - \Omega_p$
  

### Practical FIR Filter Design Example 13.2
See example...

![](img/13.2a-example.png)
![](img/13.2b-example.png)
![](img/13.2c-example.png)

### Specification for FIR Filters Example 13.3
See example...

![](img/13.3a-example.png)
![](img/13.3b-example.png)

</div>

<div class="equations">

## 14 - Discrete Fourier Transform and FFT

### Discrete Fourier Transform DFT
$$ X[k] = \sum_{n=0}^{N-1}x[n]e^{-jnk\frac{2\pi}{N}} $$ 

For $k = \{0,1,2...,N-1\}$

This is  Forward discrete Fourier transform. (Not discrete time transform, but samples of it over interval $[0,2\pi)$

**Explanation:**

Discrete-time Fourier Transfomr (DTFT), takes discrete time signal, provides continous spectrem that repeats every $2\pi$. Defined for **infinite** length sequency $x[n]$, gives continous spectrum with *values at all frequencies*.

$$ X(e^{j\Omega}) = \sum_{n=0}^{\infty}x[n]e^{jn\Omega}$$

Digital often has **finite** length sequences. (Also inverse DTFT, uses intergration thus approximated). So assume sequence $x[n]$ is length $N$.

$$ X(e^{j\Omega}) = \sum_{n=0}^{N-1}x[n]e^{jn\Omega}$$

Sample spectrum $X[e^{j\Omega}]$. Repeats every $2\pi$, can sample over $[0,2\pi)$.

Take same number of samples in frequency domain as length of time domain signal.So $N$ evenly spaced samples of $X(e^{j\Omega})$. (Aka **bins**)

Occur at **fundemental frequency** $\Omega_0 = 2\pi /N$
$$ \Omega = \left \{ 0, \frac{2\pi}{N}, \frac{4\pi}{N}, \cdots, \frac{2\pi(N-1)}{N} \right \} $$

Substitude into the DTFT.

$$ X[k] = \sum_{n=0}^{N-1}x[n]e^{-jnk\frac{2\pi}{N}} $$ 

For $k = \{0,1,2...,N-1\}$

$$ f_k = k\frac{f_s}{N},\quad 0 \le k \le N-1$$

### Inverse DFT 

$$ x[n] = \frac{1}{N}\sum_{k=0}^{N-1}X[k]e^{jnk\frac{2\pi}{N}}, \quad n=\left \{ 0,1,2, \cdots , N-1 \right \} $$

### Example 14.1 DFT of Sinusoid
See example

![](img/14.1a-example.png)
![](img/14.1b-example.png)

### Zero Padding
Artificially increase the length of the time domain signal $x[n]$ by adding zeros to the end to see more **detail** in the DTFT as DFT provides sampled view of DTFT, only see DTFT at $N$ frequencies.

### Example 14.2 Effect of Zero Padding
See example

![](img/14.2a-example.png)
![](img/14.2b-example.png)
![](img/14.2c-example.png)

### Fast Fourier Transform FFT
Family of alogrithms that evaluate DFT with complexity of $O(N log_2 N)$ compared to $O(N^2)$. Achieved with **no approximations**.

Details are beyond module, but can be used in matlab with `fft` function.

</div>
<div class="equations">

## 15 - Computing Digital Signals
***This topic isn't examined as it is MATLAB***

</div>

<div class="equations">

## 16 - Digital vs Analogue Recap

### Aperiodic (simple periodic) continuous-time signal f(t)
Laplace, fourier transform.
- **APeriodic** (**simple** periodic) **continuous** time signal $f(t)$
- Convert to **Laplace** domain (s domain) via Laplace transform
- Which $s=jw$ is the (continuous) **Fourier transform**.
- Fourier transform of the signal is its frequency response $F(j\omega)$, generally defined for all $\omega$
- Laplace and fourier transform, have corresponding inverse transforms, convert $F(s)$ or $F(j\omega)$ back to $f(t)$

### More Complex Continuous-time signal f(t)
Fourier series, multiples of fundamental, samples of frequency response.
- For a more **complex** periodic **continuous**-time signal f (t)
- **Fourier series** representation decomposes the signal into its *frequency components* $F_k$ at multiples of the **fundamental** frequency $\omega_0$.
- Can be interpreted as **samples** of the frequency response $F(j\omega)$, 
- which then corresponds to periodicity of $f (t)$ over time.
- The coefficients $F_k$ are found over one period of $f (t)$.


### Discrete-time signal f[n] (infinite length)
Z-Domain, Discrete-time fourier transform
- **Discrete-time** signal $f[n]$, we can convert to the **z-domain** via the Z-transform,
- Which for $z = e^{j\Omega}$ is the **discrete-time Fourier transform** **DTFT**. 
- The discrete-time Fourier transform of the signal is its **frequency response** $F(e^{j\Omega})$
- **Repeats** every $2\pi$ (i.e., sampling in time corresponds to periodicity in frequency).
- There are corresponding inverse transforms to convert $F (z)$ or $F(e^{j\Omega})$ back to $f[n]$

###  Discrete-time signal f[n] (finite length)
Finite Length N, convert to frequency domain (DFT), N points distributed over 2 pi (periodic)
- For **discrete-time signal** $f [n]$ with **finite** length (or truncated to) N,
- Can convert to the **frequency domain** using the **discrete Fourier transform**,
- which is also discrete in frequency. 
- The discrete Fourier transform also has **N** points **distributed** over $2\pi$ and is otherwise periodic. 
- Here, we see **sampling** in both **frequency** and **time**, corresponding to periodicity in the other domain (that we
usually ignore in analysis and design because we define both the time domain signal $f [n]$ and frequency domain signal $F [k]$ over one period of length N).

![](img/16.1-frequency.png)


### Stability
S-domain: negative real component, Z domain: poles within unit circle.

![](16.2-stability.png)

### Bi-Linearity
Not core module content.

</div>
<div class="equations">

## 17 - Probabilities and random signals

### Random Variable
A quantity that takes a non-deterministic values (ie we don't know what the value will be in advance). 

### Probability Distribution
Defines the probability that a random variable will take some value.

### Probability Density Function (PDF) - Continuous random variables
$$\int_{x=x_{min}}^{x_{max}} p(x)dx = 1$$

For a random variable $X$, take values between $x_{min}$ and $x_{max}$ (could be $\pm \infty$), $p(x)$ is the probability that $X=x$. 

The integration of these probabilities is equal to 1.

Can take integral over *subset* to calculate the probability of X being within that subset.

### Probability mass function (PMF) - Discrete random variables
$$\sum_{x=x_{min}}^{x_{max}} p(x) = 1$$

For a random variable $X$, take values between $x_{min}$ and $x_{max}$ (could be $\pm \infty$), $p(x)$ is the probability that $X=x$.

 The sum of these probabilities is equal to 1.

Can take summation over *subset* to calculate the probability of X being within that subset.


### Moments
$$E[X^n] = \sum_{x=x_{min}}^{x_{max}}x^np(x)\quad \quad E[X^n] = \int_{x=x_{min}}^{x_{max}}x^np(x)dx $$

Of PMF and PDF respectively.

- $n=1$, called the **mean** $\mu_x$ - Expected (average) value
- $n=2$, called the **mean-squared** value, describes spread of random variable. 
  
Often refer second order moments to as **variance** $\sigma_X^2$. *mean-squared value*, with **correction** for the mean
$$ \sigma_X^2 = E[(X-\mu_x)^2] = E[X^2] - (E[X])^2 $$ 

Standard deviation $\sigma = \sqrt{\sigma_X^2}$

### Uniform Distribution
Equal probability for a random variable to take any value in its domain, ie over $x_{min} \le x \le x_{max}$.

PDF continuous version:

![](img/17.1-uniform.png)

Discrete uniform distributions: result of dice roll, coin toss etc. Averege is average of min and max. 

### Bernoulli
Discrete probability distribution with only 2 possible values (yes no, 1 0, etc). Values have different probabilities, in general $p(1) = 1 - p(0)$.

Mean: $\mu_x = p(1)$, Variance: $\sigma_X^2 = p(1)p(0)$

### Gaussian (Normal) Distribution
Continuous probability distribution over $(-\infty,\infty)$, where values closer to mean are more likely.

Arguably most important continuos distribution as appears everywhere.

PDF is

$$p(x) = \frac{1}{\sqrt{2\pi\sigma_X^2}}exp(-\frac{(x-\mu_x)^2}{2\sigma_X^2}) $$

![](img/17.2-gaussian.png)


### Central Limit Theorem (CLT)
Sum of independent random variables can be approximated with Gaussian distribution. Approximation improves with as more random variables are included in the sum. True for any probability distributions.

### Independent Random Variables
No dependency on each other (i.e., if knowing the value of one random variable gives you no information to be able to better guess another random variable, then those random variables are independent of each other).

### Empirical Distributions
Scaled histogram by total number of samples.

![](img/17.3-empirical.png)

To observe behaviour that would match a PDF or PMF, require *infinite* number of samples. In practice can make histogram.

### Random Signals
Random variables can appear in signals in different ways, eg:

- Thermal noise - in all electronics, from agitation electrons. Often modelled by adding gaussian random variable to signal
- Signal processing techniques introduce noise - aliasing, quantisation, non-ideal filters.
- Random variables can be used to store information, e.g., data can be encoded into bits and delivered across a communication channel. A receiver does not know the information in advance and can treat each bit as a Bernoulli random variable that it needs to estimate. 
- Signals can be drastically transformed by the world (wireless signals obstructed by buildings trees etc) - Analogue signals passing through *unknown system $h(t)$*, which can vary with time etc
</div>

<div class="equations">

## 18 - Signal estimation

### Signal Estimation
Signal estimation, refers to estimating the values of parameters embedded in a signal. Signals have noise, so can't just *calculate* parameters.

### Linear Model
See equation

$$\vec{y} = \Theta \vec{\phi}+ \vec{w}$$

Polynomial terms,, linearity means y[n] must be linear function of unknown parameters.

EG:
$$ y[n] = A + Bn + w[n]$$
- A,B are unknown parameters
- $w[n]$ refers to noise - assume gaussian random variables with mean $\mu_w = 0$ and varience $\sigma_w^2$ - also assume white noise.

Write as column vector for each n.

Create observation matrix $\Theta$.

Since there are 2 parameters, $N\times 2$ matrix.

Can therefore be written as

$$\vec{y} = \Theta \vec{\phi}+ \vec{w}$$

With Optimal estimate $\hat{\vec{\phi}}$:
$$\hat{\vec{\phi}} = (\Theta^T\Theta)^{-1}\Theta^T \vec{y}$$

Can write prediction:
$$ \hat{\vec{y}} = \Theta \hat{\vec{\phi}} $$

Calculate MSE

### Generalised Linear From
See equation

$$\vec{y} = \Theta \vec{\phi}+ \vec{s} + \vec{w}$$

Where $\vec{s}$ is a vector of known samples. Convenient when our signal is contaminated by some large interference with known characteristics.

To account for this in the estimator but subtracting by s from both sides.

$$\hat{\vec{\phi}} = (\Theta^T\Theta)^{-1}\Theta^T (\vec{y} - \vec{s})$$

### Optimal estimate 
See equation

$$\hat{\vec{\phi}} = (\Theta^T\Theta)^{-1}\Theta^T \vec{y}$$

### Predicted estimate
See equation

$$ \hat{\vec{y}} = \Theta \hat{\vec{\phi}} $$

Without noise.

### Observation Matrix $\Theta$
See below

$N\times P$ matrix where $P$ is the number of parameters, and $N$ is the number of time steps.

Each column is the coefficients of the corresponding parameter at the given timestamp (per row).

### Mean Square Error (MSE)
See equation

$$ MSE( \hat{\vec{y}}) = \frac{1}{N} \sum_{n=0}^{N-1} ( \hat{y}[n] - y[n] )^2 $$

### Example 18.1
See example

![](img/18.1-example.png)
![](img/18.1b-example.png)

### Example 18.2
See example

![](img/18.2a-example.png)
![](img/18.2b-example.png)


### Linear Regression
$$theta = Obs\setminus  y$$

AKA Ordinary least squares (OLS). 

Form of observation matrix had to be assumed but may be unknown. If so can try different ones and find simplest that has best MSE.

### Weighted Least Squares Estimate
Weighted least squares, includes a weight matrix W, where each sample associated with positive weight.

Places more emphasis on more reliable samples.

Good choice of weight $W[n]$:
$$ W[n] = \frac{1}{\sigma_n^2}$$

Therefore resulting in:

$$\hat{\vec{\phi}} = (\Theta^T W \Theta)^{-1}\Theta^T W \vec{y}$$

Using equation, where W is the column vector of weights.
``` 
theta = lscov(Obs, y,W);
```

### Maximum Likelihood Estimation (MLE)
See equation

Found by determining $\hat{\vec{\phi}}$, maximises the PDF of the signal $y[n]$, which depends on the statistics of the noise $w[n]$.

Given some type of probability distribution, the MLE can be found.

MATLAB `mle` function from the *Statistics and Machine Learning Toolbox*.




</div>
<div class="equations">

## 19 - Correlation and Power spectral density

### Correlation
Correlation gives a measure of time-domain similarity between two signals.

### Cross Correlation
$$R_{x_1x_2}[k] \approx \frac{1}{N-k} \sum_{n=0}^{N-k} x_1[n] x_2[k+n]  $$ 

$$ R_{x_1x_2}[k] \approx \frac{1}{N-k} (x_1[0]x_2[k] + x_1[1]x_2[k+1]  + \cdots + x_1[N]x_2[k+N]) $$

- $k$ is the time shift of $x_2[n]$ sequence relative to the $x_1[n]$ sequence.
- Approximation as signal lengths are finite and the signals could be random. 

### Example 19.1 - Discrete Cross-Correlation
See example

![](img/19.1-example.png)


### Autocorrelation
Correlation of a signal with itself, ie $x_2[n] = x_1[n]$ or $x_2(t) = x_1(t)$

- Gives a measure of whether the current value of the signal says anything about a future value. Especially good for random signals.

**Key Properties**
1. Autocorrelation for zero delay is the same as the signals **mean square** value. The auto correlation is never bigger for any non-zero delay.
2. Auto correlation is an **even function** of $k$ or $\tau$, ie $R_{x_1x_2}[k] = R_{x_1x_2}[-k]$
3. Autocorrelation of sum of two **uncorrelated signals** is the same as the sums fo the autocorrelations of the two individual signals.

For $x_1[n]$ and $x_2[n]$ are uncorrelated,

$$ y[n] = x_1[n] + x_2[n] \Rightarrow R_{YY}[k] = R_{x_1x_1}[k] + R_{x_2x_2}[k]$$

### Example 19.2 - Discrete Autocorrelation
See example

![](img/19.2-example.png)

### Example 19.3 - Correlation in MATLAB
See example

![](img/19.3a-example.png)
![](img/19.3b-example.png)

</div>

<div class="equations">

## 20 - Image Processing

### Types of colour encoding
Binary (0, 1), Indexed (colour map), Greyscale (range 0->1), True Colour (RGB)

- Binary has value 0 and 1 to represent black and white
- Indexed each pixel has one value corresponding to pre-determined list of colours (colour map)
- Greyscale - each pixel has value within 0 (black) and 1 (white) - often write as whole numbers and then normalise
- True colour - Three associated values, RGB

But focus on binary and greyscale for hand calculations

### Notation
See below

$f[i][j]$ - follows same indexing conventions as MATLAB

ie: $i$ refers to vertical coordinate (row)

$j$ refers to horizontal coordinate (column)

$(i,j) = (1,1)$ is the top left pixel.

![](img/20.2-representation.png)

### Digital Convolution
$$y[n] = \sum_{k=-\infty}^{\infty} x[k]h[n-k] = x[n] * h[n] = h[n] * x[n] $$

### Example 20.1 - 1D Discrete Convolution
See example

![](img/20.1-example.png)
![](img/20.1b-example.png)

### Example 20.2 - Visual 1D Discrete Convolution
See example

![](img/20.2-example.png)
![](img/20.2-representation.png)

### Image Filtering
Determine output y[i][j] from input x[i][j] through filter (kernel) h[i][j]

Filter (Kernel) = $h[i][j]$, assume square matrix with odd rows and columns so obvious *middle*

1. *Flip* impulse response $h[i][j]$ to get $h^*[i][j]$ 
   1. Achieved by mirroring all elements around center element.
   2. By symmetry, sometimes $h[i][j] = h^*[i][j]$ 
2. Move flipped impulse response $h^*[i][j]$ along input image $x[i][j]$.
3. Each time kernel is moved, multiply all elements of $h^*[i][j]$ by corresponding covered pixels in $x[i][j]$.
   1. Add together products and store sum in output $y[i][j]$ - corresponds to **middle** pixel covered by kernel
   2. Only consider overlaps between $h^*[i][j]$ and $x[i][j]$ where the **middle** element of the kernel covers a pixel in the input image
   
### Edge Handling
Zero-padding and replicating

- **Zero Padding** Treat all *off image* pixels as having value 0. $x[i][j] = 0$ beyond defined image. Simplest but may lead to unusual artefacts at the edges of the image. Only option available for `conv2` and default for `imfilter`.
- **Replicating** the border - Assuming *off image* have same values as nearest element along edge of image. IE: Assume pixels at the outside corner take the value of the corner pixel $x[0][1], x[0][0], x[1][0] = x[1][1]$

### Kernels
Different types of kernels.

Larger kernels have increased sensitivity but more expensive to compute. 

- Values add to 0 = Removes signal strength to accentuate certain details
- Values add to 1 = maintain signal strength by redistributing

- **Low Pass Filter** - Equivalent to taking weight average around neighbourhood of pixel. Adds to 1 
- **Blurring filter** - Similar to low pass, but elements adds uo to more than 1, so *washes out* the image more
- **High Pass Filter** - Accentuates transitions between colours, can be used as simple **edge detection** (important task, first step to detecting objects)
- **Sobel operator** - More effective at detecting edges than high pass filter. Do need to apply different kernels for different directions. *X-gradient* = detecting vertical edges, *Y-gradient* = detecting horizontal edges

![](img/20.5-kernals.png)

![](img/20.7-simple-filter-ops.png)

### Example 20.3 - Image Filtering
See example

![](img/20.3-example.png)
![](img/20.6-inputoutput-20.3.png)

</div>

