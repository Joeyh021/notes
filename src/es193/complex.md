# Complex Numbers

## De Moivre's Theorem

$$(r(\cos \theta + i\sin \theta))^n = r^n (\cos n\theta + i\sin n\theta)$$

## Complex Roots

For a complex number

$$z = (r(\cos \theta + i\sin \theta))$$

The $n^{th}$ roots can be found using the formula

$$z^{\frac{1}{n}} = r^{\frac{1}{n}} \left(\cos \frac{\theta + 2 k \pi}{n} + i\sin \frac{\theta + 2 k \pi}{n}\right), \;\; k = 0,1,2,...,n-1$$

## Finding Trig Identities

Trig identities can be found by equating complex numbers and using de moivre's theorem. The examples below are shown for n=2 but the process is the same for any n.

### Identities for $f(n\theta)$

Using de moivre's theorem to equate
$$\cos 2\theta + i\sin 2\theta = (\cos\theta + i\sin\theta)^2$$

Expanding
$$(\cos\theta + i\sin\theta)^2 = \cos^2\theta + 2i\sin\theta\cos\theta - \sin^2\theta$$

Equating real and imaginary parts
$$\cos 2\theta = \cos^2\theta - \sin^2\theta$$
$$\sin 2\theta = 2\sin\theta\cos\theta$$

### Identities for $f^n(\theta)$

- $z = \cos\theta + i\sin\theta$
- $z^n + z^{-n} = 2\cos n\theta$
- $z^n - z^{-n} = 2i\sin n\theta$

To find the identity for $\cos^2\theta$, start with $z + z^{-1}$, and raise to the power of 2

$$z + z^{-1} = 2\cos\theta$$
$$(z + z^{-1})^2 =  (2\cos\theta)^2$$
$$ z^2 + 2 + z^{-2} = 4\cos^2\theta $$

Substituting in for the pairs of $z^n + z^{-n}$

$$(z^2 + z^{-2}) + 2 = 2\cos 2\theta + 2 =  4\cos^2\theta$$
$$\cos^2\theta = \frac{1}{2} \cos 2\theta + \frac{1}{2}$$
