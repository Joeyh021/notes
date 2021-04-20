# Vectors

## Vector Equation of a Straight Line

The vector $\bm{r}$ is the vector of any point along the line.

$$\bm{r} = \bm{a} + \lambda\bm{b}$$

![](./img/vec-line.png)

$\bm{a}$ is any point on the line, and \bm{b} is the direction of the line. $\lambda$ is a parameter that represents the position of $\bm{r}$ relative to $\bm{a}$ along the line. The carteian form of this can be derived:
$$x = a_1 + \lambda b_1$$
$$y = a_2 + \lambda b_2$$
$$z = a_3 + \lambda b_3$$

Equating about lambda:
$$\frac{x - a_1}{b_1} = \frac{y - a_2}{b_2} = \frac{z - a_3}{b_3}$$

## Scalar/Dot Product

The dot product of two vectors:
$$\bm{a} \cdot \bm{b} = |\bm{a}||\bm{b}|\cos\theta = \sum a_n b_n$$

- If $\bm{a} \cdot \bm{b} = 0$, then $\theta = 90$ and $\cos\theta = 0$
  - The two vectors are perpendicular
- $\bm{a} \cdot \bm{a} = |\bm{a}|^2$

The angle between two vectors can be calculated using the dot product
$$\cos\theta = \frac{\bm{a}\cdot\bm{b}}{ |\bm{b}| |\bm{a}| }$$

## Projections

The projection of vector $\bm{a}$ in the direction of $\bm{b}$ is given by the scalar product:

$$\frac{\bm{b}}{ |\bm{b}| } \cdot \bm{a} = \hat{\bm{b}} \cdot \bm{a}$$

This gives a vector in the direction of $\bm{b}$ with the magnitude of $\bm{a}$.

## Equation of a Plane

The vector equation of a plane is given by
$$\bm{r} \cdot \bm{n} = \bm{a} \cdot \bm{n}$$

Where $\bm{n}$ is the normal to the plane, and $\bm{a}$ is any point in the plane. This expands to the cartesian form:

$$n_1 x+ n_2 y + n_3 z = \bm{a} \cdot \bm{n}$$

## Angle Between Planes

The angle between two planes is given by the angle between their normals.
$$\cos\theta = \frac{\bm{n_1}\cdot\bm{n_2}}{ |\bm{n_1}| |\bm{n_2}| }$$

## Intersection of 2 Planes

Two planes will only intersect if their normal vectors intersect.

- First, check the two normals are non parallel
  - $\bm{n_1}\cdot\bm{n_2} \neq 0$
- Set one of the variables equal to a parameter $\lambda$
- Equate all 3 variables about this parameter to form a cartesian equation of the line which the planes intersect along

### Example

## Distance from Point to Plane

## Vector/Cross Product

### Angular Velocity
