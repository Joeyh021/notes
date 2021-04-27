# Equations
Below are some of the main equations that I have found useful to have on hand. 

<equation-table>

| [Capacitors](#capacitors)  | | 
| ----------- | -----------  | 
| [Energy Stored](#energy-stored) | $E = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}$ | 
| [Capacitor Equation](#capacitor-equation) | $C = \frac{Q}{V}$ | 
| [Capacitance equation](#capacitance-equation) | $C = \frac{A \epsilon_r \epsilon_0}{d}$ | 
| [Series Capacitors](#series-capacitors) | $\frac{1}{C_T} = \frac{1}{C_1} + \frac{1}{C_2}$ | 
| [Parallel Capacitors](#parallel-capacitors) | $C_T = C_1 + C_2$ | 
| [Current-Voltage](#current-voltage) | $C = \frac{Q}{V} = \frac{\int I , dt}{V}$ | 
| [Step Response](#step-response) | $V_c(t) = V_{in} + (V_0 - V_{in}) e^{- \frac{t}{RC}}$ | 
| [Electric Field Strength](#electric-field-strength) | $E=\frac{F}{Q} = \frac{1}{4\pi{}\epsilon{}_0}\frac{Q}{r^2} = \frac{V}{r}$ | 
| [Capacitor Reactance](#capacitor-reactance) | $X_c = \frac{1}{2\pi{}fC} = \frac{1}{jwC}$ | 
| [Flux Density](#flux-density) | $D = \frac{flux}{area} = \frac{charge}{area} (?)$ | 
| [Magnetic Field Strength of Straight Current Carrying Wire](#magnetic-field-strength-of-straight-current-carrying-wire) | $B=\frac{\mu{}_0I}{2\pi{}d}$ | 

| [Resistors](#resistors)  | | 
| ----------- | -----------  | 
| [Resistors in Series](#resistors-in-series) | $R_t = R_1 + R_2$ | 
| [Resistors in Parallel](#resistors-in-parallel) | $\frac{1}{R_t} = \frac{1}{R_1} + \frac{1}{R_2}$ | 
| [Voltage Divider](#voltage-divider) | $V_{out} = V_{in} \times \frac{Z_1}{Z_1 + Z_2}$ | 
| [Current Divider](#current-divider) | $I_{R1} = I_T \times \frac{R_2}{R_1 + R_2}$ | 

| [Inductors](#inductors)  | | 
| ----------- | -----------  | 
| [Inductors in Series](#inductors-in-series) | $L_t = L_1 + L_2$ | 
| [Inductors in Parallel](#inductors-in-parallel) | $\frac{1}{L_t} = \frac{1}{L_1} + \frac{1}{L_2}$ | 
| [Induced Voltage](#induced-voltage) | $V = -N \frac{d\Phi}{dt}$ | 
| [Self Inductance](#self-inductance) | $V= L \frac{dI}{dt}$ | 
| [Energy Stored](#energy-stored-1) | $W = \frac{1}{2}LI^2$ | 
| [Step Response of RL Circuit (Current)](#step-response-of-rl-circuit-current) | $I_L(t) = \frac{V_{in}}{R} + (I_0 - \frac{V_{in}}{R}) e^{-\frac{t}{\tau}}$ | 
| [Step Response of RL Circuit (Voltage)](#step-response-of-rl-circuit-voltage) | $V_L(t) = (V_{in} - I_0R) e^{-\frac{t}{\tau}}$ | 

| [Thevenin and Norton Equivalent Circuits](#thevenin-and-norton-equivalent-circuits)  | | 
| ----------- | -----------  | 
| [Equivalent Resistance](#equivalent-resistance) | $R_{th} = \frac{V_{th}}{I_{sc}}$ | 

| [AC Circuits](#ac-circuits)  | | 
| ----------- | -----------  | 
| [Instantaneous Voltage](#instantaneous-voltage) | $V = V_p , \sin(\omega t + \phi)$ | 
| [Instantaneous Current](#instantaneous-current) | $I = I_p , \sin(\omega t + \phi)$ | 
| [AC Phasor - As complex number](#ac-phasor---as-complex-number) | $A \sin (\omega t + \phi) = A \cos \phi + jA \sin \phi = Ae^{j\phi}$ | 

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

### Magnetic Field Strength of Straight Current Carrying Wire
Amperes Law: For any closed loop path, the sum of the products of the length elements and the magnetic field in the direction of the length elements is proportional to the electric current enclosed in the loop.
$$B=\frac{\mu{}_0I}{2\pi{}d}$$
- $B$ = Magnetic field strength  at distance **d**
- $I$ = Current
- $\mu{}_0$ = Permeability of free space = $4\pi{}\times{}10^{-7} Tm/A$
- $d$ = distance from the wire.

</div>


<div class="equations">

## Resistors

### Resistors in Series

$$R_t = R_1 + R_2$$

### Resistors in Parallel

$$\frac{1}{R_t} = \frac{1}{R_1} + \frac{1}{R_2}$$

### Voltage Divider

$$V_{out} = V_{in} \times \frac{Z_1}{Z_1 + Z_2}$$

### Current Divider

$$I_{R1} = I_T \times \frac{R_2}{R_1 + R_2}$$

</div>

<div class="equations">

## Inductors

### Inductors in Series
Inductors act in the same way as resistors in terms of their behaviour in series and parallel.
$$L_t = L_1 + L_2$$

### Inductors in Parallel

$$\frac{1}{L_t} = \frac{1}{L_1} + \frac{1}{L_2}$$

### Induced Voltage
If a coil contains N loops, the induced voltage V is given by the following equation, where Φ is the flux of the circuit.
$$V = -N \frac{d\Phi}{dt}$$

### Self Inductance
A changing current causes a changing field, which then induced an EMF in any conductors in that field, When any current in a coil changes, it induced an EMF in the coil
$$V= L \frac{dI}{dt}$$

### Energy Stored
The energy stored by an inductor is given by:
$$W = \frac{1}{2}LI^2$$

### Step Response of RL Circuit (Current)
$$I_L(t) = \frac{V_{in}}{R} + (I_0 - \frac{V_{in}}{R}) e^{-\frac{t}{\tau}}$$
- $V_{in}$ - Voltage source
- $R$ - Resistance of the resistor
- $I_0$ - The initial current
- $\tau = \frac{L}{R}$

### Step Response of RL Circuit (Voltage)
Inductor voltage at time t,
$$V_L(t) = (V_{in} - I_0R) e^{-\frac{t}{\tau}}$$
- $V_L(t)$ - Voltage across inductor at time t
- $V_{in}$ - Voltage source
- $R$ - Resistance of the resistor
- $I_0$ - The initial current
- $\tau = \frac{L}{R}$

</div>


<div class="equations">

## Thevenin and Norton Equivalent Circuits
Thevenin circuits contain a single voltage source and resistor in series.
Norton circuits contain a single current source and a resistor in parallel

### Equivalent Resistance
$$R_{th} = \frac{V_{th}}{I_{sc}}$$
Any linear network viewed through 2 terminals is replaced with an equivalent single voltage & resistor.

- The equivalent voltage is equal to the open circuit voltage between the two terminals ($V_{oc}$/$V_{th}$)
- The equivalent resistance ($R_{th}$) is found by replacing all sources with their internal impedances and then calculating the impedance of the network, as seen by the two terminals.
  - This can be done alternatively by calculating the short circuit current ($I_{sc}$/$I_N$) between the two terminals, and then using ohms law: $R_{th} = \frac{V_{th}}{I_{sc}}$.
- The value of the voltage source in a Thevenin circuit is $V_{th}$
- The value of the current source in a Norton circuit is $I_{N}$
- The value of the resistor in either circuit is $R_{th}$


</div>

<div class="equations">

## AC Circuits
- AC current is the dominant form of electricity, 
- Current changes direction at a fixed frequency (usually 50~60Hz)
- AC voltage is generated by a rotating electromagnetic field
  - The angular velocity of this rotation determines the frequency of the current

### Instantaneous Voltage
An instantaneous voltage V in a sine wave is described by
$$V = V_p \, \sin(\omega t + \phi)$$

Where:
- $V_p$ is the peak voltage
- $\omega$ is the angular frequency (rad/s)
- $\phi$ is the phase shift (radians)
- The period of the wave is given by $T = \frac{1}{f} =\frac{ 2\pi}{\omega}$

### Instantaneous Current
As current and voltage are proportional, AC current is defined in a similar way:
$$I = I_p \, \sin(\omega t + \phi)$$

### AC Phasor - As complex number
An AC phasor can be represented as a complex number.
$$A \sin (\omega t + \phi) = A \cos \phi + jA \sin \phi = Ae^{j\phi}$$



</div>

