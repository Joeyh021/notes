# Testing

## Dependability

- Dependability is the trustworthiness of a computer system such that reliance can justifiably be placed in the service it delivers
- It's important that we trust systems as they become more crucial to society and everyday life
  - System failures affect people
  - Users reject unreliable systems
  - System failures are costly
  - Undependable systems cause information loss
- Reliability is a measure of how likely a system is to provide its service for a specified period of time
- _Perceived_ reliability is how reliable the system actually appears to users
  - The two differ because systems may be unreliable in ways users do not see
- There are a number of ways to measure reliability
  - Probability of failure on demand - how likely is it that a request will fail
  - Rate of occurrence of failures - how many failures will we expect to see in a fixed time period
  - Mean time to failure - how long can system run without failing
  - Availability - if a request is made to a system, what is the probability it will be operational
- Attributes of dependability:
  - Availability - likeliness a service is ready for use when invoked
  - Reliability - a measure of how likely system is to provide it's designated service for a specified period of time
  - Safety - extent to which system can operate without causing damage or danger to its environment
  - Confidentiality - don't disclose undue information to unauthorised entities
  - Integrity - capacity of a system to ensure absence of improper alterations with regard to the modification or deletion of information
  - Maintanability - a function of time representing the probability that a failed computer system will be repaird in $t$ time or less
- Some system properties are directly related to dependability:
  - Repairability - how easy is the system to fix when it breaks?
  - Future maintanability - is it economical to add new requirements and keep system relevant?
  - Error tolerance - system must be able to avoid errors when the user inputs data
- A fault is the cause of an error
- An error is the manifestation of a fault
- Failure is the result of an error propagating beyond a system boundary
  - Systems can fail due to hardware/software failure, or operational failure
- Provide dependability by:
  - Fault avoidance - write software to be robust
  - Fault detection and correction - verification and validation processes
  - Fault tolerance - design the system to manage faults
- Dependable processes are designed to produce dependable software
  - Documentable - should have a well-defined model
  - Standardised - should be applicable for many different systems
  - Auditable - should be understandable by other people
  - Diverse - should include redundant and diverse verification techniques
  - Robust - should be able to recover from failures of process activities
- System architectures should also be designed to be dependable
  - Diversity should be created by giving the same problem to different teams
  - Protection systems
    - Specialised system monitors control system, equipment, hardware, environment
    - Takes action if a fault is detected
    - Moves system to safe state once problem detected
  - Self-monitoring architectures
    - Designed to monitor own operation and take action if problem detected
    - Computations carried out in duplicate on separate channels, outputs compared
    - If any difference then failure detected
    - Hardware and software on channels should be diverse
  - N-version programming
    - Multiple software units each made by different teams under same specification
    - Each version executed on separate computers
    - Outputs are compared using a voting system
    - High software cost so used where other dependable systems are impractical

## System Testing

## Release Management
