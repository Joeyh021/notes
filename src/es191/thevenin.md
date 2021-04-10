# Thevenin and Norton Equivalent Circuits

Thevenin's Theorem states that as far as its appearance from outside is concerned, any two terminal network of resistors and energy sources can be replaced by a series combination of an ideal voltage source V and a resistor R, where V is the open-circuit voltage of the network and R is the resistance that would be measured between the output terminals if the energy sources were removed and replaced by their internal resistance.

In practice, this can be used for reducing complex circuits to a more simple model: taking networks of resistors/impedances and reducing them to a simple circuit of one source and one resistance.

- Thevenin circuits contain a single voltage source and resistor in series
- Norton circuits contain a single current source and a resistor in parallel

# Thevenin Circuits
Any linear network viewed through 2 terminals is replaced with an equivalent single voltage & resistor.

- The equivalent voltage is equal to the open circuit voltage between the two terminals ($V_{oc}$/$V_{th}$)
- The equivalent resistance ($R_{th}$) is found by replacing all sources with their internal impedances and then calculating the impedance of the network, as seen by the two terminals.
  - This can be done alternatively by calculating the short circuit current ($I_{sc}$) between the two terminals, and then using ohms law: $R_{th} = \frac{V_{th}}{I_{sc}}$.
