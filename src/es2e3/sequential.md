# Sequential Verilog

- We can design combinational circuits using
  - Gate-level structural design
  - Assign statements
  - Behavioural always blocks
- Important to consider that our circuits are purely combinational in all cases
- It is possible to design sequential circuits
  - Most designs will be synchronous: synced with a clock

## Latches

### SR Latch

- Two inputs
- Two outputs
- Two NOR gates

```verilog
module srlatch(input R, S
             output Q, Qbar);

nor N1 (Q, R, Qbar);
nor N2 (Qbar, S, Q);

// Alternatively

assign Q = R ~| Qbar;
assign Qbar = S ~| Q;

endmodule
```

### D Latch

A D latch is synchronous, where an SR isn't:

```verilog

module dlatch(input EN, D,
              output reg Q, Qbar);

always @ (D, EN)
    if(EN) begin
        Q <= D;
        Qbar <= ~D;
    end
end
endmodule;
```

D goes to Q if enable is high: circuit is described succinctly.

Generally, FPGA designs will be synchronous as it allows us to more easily understand the timing of the circuit. Most of the logic we will look at will be edge-triggered, which is described as follows:

```verilog
module simplereg(input d, clk, output reg q);
    always @ (posedge clk)
        q <= d;
endmodule
```

`posedge` keyword can can be used in a sensitivity list to define a trigger on the rising edge of a clock (`negedge` is also a thing). In this case, a simple register is created. A multi-bit register/flip flop is defined below:

```verilog
module simplereg(input [3:0] d, input clk, output reg [3:0] q);

    always @ (posedge clk)
        q <= d;
endmodule
```

## Clocks and Reset

- All circuits should be synchronised based on the same clock signal
- Clock can be named whatever (usually `clk`) and defined as an input to the module
- We often need to reset the contents of a register or state of circuit to 0/a default
  - Two types of reset:
    - Asynchronous: whenever the reset input is asserted, the reset is triggered
    - Synchronous: if the reset is asserted on the rising edge, reset is triggered
  - In modern FPGA design, we use synchronous reset

An 8 bit register with synchronous reset:

```verilog

module 8bitreg(input [7:0] d,
               input clk, rst,
               output reg [7:0] q);

always @ (posedge clk) begin
    if(rst)
        q <= 8'b00000000;
    else
        q <= d;
end
endmodule
```

For an asynchronous reset, the reset signal is added to the sensitivity list so that the block can be triggered independently of the clock. However, this will desynchronise the always block from the rest of the circuit so is not the prefferred way to do it.

```verilog

module 8bitreg(input [7:0] d,
               input clk, rst,
               output reg [7:0] q);

always @ (posedge clk or posedge rst) begin
    if(rst)
        q <= 8'b00000000;
    else
        q <= d;
end
endmodule
```

## Registers

Can control multiple registers from the same block. Each assignment in a synchronous always block creates a register controlled by the same block. This verilog module contains 3 8-bit registers.

```verilog
module multireg(input [7:0] a, b, c
                input clk, rst
                output reg [7:0] q, r, s);

always @ (posedge clk) begin
    if(!rst) begin
        q <= 0;
        r <= 0;
        s <= 0;
    end
    else begin
        q <= a;
        r <= b;
        s <= c;
    end
end

endmodule
```

- When drawing can ignore clock and reset as they should always be there
- Putting a triangle on an input in a block diagram shows that the input is edge-triggered

### Non-Blocking assignment

- The `<=` operator is called non-blocking assignment
- For combinational always blocks, as use blocking assignment and order matters
- For a synchronous block, order does not matter
  - Everything only happens on the rising edge

## Counters

A register where the value increments on the rising edge (or decrements if `down` signal is asserted).

```verilog
module simplecount(input clk, rst, down, output reg [3:0] q);
    always @ (posedge clk) begin
        if(rst)
            q <= 4'b0000;
        else
            if(down)
                q <= q - 1'b1;
            else
                q <= q + 1'b1;

endmodule
```

Can alter to include an `enable` signal. Since it's a synchronous component, don't need to account for all branches.

```verilog
module simplecount(input clk, rst, down, enable, output reg [3:0] q);
    always @ (posedge clk) begin
        if(rst)
            q <= 4'b0000;
        else
            if(enable)
                if(down)
                    q <= q - 1'b1;
                else
                    q <= q + 1'b1;
    end
endmodule
```

Can again alter to include the ability to load a value.

```verilog
module simplecount(input clk, rst, down, load, input [3:0] cnt_in, output reg [3:0] q);
    always @ (posedge clk) begin
        if(rst)
            q <= 4'b0000;
        else
            if(load)
                q <= cnt_in
            else
                if(down)
                    q <= q - 1'b1;
                else
                    q <= q + 1'b1;
    end
endmodule
```

## Shift Registers

1 bit serial in serial out shift register. Propagation occurs on the rising edge of the clock.

- Order of assignment does not matter

```verilog
module shiftreg(input clk, y, output reg q);
    req q1,q2,q3;

    always @ (posedge clk) begin
        q1 <= y;
        q2 <= q1;
        q3 <= q2;
        q <= q3;
    end
endmodule
```

Can make the module simpler using vectors, where each stage in the shift register is a separate position in the vector. The LSB is replaced by the input, and the MSB is the output.

```verilog
module shiftreg(input clk, y, output reg q_out);
    req [4:0] q;

    always @ (posedge clk) begin
        q[0] <= y;
        q[4:1] <= q[3:0];
        q_out <= q[4];
    end
endmodule
```

## Memory

- 64 element memory requires 6-bit address input, with each word as 16 bits
- Declare internal 64-element array, where each position is 16 bits.

```verilog
module spram(input clk, en, write_en,
             input [5:0] addr,
             input [15:0] d_in
             output reg [15:0] d_out);

    reg [15:0] ram [0:63];

    always @ (posedge clk) begin
        if (en) begin
            if (write_en) begin
                ram[addr] <= d_in;
            end
            d_out <= ram [addr];
        end
    end
endmodule
```

On each clock cycle:

- output 16 bit word that is on the provided addres
- if `write_en`, then `d_in` is stored at the memory location `addr`
