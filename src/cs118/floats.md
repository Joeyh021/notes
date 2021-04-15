# IEEE 754

IEEE 754 is a standardised way of storing floating point numbers with three components

- A sign bit
- A biased exponent
- A normalised mantissa

| Type                      | Sign       | Exponent         | Mantissa       | Bias |
| ------------------------- | ---------- | ---------------- | -------------- | ---- |
| Single Precision (32 bit) | 1 (bit 31) | 8 (bit 30 - 23)  | 23 (bit 22- 0) | 127  |
| Double Precision (64 bit) | 1 (bit 63) | 11 (bit 62 - 52) | 52 (51 - 0)    | 1023 |

The examples below all refer to 32 bit numbers, but the principles apply to 64 bit.

- The exponent is an 8 bit unsigned number in biased form
  - To get the true exponent, subtract 127 from the binary value
- The mantissa is a binary fraction, with the first bit representing $1/2$, second bit $1/4$, etc.
  - The mantissa has an implicit $1.$, so 1 must always be added to the mantissa

## Formula

$$-1^{sign} \times 2^{E-127} \times (1 + \sum_{i=1}^{23} b_{23 - i} \;2^{-i}) $$

## Decimal to Float

The number is converted to a binary fractional format, then adjusted to fit into the form we need. Take 12.375 for example:

- Integer part $(12)_{10} = (1100)_2$
- Fraction part $(0.375)_{10} = (0.011)_2$

Combining the two parts yields $1100.011$. However, the standard requires that the mantissa have an implicit 1, so it must be shifted to the right until the number is normalised (ie has only 1 as an integer part). This yields $(1.100011)_2$. As this has been shifted, it is actually $(1.100011)_2 \times 2^3$. The three $(10)$ is therefore the exponent, but this has to be normalised (+127) to yield 130 $(1000 0010)$. The number is positive (sign bit zero) so this yields:

| Sign | Biased Exponent | Normalised Mantissa |
| ---- | --------------- | ------------------- |
| 0    | 1000 0010       | 100011              |

$$01000001010001100000000000000000$$

## Float to Decimal

Starting with the value 0x41C80000 = 01000001110010000000000000000000:

| Sign | Biased Exponent | Normalised Mantissa |
| ---- | --------------- | ------------------- |
| 0    | 1000 0011       | 1001                |

- The exponent is 131, biasing (-127) gives 4
- The mantissa is 0.5625, adding 1 (normalising) gives 1.5625
- $2^4 \times 1.5625$ gives **25**

## Special Values

- Zero
  - When both exponent and mantissa are zero, the number is zero
  - Can have both positive and negative zero
- Infinity
  - Exponent is all 1s, mantissa is zero
  - Can be either positive or negative
- Denormalised
  - If the exponent is all zeros but the mantissa is non-zero, then the value is a denormalised number
  - The mantissa does _not_ have an assumed leading one
- NaN (Not a Number)
  - Exponent is all 1s, mantissa is non-zero
  - Represents error values

| Exponent | Mantissa | Value        |
| -------- | -------- | ------------ |
| 0        | 0        | $\pm 0$      |
| 255      | 0        | $\pm \infty$ |
| 0        | not 0    | denormalised |
| 255      | not 0    | NaN          |
