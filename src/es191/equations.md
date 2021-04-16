# Equations
Below are some of the main equations that I have found useful to have on hand. 

<equation-table>

| [Capacitors](#capacitors)                           |                                                                           |
| --------------------------------------------------- | ------------------------------------------------------------------------- |
| [Energy Stored](#energy-stored)                     | $E = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}$                    |
| [Capacitor Equation](#capacitor-equation)           | $C = \frac{Q}{V}$                                                         |
| [Capacitance equation](#capacitance-equation)       | $C = \frac{A \epsilon_r \epsilon_0}{d}$                                   |
| [Series Capacitors](#series-capacitors)             | $\frac{1}{C_T} = \frac{1}{C_1} + \frac{1}{C_2}$                           |
| [Parallel Capacitors](#parallel-capacitors)         | $C_T = C_1 + C_2$                                                         |
| [Current-Voltage](#current-voltage)                 | $C = \frac{Q}{V} = \frac{\int I , dt}{V}$                                 |
| [Step Response](#step-response)                     | $V_c(t) = V_{in} + (V_0 - V_{in}) e^{- \frac{t}{RC}}$                     |
| [Electric Field Strength](#electric-field-strength) | $E=\frac{F}{Q} = \frac{1}{4\pi{}\epsilon{}_0}\frac{Q}{r^2} = \frac{V}{r}$ |
| [Capacitor Reactance](#capacitor-reactance)         | $X_c = \frac{1}{2\pi{}fC} = \frac{1}{jwC}$                                |
| [Flux Density](#flux-density)                       | $D = \frac{flux}{area} = \frac{charge}{area} (?)$                         |

</equation-table>


<div class="equations">

## Capacitors

### Energy Stored
The energy stored by a capacitor of capacitance, C with a voltage, v
$$E = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}$$
- $C$ = Capacitance, Farads, F
- $V$ = Voltage, Volts, V
- $Q$ = Charge, Coulombs, C
  
  
### Capacitor Equation
The ratio of charge to voltage.
$$C = \frac{Q}{V}$$
- $C$ = Capacitance, Farads, F
- $V$ = Voltage, Volts, V
- $Q$ = Charge, Coulombs, C


### Capacitance equation
$$C = \frac{A \epsilon_r \epsilon_0}{d}$$

- $A$ = the area of the two plates
- $d$ = the separation of the two plates
- $\epsilon_r$ = the relative electric permittivity of the insulator
- $\epsilon_0$ = the permittivity of free space


### Series Capacitors
$$\frac{1}{C_T} = \frac{1}{C_1} + \frac{1}{C_2}$$
$$C_T = \frac{1}{\frac{1}{C_1} + \frac{1}{C_2}}$$

### Parallel Capacitors
$$C_T = C_1 + C_2$$

### Current-Voltage
$$C = \frac{Q}{V} = \frac{\int I \, dt}{V}$$

### Step Response
$$V_c(t) = V_{in} + (V_0 - V_{in}) e^{- \frac{t}{RC}}$$
 
- $V_c(t)$ = Voltage of the capacitor at time t, Volts
- $V_{in}(t)$ = Voltage in, Volts
- $V_0$ = Starting Voltage, Volts
- $C$ = Capacitance, Farads, F
- 
Derived from:
$$I_c(t) = C \frac{d}{dt} V_c(t)$$

### Electric Field Strength
$$E=\frac{F}{Q} = \frac{1}{4\pi{}\epsilon{}_0}\frac{Q}{r^2} = \frac{V}{r}$$
- $F$ = Force
- $Q$ = Charge
- $\epsilon{}_0$ = Permittivity of free space = $8.85\times10^{-12} Fm^{-1}$
- $\frac{1}{4\pi{}\epsilon{}_0}$ = Constant
- $V$ = Voltage Potential, Volts
- $r$ = Separation

### Capacitor Reactance
As the capacitor charges or discharges, a current flows through it which is restricted by the internal impedance of the capacitor. This internal impedance is commonly known as Capacitive Reactance
$$X_c = \frac{1}{2\pi{}fC} = \frac{1}{jwC}$$
- $X_c$ = Reactance of the Capacitor, Ohmns
- $j$ = $i$ = $\sqrt{-1}$
- $w$ = frequency, rads per second

### Flux Density
The amount of flux passing through a defined area that is perpendicular to the direction of the flux.
$$D = \frac{flux}{area} = \frac{charge}{area} (?)$$

</div>

