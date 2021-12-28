# AC Power

The overwhelming majority of electrial power is AC power, single phase power from the mains at 240V 50-60 Hz.

## RMS Power

AC voltages and currents alternate polarities so it is useful to define a DC equivalent, an average voltage/current. This is obtained by taking the root mean square of the sine wave:

$$
V_{RMS} = \frac{1}{\sqrt 2} V_p \qquad I_{RMS} = \frac{1}{\sqrt 2} I_p \qquad
$$

![](./img/rms-power.png)

## Real Power

Assume a simple circuit with just an AC source and resistor. The time taken for voltage and current to complete one cycle is $T = 2\pi / \omega = 1 / f$. The power dissapated in a resistor over a full cycle is:

$$
P = \frac{1}{T} \int^{\frac{2\pi}{\omega}}_0 (VI) \, dt = \frac{\omega}{2\pi} \int^{\frac{2\pi}{\omega}}_0 (VI) \, dt = \frac{V_pI_p}{2} = V_{RMS} I_{RMS}
$$

- There is a real power dissipated by a resistor
  - Also called active, average or useful power.
- Measured in Watts
- Useful because it is converted to non-electrical forms like heat, light, or torque

## Reactive Power

Assume a simple circuit with just an AC source and an inductor:

$$
V = V_p \cos \omega t
$$

$$
I = \frac{1}{L} \int V \, dt = \frac{V_p \sin \omega t}{\omega L}
$$

The power dissipated in one cycle $T$ is:

$$
P = \frac{1}{T} \int^{\frac{2\pi}{\omega}}_0 (VI) \, dt = \frac{\omega}{2\pi} \int^{\frac{2\pi}{\omega}}_0 (V_p \cos \omega t)\left(\frac{V_p \sin \omega t}{\omega L}\right) \, dt = 0
$$

- The average power dissipated by an inductor is 0
- No useful work is done as there is no energy conversion
- Energy is exchanged between the magnetic field of the inductor and the power supply
- Instantaneous power is not zero
- Power consumed by a reactance is called **reactive power** and is measured in VARS (Volt-Amp Reactives)
- The same can be done for a capacitor, which exchanges energy between the power supply and it's electric field

## Complex Power

- In a pure resistance, the voltage and current are in phase, and all power is positive and is dissipated
- In a pure reactance, the voltage and current are out of phase by 90 degrees, and the average power over a cycle is 0
  - Instantaneous power, the power at any given point in time, is $P(t) = V(t) I(t)$
- Most AC circuits contain both real and reactive components
  - Resistors are real and dissipate active power in Watts
  - Capacitors/inductors are reactive and dissipate reactive power in VARS
- The power supply will delive both real and reactive power in proportion to the magnitudes of real and reactive components
- Total power delivered is the **complex power**, a vector sum of real and reactive power
  - Measured in Volt-Amps (VA)

Say an AC circuit applies a voltage $V_p \angle \theta_v$ accross an impedance $Z = R + j X$, causing a current of $I_p \angle \theta_i$ to flow. The impedance can be written:

$$
Z = |Z| \angle \phi \qquad |Z| = \sqrt{R^2 + X^2_L} \qquad \phi = \tan^{-1}\frac {X}{R}
$$

By Ohm's law:

$$
I_P \angle \theta_i = \frac{V_p \angle \theta_v}{ |Z|\angle \phi }
$$

$$
\phi = \theta_v - \theta_i
$$

$\phi$ is the load angle, which can be used to sketch a **load triangle** representing the complex power:

![](./img/load-triangle.png)

The load multiplied by the current square gives the power ($P=i^2R$):

$$
i^2_{rms}Z =i^2_{rms}R + ji^2_{rms}X_L
$$

$$
S = P + j Q
$$

$S$ is the **complex power**, comprised of the real and reactive power.

$$
S = V_{rms}I_{rms} = P + jQ = |S| \angle \phi \qquad |S| = \sqrt{P^2 + Q^2}
$$

$$
P = I_{rms} V_{rms} \cos \phi \qquad Q = I_{rms} V_{rms} \sin \phi
$$

$\cos \phi$ is the **power factor**. The closer it is to 1, the more real, useful, power is being dissapated in the system, which we want to maximise.

- If $\phi$ is positive, the power factor is lagging, meaning that the phase of the current is lagging the voltage
  - The load is inductive, as current lags voltage in an inductance
- If $\phi$ is negative, the power factor is leading, current leads voltage
  - The load is capacitive

## Power Factor Correction

### Example 1

### Example 2

## Resonant Circuits

### Example
