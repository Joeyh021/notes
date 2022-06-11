# Equations 
Below are some of the main equations that I have found useful to have on hand.

Use `./generateTables.sh ../src/es2c0/equations.md ` in the scripts folder.

<equation-table>

| [Oscillators](#oscillators)                                                                                                         |                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [Closed Loop Gain](#closed-loop-gain)                                                                                               | $A_{cl}(j \omega) = \frac{v_o}{v_i} = \frac{A}{1-A\beta(j\omega)}$                      |
| [Loop Gain](#loop-gain)                                                                                                             | $L(jw) = A\beta{}(jw)$                                                                  |
| [Frequency Potential Divider ($s$)](#frequency-potential-divider-s)                                                                 | $\frac{V_o}{V_i}(s) = \frac{Z_2}{Z_1 + Z_2} = \frac{sCR}{1 + 3sCR + s^2 C^2 R^2}$       |
| [Frequency Potential Divider ($jw$)](#frequency-potential-divider-jw)                                                               | $\frac{V_o}{V_i}(jw) = \frac{j\omega CR }{1 - \omega^2 C^2 R^2 + 3j \omega CR}$         |
| [Frequency of Unity Gain (0 phase shift)](#frequency-of-unity-gain-0-phase-shift)                                                   | $\omega_0 = \frac{1}{RC} \Rightarrow f_0 = \frac{1}{2\pi RC}$                           |
| [60 Degrees of phase shift in CR network](#60-degrees-of-phase-shift-in-cr-network)                                                 | $\omega_{60\degree} = \frac{1}{\sqrt{3} RC}$                                            |
| [Transfer function of CR Network](#transfer-function-of-cr-network)                                                                 | $\frac{v_o}{v_i} = \frac{j \omega RC}{1 + j \omega RC}$                                 |
| [Transfer function of Inverse Frequency potential divider ($s$)](#transfer-function-of-inverse-frequency-potential-divider-s)       | $\frac{V_o}{V_i}(s) = \frac{Z_2}{Z_1 + Z_2} = \frac{(1+sCR)^2}{1 + 3sCR + s^2 C^2 R^2}$ |
| [Transfer function of Inverse Frequency potential divider ($jw$)](#transfer-function-of-inverse-frequency-potential-divider-jw)     | $\frac{V_o}{V_i}(jw) = \frac{(1+jwCR)^2 }{(1-w^2C^2R^2) + 3jwCR}$                       |
| [Transfer function of Frequency potential divider (Inductor) ($s$)](#transfer-function-of-frequency-potential-divider-inductor-s)   | $\frac{V_o}{V_i}(s)  = \frac{sLR}{(R^2 + s^2L^2) + 3sLR}$                               |
| [Transfer function of Frequency potential divider (Inductor) ($jw$)](#transfer-function-of-frequency-potential-divider-inductor-jw) | $\frac{V_o}{V_i}(jw) = \frac{jwLR}{(R^2-w^2L^2) + 3jwLR}$                               |
| [Frequency of Unity Gain (0 phase shift) (Inductor)](#frequency-of-unity-gain-0-phase-shift-inductor)                               | $\omega_0 = \frac{R}{L} \Rightarrow f_0 = \frac{R}{2\pi{}L}$                            |

| [Impedance Laplace](#impedance-laplace)                     |                                                     |
| ----------------------------------------------------------- | --------------------------------------------------- |
| [Resistor](#resistor)                                       | $Z = R$                                             |
| [Capacitor](#capacitor)                                     | $Z = \frac{1}{sC} = \frac{1}{jwC} = -\frac{1}{wC}j$ |
| [Inductor](#inductor)                                       | $Z = sL$                                            |
| [Resistor Capacitor Series](#resistor-capacitor-series)     | $Z = R + \frac{1}{sC}$                              |
| [Resistor Capacitor Parallel](#resistor-capacitor-parallel) | $Z = \frac{R}{1+sCR}$                               |
| [Resistor Inductor Series](#resistor-inductor-series)       | $Z = R + sL$                                        |
| [Resistor Inductor Parallel](#resistor-inductor-parallel)   | $Z = \frac{sLR}{R+sL}$                              |

| [Op-Amps](#op-amps)                       |                         |
| ----------------------------------------- | ----------------------- |
| [Non-inverting Gain](#non-inverting-gain) | $A = 1 + \frac{R2}{R1}$ |
| [Inverting Gain](#inverting-gain)         | $A = -\frac{R2}{R1}$    |

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

### Loop Gain
$$ L(jw) = A\beta{}(jw)$$
For oscillation, need unity gain, so angle $=0\degree$ therefore must be real, so $\beta$ also must be real.
### Frequency Potential Divider ($s$)
$$\frac{V_o}{V_i}(s) = \frac{Z_2}{Z_1 + Z_2} = \frac{sCR}{1 + 3sCR + s^2 C^2 R^2}$$
![](img/oscillator1.png)
### Frequency Potential Divider ($jw$)
$$\frac{V_o}{V_i}(jw) = \frac{j\omega CR }{1 - \omega^2 C^2 R^2 + 3j \omega CR}$$

### Frequency of Unity Gain (0 phase shift)
$$\omega_0 = \frac{1}{RC} \Rightarrow f_0 = \frac{1}{2\pi RC}$$


### 60 Degrees of phase shift in CR network
$$\omega_{60\degree} = \frac{1}{\sqrt{3} RC}$$

### Transfer function of CR Network
$$\frac{v_o}{v_i} = \frac{j \omega RC}{1 + j \omega RC}$$
 $\frac{v_o}{v_i}$= Gain of CR network

![](img/cr-network.png)

### Transfer function of Inverse Frequency potential divider ($s$)
$$\frac{V_o}{V_i}(s) = \frac{Z_2}{Z_1 + Z_2} = \frac{(1+sCR)^2}{1 + 3sCR + s^2 C^2 R^2}$$

![](img/oscillator2.png)
### Transfer function of Inverse Frequency potential divider ($jw$)
$$\frac{V_o}{V_i}(jw) = \frac{(1+jwCR)^2 }{(1-w^2C^2R^2) + 3jwCR}$$

![](img/oscillator2.png)

### Transfer function of Frequency potential divider (Inductor) ($s$)
$$\frac{V_o}{V_i}(s)  = \frac{sLR}{(R^2 + s^2L^2) + 3sLR}$$

![](img/oscillator3.png)
### Transfer function of Frequency potential divider (Inductor) ($jw$)
$$\frac{V_o}{V_i}(jw) = \frac{jwLR}{(R^2-w^2L^2) + 3jwLR}$$

### Frequency of Unity Gain (0 phase shift) (Inductor)
$$\omega_0 = \frac{R}{L} \Rightarrow f_0 = \frac{R}{2\pi{}L}$$


</div>

<div class="equations">

## Impedance Laplace

### Resistor
$$Z = R$$

### Capacitor
$$Z = \frac{1}{sC} = \frac{1}{jwC} = -\frac{1}{wC}j$$

### Inductor
$$Z = sL$$

### Resistor Capacitor Series
$$ Z = R + \frac{1}{sC} $$

### Resistor Capacitor Parallel
$$ Z = \frac{R}{1+sCR} $$

### Resistor Inductor Series
$$ Z = R + sL $$
### Resistor Inductor Parallel
$$ Z = \frac{sLR}{R+sL} $$

</div>

<div class="equations">

## Op-Amps

### Non-inverting Gain
$$A = 1 + \frac{R2}{R1}$$
### Inverting Gain
$$A = -\frac{R2}{R1}$$

</div>

<div class="equations">

## Misc

### Source Regulation
Fraction of change in load and input voltage
$$\frac{\Delta{V_L}}{\Delta{V_i}}$$

### Load Regulation
Fraction of change in load to expected
$$\frac{\Delta{V_L}}{V_{Lexpected}}$$



</div>