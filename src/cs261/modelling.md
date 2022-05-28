# System Modelling

- UML was developed in the 90s as a general purpose modelling language, providing a formal scheme for describing system models.
  - Static/structural view of system (objects and their attributes)
  - Dynamic/behavioural view - dynamic behaviour of system (collaboration betwen objects and changing state)
- Different perspectives for system modelling include:
  - External - the context of the system
  - Interaction
    - Between system and it's environment
    - Between components of system
  - Structural
    - Organisation of system
    - Structure of data being processed
  - Behavioural - dynamic behaviour of the system

## Structural UML

- Creating a static view of a system requires identifying entities, which can be done in one of four ways
  - Grammatical approach based on natural language of the system
    - Identify key items from the description of the problem
  - Identification of tangible things in the application domain
  - Behavioural approach to identify objects
  - Scenario-based, where objects, attributes and methods in each scenario are identified
- Class diagram shows system classes and their relationships
  - Show structure of design and organisation of components
  - UML formal notation move requirements closer to a mathematical description
  - Forces us to think about the language used in D-requirements
  - Class name is shown in diagram
  - Attributes shown with types
  - Methods shown with return and argument types
  - Use the line with the crows foot for showing one-to-many or many-to-many
  - Use ranges to indicate how many objects there are
- Writing correct class diagrams:
  - Class name should be at the top
    - Abstract classes go in italic
    - Interfaces are represented \<\<interface\>\>
  - Attributes represent internal datatypes and are optional
  - Methods that make up public interface should be included
    - Don't show inherited
    - Don't show getters/setters
  - Symbols indicate access modifier
    - `+` - public
    - `-` - private
    - `#` - protected
    - `~` - package private
    - `/` - derived
    - Static attributes/methos should be underlined
  - Comments can be associated with classes, use a folded note notation
  - Class inheritance hierarchies, drawn top down with arrows pointing to parent
    - Solid line with black arrow for class
    - Solid line with white arrow for abstract class
    - Dashed line with white arrow for interface
  - Multiplicity shown next to arrow/line ends
    - `*` is zero or more
    - `1` is exactly one
    - `2..4` is between two and four
    - `3..*` is 3 or more
  - Include name and navigability on arrows
  - Association (no arrow) shows classes are associated in some way
  - White diamond shows aggregation
  - Black diamond shows composition
  - Dotted line shows a temporary use/dependency
- Context models illustrate the operational context of the system and other systems
  - Show links between different systems

## Behavioural UML

- Activity diagrams are flowcharts to represent workflows of stepwise activities within the system
  - Involves actions, decision boxes, bars to introduce parallel actions
- Use case diagram represents users interactions within the system, and how they interact with the components
  - Shows events occurring within system and how users trigger them
- Sequence diagram shows temporal interaction between processes and user
  - Time progresses downward
  - example in slides
- State machine diagram shows how the state of the system changes
  - Similar to activity diagram but some fundamental differences
  - State diagram performs actions in response to specific events
  - Flowchart transitions from node to node on completion of activities
  - Executing a program graph (flowchart) results in a state graph
  - Instructions vs states

## Architectural Patterns

- Writing correct sequence diagrams:
  - Participants are objects/entities
  - Messages (arrows) are communications between objects
  - Time moves from top to bottom
  - Various ways of representing an object
    - `Name:Type`, can omit either name or type
  - Dashed vertical line is the lifetime of the object, terminated with a cross
  - When an object is active, represented with a box
    - Nest boxes for recursion
  - Frame boxes allow for conditionals and loops
- Architectural design is concerned with understanding how a system should be organised

  - Often represented with box and line diagrams
  - Two main uses:
    - Facilitating discussion about system design - high level view useful for stakeholders
    - Documenting that an architecture has been design with a complete system model
  - Non-functional requirements refer to system as a whole, so architectural design is closely related. Considers:
    - Performance
    - Security
    - Safety
    - Availability
    - Maintanability
  - First need to break system down into subsystems
  - Box/arrow diagrams show general interactions
    - Arrows show direction of data/control
    - May break down larger systems into subsystems
