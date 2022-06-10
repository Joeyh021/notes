# Equations 
Below are some of the main equations that I have found useful to have on hand.

Use `./generateTables.sh ../src/es2c0/equations.md ` in the scripts folder.

<equation-table>

| [Oscillators](#oscillators)                                                         |                                                                                   |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [Closed Loop Gain](#closed-loop-gain)                                               | $A_{cl}(j \omega) = \frac{v_o}{v_i} = \frac{A}{1-A\beta(j\omega)}$                |
| [Frequency Potential Divider ($s$)](#frequency-potential-divider-s)                 | $\frac{V_2}{V_1}(s) = \frac{Z_2}{Z_1 + Z_2} = \frac{sCR}{1 + 3sCR + s^2 C^2 R^2}$ |
| [Frequency Potential Divider ($jw$)](#frequency-potential-divider-jw)               | $\frac{V_2}{V_1}(jw) = \frac{j\omega CR }{1 - \omega^2 C^2 R^2 + 3j \omega CR}$   |
| [Frequency of Unity Gain (0 phase shift)](#frequency-of-unity-gain-0-phase-shift)   | $\omega_0 = \frac{1}{RC} \Rightarrow f_0 = \frac{1}{2\pi RC}$                     |
| [60 Degrees of phase shift in RC network](#60-degrees-of-phase-shift-in-rc-network) | $\omega_{60\degree} = \frac{1}{\sqrt 3 RC}$                                       |

| [Misc](#misc)                           |                                     |
| --------------------------------------- | ----------------------------------- |
| [Source Regulation](#source-regulation) | $\frac{\Delta{V_L}}{\Delta{V_i}}$   |
| [Load Regulation](#load-regulation)     | $\frac{\Delta{V_L}}{V_{Lexpected}}$ |

</equation-table>

<div class="equations">

## Oscillators

### Closed Loop Gain
$$A_{cl}(j \omega) = \frac{v_o}{v_i} = \frac{A}{1-A\beta(j\omega)}$$
- $A_{cl}$ is the closed loop gain of the system.
- $A$ is the open loop gain (with no feedback)
- $\beta$ is the feedback fraction, that feeds back a portion of the output voltage back to the input

### Frequency Potential Divider ($s$)
$$\frac{V_2}{V_1}(s) = \frac{Z_2}{Z_1 + Z_2} = \frac{sCR}{1 + 3sCR + s^2 C^2 R^2}$$

### Frequency Potential Divider ($jw$)
$$\frac{V_2}{V_1}(jw) = \frac{j\omega CR }{1 - \omega^2 C^2 R^2 + 3j \omega CR}$$

### Frequency of Unity Gain (0 phase shift)
$$\omega_0 = \frac{1}{RC} \Rightarrow f_0 = \frac{1}{2\pi RC}$$

### 60 Degrees of phase shift in RC network
$$\omega_{60\degree} = \frac{1}{\sqrt 3 RC}$$
</div>

### Transfer function of CR Network
$$\frac{v_o}{v_i} = \frac{j \omega RC}{1 + j \omega RC}$$
 $\frac{v_o}{v_i}$= Gain of CR network

<div class="equations">

## Misc

### Source Regulation
Fraction of change in load and input voltage
$$\frac{\Delta{V_L}}{\Delta{V_i}}$$

### Load Regulation
Fraction of change in load to expected
$$\frac{\Delta{V_L}}{V_{Lexpected}}$$



</div>