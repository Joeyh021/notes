# Fourier Series and Transforms

## Fourier Series

Fourier series provide a way of representing any periodic function as a sum of trigonometric functions. For a periodic function $f(t)$ with period $2L$, the Fourier series is given by:

$$
f(t) = \frac{a_0}{2} + \sum^{\infty}_{n=1} a_n \cos \frac{n\pi t}{L} + \sum^{\infty}_{n=1} b_n \cos \frac{n\pi t}{L}
$$

Where the coefficients $a_n$ and $b_n$ are called the Fourier coefficients, integrals calculated over the period of the function:

$$
a_0 = \frac{1}{L} \int^L_{-L} f(t) dt \qquad
a_n = \frac{1}{L} \int^L_{-L} f(t) \cos \frac{n\pi t}{L}dt \qquad
b_n = \frac{1}{L} \int^L_{-L} f(t) \sin \frac{n\pi t}{L} dt \qquad
$$

Note that if the function is even $f(t) = f(-t)$, then the $b_n$ term is always 0, and the series is comprised of cosine terms only:

$$
f(t) = \frac{a_0}{2} + \sum^{\infty}_{n=1} a_n \cos \frac{n\pi t}{L}
$$

Likewise for odd functions $f(t) = -f(-t)$, the $a_n$ term is always zero, and the series is comprised of sine terms only:

$$
f(t) = \sum^{\infty}_{n=1} b_n \sin \frac{n\pi t}{L}
$$

The Fourier series uniquely represents a function if:

- The integral of function over its period is finite
- The function has a finite number of discontinuities over any finite interval
- Most (if not all) functions/signals of any engineering interest will satisfy these conditions

### Exponential Representation

The Fourier series can be rewritten using Euler's formula $e^{j\theta} = \cos\theta + j\sin\theta$:

$$
f(t) = \sum^{\infty}_{-\infty} c_n e^{j2n\pi t / T}
$$

$$
c_n = \frac{1}{T} \int^T_0 f(t) e^{-j2n\pi t / T} dt \qquad \text{for}\; n = 0, \pm 1, \pm 2, \pm 3...
$$

Note that T = 2L, the period of the function.

### Frequency Spectrum Representation

The spectrum representation gives the magnitude $A_n$ and phase $\phi_n$ of the harmonic components defined by the frequencies $f_n$ contained in a signal $f(t)$

$$

f(t) = \sum^{\infty}_{n=1} A_n \sin(2\pi f_n t + \phi_n) = \frac{a_0}{2} + \sum^{\infty}_{n=1} a*n \cos \frac{n\pi t}{L} + \sum^{\infty}*{n=1} b_n \cos \frac{n\pi t}{L}


$$

$$A_n = \sqrt{a^2_n + b^2_n} \quad \phi_n = \tan^{-1}\frac{a_n}{b_n} \quad f_n= \frac{n}{2L}$$

This gives two spectra:

- The frequency spectrum, describing the magnitude $A_n$ for each frequency $f_n$ present in the signal
- The phase spectrum, describing the phase $\phi_n$ for each frequency $f_n$ present in the signal

The diagram below shows the frequency spectrum for the functions $f(t) = 3\sin 5t$ and $f(t) = 7\sin 6 t - 2\sin 3t$, respectively:

![](./img/freq-spectra.png)

### Example

Find the fourier series of the following function:

$$
f(t) =
\begin{cases}
-1 & -\pi \leq t \leq 0 \\
1 & 0 \leq t \leq \pi
\end{cases}
$$

$f(t)$ is an odd function with period $2\pi$ ($L = \pi$), hence we only need the $b_n$ integral:

$$
b_n = \frac{1}{L}\int^L_{-L} \sin \frac{n\pi t}{L} dt
= \frac{1}{\pi} \left(\int^0_{-\pi} \sin nt +  \int^\pi_{0} \sin nt\right)  dt
$$

$$
= \frac{1}{\pi} \left(  \left[ \frac{1}{n} - \frac{1}{n} \cos (-\pi n) \right] + \left[- \frac{1}{n} \cos(n\pi) + \frac{1}{n} \right] \right)
= \frac{2}{n\pi}\left( 1-\cos(n\pi)\right)
$$

Since $\cos n\pi = (-1)^n$:

$$
b_n = \frac{2}{n\pi}(1- (-1)^n)
$$

Can introduce a new index $k$, such that $n = 2k-1$:

$$b_k = \frac{4}{2k\pi -\pi} \quad \text{for} \: 1,2,3,...,\infty$$

The Fourier series for $f(t)$ is therefore given by:

$$
\frac{4}{\pi} \sum^{\infty}_{k=1} \frac{1}{2k-1} \sin\left((2k-1)t\right)
$$

## Fourier Transforms
