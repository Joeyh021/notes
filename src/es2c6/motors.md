# Motor Control

- Changes in speed are often required in a system.
- This can be done in PMDC motors by changing armature voltage
- Microcontrollers output a control signal to control the voltage

## Pulse Width Modulation

- Works by providing a high-frequency square wave
- The ratio of high/low is called the duty ratio
- Effectively turns a transistor on/off very quickly
- Duty ratio determines voltage accross motor

The graph below shows a PWM signal along with the average voltages

![](./img/pwm.png)

- The signal switches on and off very quickly, meaning the motor control circuit is turned on/off, but the motor has a high inductance meaning it does not respond as quickly
- This has the effect of averaging the voltage
- The PWM frequency is typically very high, and the period must be lower than the response time of the load

Motors can be modelled as an circuit with an inductance in series with a resistor, and an emf representing the motor's back emf:

![](./img/pwm-motor.png)

- The power supply is connected and disconnected by a switch controlled by PWM
- The instantaneous $V_B$ and average $E_r$ voltage accross the motor is shown on the graph for two different duty ratios
- The motor does not stop when disconnected because of the rise and fall time of the current in the RL circuit
- The diode is a freewheeling diode that allows a current path when the voltage switch is off

## Low Side Drive Circuit

- The basic circuit for implementing motor speed control is shown below, known as a "Low Side PMDC Motor Drive Circuit"
  - A high side version swaps the transistor and motor

![](./img/low-side-drive-circuit.png)

- The circuit is built around a transistor used to switch the voltage on and off
  - N-type MOSFET generally the best choice
- Freewheeling diode provides a current path for motor current when the switch is off
  - Typically a schottky diode
  - Forward rated current should be greater than max current
  - Reverse voltage should be higher than motor voltage
- Pull down resistor ensures transistor gate voltage is 0 when no input is applied
  - Typically 10k
- Current limiting resistor protects transistor from damage

The signal from the controller will be connected to the transistor gate, switching on and off at the PWM frequency. The duty ratio $D$ determines the ratio of on/off, so the average voltage is:

$$
\bar{V} =D \times V_{cc}
$$

## H-Bridge

A H-Bridge is a power electronic circuit that can convert DC to AD current. For motor control, it can be used to drive a motor in either direction or apply PWM control.

![](./img/h-bridge.png)

- The switches $S_1$ and $S_4$, and $S_2$ and $S_3$ work in pairs
- The state of each pair should always be opposite
- Current flowing in different directions causes the motor to rotate in different directions
- There are also 3 other states:
  - Shorting is when one side of the circuit has both switches closed and current flows straight to ground
    - This is a short circuit and will cause damage
    - Do not do this
  - Braking
    - $S_2$ and $S_4$ are closed, connecting both terminals to ground and causing the motor to brake sharply
  - Coasting
    - All switches open, motor will continue to spin until mechanical load brings it to a stop
