# Transistors

Transistors are semiconductor devices based on P-N junctions. They have three terminals, the arrangement of which depends on the kind of transistor:

- Base
- Emitter
- Collector

![](./img/teminals.png)

KCL applies, meaning the currents in the transistor sum to zero:
$$I_E = I_C + I_B$$

Transistors, like diodes are also semiconductors, meaning there is a voltage drop of 0.7 volts between the base and the emitter. When there is no collector current, transistors behave like a diode.

Transistors also have a _current gain_, meaning the current flowing into the collector is related to the current flowing into the base:
$$I_C = \beta I_B$$

## NPN Transistors

- The base-emitter junction behaves like a diode
- A base current $I_B$ only flows when the voltage $V_BE$ is sufficiently positive, ie $ \ge 0.7V$.
- The small base current controls the larger collector current, flowing from collector to emitter
- $I_C = \beta I_B$ - the current gain, showing how base current controlls collector current

Functionally, transistors are switches that emit a current from collector to emitter dependant upon the base current.

### Example

For the circuit below, find the base and collector currents using a gain of $\beta = 200$.

![](./img/trans-ex1.png)

The base current can be calculated using ohm's law, taking into account the 0.7V drop between base and emitter:
$$I_B = \frac{10 - 0.7}{185k} = 50.2 \;\mu A$$

As there is sufficient voltage for the transistor to be on, the collector current is therefore:
$$I_C = \beta I_B = 200 \times 50.2 \;\mu A = 10 \; mA$$

## PNP Transistors

The diagram at the top of the page shows the circuit symbols for both kinds of transistor. The difference between the two is the way the emitter points, which is the direction of current flow in the transistor, and also the direction of voltage drop. An NPN transistor has a forward-biased junction, whereas PNP is reverse biased. Functionally, the difference between the two is that for a PNP transistor to be "on", the emitter should be at $0.7V$ higher than the base.

### Example

Note that this circuit uses a PNP transistor, so the base is at a lower voltage than the emitter. Also note that one of the resistors is not labelled. This is because the value of it is irrelevant, as the collector current is dependant upon the bias of the transistor.

![](./img/trans-ex2.png)

$$I_B = \frac{20-0.7}{185k} = 104 \;\mu A$$
$$I_C = 200 \times I_B = 20.8 \; mA$$

## Emitter Current

Notice that in the two examples, the collector current is much larger than the base, due to the large gain on the transistor. When there is a large gain $\beta$:
$$I_E = I_C + I_B$$
$$I_E = \beta I_B + I_B \approx \beta I_B$$
$$I_E \approx \beta I_B = I_C$$

From the example above: $I_E = I_B + I_C = 104 \;\mu A + 20.8 \; mA = 20.9 \; mA \approx I_C$
