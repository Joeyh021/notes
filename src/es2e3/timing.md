# Timing & Pipelining

So far, digital circuits have been considered as instantaneous, where outputs are available immediately. This is an approximation, as there are delays in the propagation of signals through circuits. There are delays associated with many elements in circuits, and these need to be analysed and take in to account.

- Every gate or circuit element exhibits a propagation delay
- A change in the input causes a change in output, but only after a propagation delay: $t_p$
- Delay arises due to low level factors to do with analog properties including capacitance
  - Figures usually supplied by manufacturers
  - Can differ for different gates
  - Can be affected by temperature
  - Low-to-high may differ from high-to-low delay
  - Also related to fanout
    - The number of inputs the output is driving
- This information can give the total propagation delay for a whole circuit
  - Sum up all delays along all paths from inputs to outputs
    - Worst case delay is the one we're concerned with
  - Different path delays can cause internal glitches
  - The worst case through a circuit is the deciding factor in how fast we can supply inputs

## Combinational Timing

It is typically easiest to trace through a circuit gate by gate, working out what the delay would be at each step. The gate delay can be indicated on timing diagrams, but only when specifically interested in them. The diagram shows a circuit, along with it's timing diagram including propagation delay.

![](./img/combi-timing.png)

Attaching some numbers to the delays:

- $t_{pAND} = t_{pOR} = 3$ ns
- $t_{pINV} = 2$ ns
- $t_{pXOR} = 4$ ns

There are four inputs and one output in this circuit, so four possible paths. All paths have the same delay of 6ns.

Another example:

![](./img/combi-timing-2.png)

- The first two paths have a 6ns delay
- the second two paths also include an inverter, which adds another 2ns of delay for a total of 8ns

Looking again at the ripple adder, and assuming each gate has a unit delay:

![](./img/full-adder.png)

- a,b to sum has 2 delays
- cin to sum has 1 delay
- a,b to cout has 3 delays
- cin to cout has 2 delays
- Worst case is 3 delays, so this is how long we must wait for signals to propagate fully

Uneven path delays mean there may be invalid intermediate values before outputs settle, called glitches. It is important to wait for all signals to propagate to avoid incorrect results in the circuit.

The total delay of an n-stage ripple adder is $4 + 2(n-2)$ gate delays:

- The 1st stage has 3 delays
- intermediate ripple stages have 2 delays
- The final stage will have 2 delays

![](./img/ripple-adder.png)

Any combinational circuit element will have a delay, which can be determined from it's datasheet. Combining larger complex combinational elements must follow the same rules as combining gates. Consider the circuit to the right which computes $f = ax^2 + bx + c$:

![](./img/complex-combi.png)

- The longest path from input to output is through the 2 multipliers and 2 adders
- Assuming 4ns and 2ns delay respectively, the total worst case delay is 12ns

## Synchronous Timing

When composing large combinational circuits, the timing characteristics of each part must be considered to ensure that inputs and outputs are all timed correctly, analysing all paths. Any change to the circuit requires re-analysis of the timing behaviour. Sequential circuits are more complex to analyse.

- A synchronous system has a single clock that marks the timesteps when the new inputs are passed to sub-circuits
- At each rising edge, register outputs change
- Any combinational path must process this input, and have the result ready before the next clock cycle
- **The clock must be slow enough to accommodate the slowest path between two flip-flops**

![](./img/sync-timing.png)

- At the first clock edge, values emerge from the first set of registers and propagate through the circuit, taking 12ns
- After 12ns, the values at the combinational output are stable and correct
- At the next clock edge, this output is stored in the register, and a new set of values enter the combinational circuit
- The maximum frequency = 1/12ns = approx 83MHz
  - Or any slower clock will also work

When looking at a larger synchronous circuit:

- There will be a delay between any pair of registers
- The output of any register must have enough time to propagate through all the combinational logic to the next input
- The paths between all pairs of registers is considered, and the longest is selected as the **critical path**
  - The critical path determines the maximum clock frequency for the whole circuit

## Flip-Flop Timing

## Syncrhonous Design

## Pipelining Circuits
