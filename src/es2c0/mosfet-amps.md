# MOSFET Amplifiers

## Small-Signal Model

As MOSFETs have no gate current, their small signal model is much simpler than that of a BJT.

![](./img/mosfet-model.png)

Between the gate and the source is an open circuit, but the voltage between the two sets the dependant current source $i_D = g_m \times V_{GS}$. The MOSFET also has infinite input impedance.

## Common-Source Amplifier

Similar to a BJT common emitter amplifier, can construct a MOSFET common source amp:

![](./img/common-source.png)

Using the small signal model of the MOSFET, this amplifier looks like this:

![](./img/common-source-model.png)

Drain current $i_D = g_m V_{GS}$, so:

$$
V_{out} = -g_m V_{DS} R_D
$$

$$
V_{in} = V_{GS} + g_m V_{GS} R_S
$$

$$
A_v = \frac{-g_m V_{DS} R_D}{V_{GS} + g_m V_{GS} R_S} = \frac{-g_m R_D}{1 + g_m R_S} \approx \frac{-R_D}{R_S}
$$

Note that transconductance in a MOSFET is:

$$
g_m = \frac{2 i_{DQ}}{V_{GS}- V_{TN}}
$$

This is much lower than transconductance in a BJT, hence the gain is much lower/

## Bypass Capacitors

Adding a bypass capacitor to the amplifier increases the gain, while keeping the DC Q-point stable. Remember that capacitors act as short circuits in AC, and open circuits in DC.

![](./img/bypass-cap.png)

$$
A_v = \frac{-g_m R_D V_{GS}}{V_{GS}} = - g_m R_D
$$

The gain of the amplifier with a bypass capacitor is much higher.

### Input and Output Impedance

- The input impedance of a MOSFET is infinite, as no current flows between gate and source.
- The overall input impedance of a common source MOSFET amp is $R_{in} = R_{TH} = R_1 || R_2$, as the two gate bias resisisors will act as impedances to input signals
- The output impedance of the bypassed amplifier above is just $R_D$, as that's the only impedance in the model.
  - If $R_D = 0$, like in a common drain/source follower, then this becomes $1/g_m$
- MOSFETs have higher input impedances for this reason, so MOSFET amplifiers are used over BJTs where high impedance is required.
