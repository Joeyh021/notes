# Networks

## Intro

- A network is a group of interconnected dervices that communicate by sending messages
  - End hosts run applications and send/receive messages
    - Generate messages and break them down into packets
    - Add additional info such as IP address and port in packet header
    - Send bits physically
  - Access points provide access to the internet
    - End hosts connect to APs
    - Most use ethernet/wifi but also 4G/5G mobile networks
  - Intermediate devices such as switches and routers forward and route messages
    - Also known as network core
    - Run routing and forwarding algorithms
    - Info stored in routing tables
    - Move packets to correct output link
- The store-and-forward principle states that an entire packet must arrive at a before it can re-send it
  - It takes $\frac L R$ seconds to transmit a packet of length $L$ at $R$ bits per second
  - The router has to receive and send, so total delay is $2 \frac L R$, plus processing time
  - Packets queue at the router if the rate of incoming packets is greater than the transmittion rate
  - Packets either queue in buffer or may be dropped if buffer fills
  - There are four main sources of packet delay:
    - Transmission delay
      - $\frac L R$ time to send packet
    - Queueing delay
      - Time waiting to be transmitted
    - Processing delay
      - Any processing at node
    - Propagation delay
      - Time to physically move bits in link cables
- Throughput is the overall rate at which bits are transferred from a source to a destination in a time window
  - Can be instantaneous throughput, the rate at a specific point in time
  - Or average throughput, the mean rate over a longer period of time
  - Transmission links are bottlenecked by their minimum speeds
- Protocols are defined rules for communication between nodes
  - Define packet format, order of messages, actions to take on send and receive
  - Can be in software or hardware
  - Routers run IP protocols and switches and network cards implement ethernet
- The internet uses packet switching to allow different routes to share links between nodes
  - If one flow of data is not using any shared links then another flow can use it
  - Circuit switching was used in old telephone networks, where links were reserved for an entire call duration and flows did not get shared
    - Not ideal for internet traffic due to the bursty nature of packets
- There are 5 layers in the network stack, each using the services of the layer below it and providing services to the layer above it
  - **Application layer** generates data
    - HTTP, SMTP, DNS
  - **Transport layer** packetises data, adds port number, sequencing and error correcting info
    - TCP, UDP
  - **Network layer** adds source and destination IP addresses and routes packets
    - IP
  - **Link layer** adds source/destination MAC addresses, passes ethernet frames to network interface hardware drivers
    - Ethernet, WiFi
  - **Physical layer** sends the bits down the wire
    - Different protocol for cables, WiFi, fibre optics, etc

## Application Layer

- Processes such as web browsers, email, file sharing, communicate over networks
  - Developer has to develop either both client and server so they know how to communicate
  - Alternatively, processes can implement an application-layer protocol such as HTTP
- Process send/receive via sockets, which are the API between application and network
  - Creating, reading, writing to sockets is done by syscalls
  - Messages need to be addressed to the correct process running on the correct end host
    - Host identified by IP address
    - Processes identified by port number
- Application processes use transport layer services
  - Transport layer is expected to deliver messages to the intended recipients
  - All transport layer protocols provide basic services such as packetisation, addressing, sequencing, error correction
  - Different protocols provide different services
  - TCP is for reliable and ordered data transfer
    - Is correction-oriented
      - TCP handshake is required
    - Client must contact server, establish connection with IP and Port
    - Provides a
  - UDP provides no guarantees on data transfer
    - Best-effort service
    - Faster as no handshake is required and headers are smaller
    - Maintains no connection, data may be lost or our of order
- HTTP is how web browsers communicate with web servers
  - Uses TCP port 80
  - Client sends a HTTP request to request a resource
  - Server response with a HTTP response with the requested resource
  - Web pages consist of HTML file and references objects
  - HTTPv1.0 is non-persistent and downloads each object over a separate TCP connection
    - New TCP handshake for each object
  - HTTPv1.1 is persistent and uses the same connection for multiple objects
    - Server leaves connection open for any referenced objects, which are sent back-to-back as soon as they are encountered
  - RTT is the round trip time for a request
    - Needs 1 RTT to establish TCP connection, then another to request and receive first few bytes of data
    - Non-persistent response time is 2RTT + file transmission time for each file
    - Persistent response time only requires 2RTT once, then total data transfer
  - HTTP requests and responses are in ASCII, in a human-readable format
    - In request, top line is request line with request verb (GET/POST/PUT)
    - In response, top line is status line with status code and phrase
- Web clients can be configured to access the web via a cache, which caches objects to reduce response time for client requests

## Transport Layer

## Network Layer

## Selected Topics
