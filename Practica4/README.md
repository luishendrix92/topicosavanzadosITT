# Práctica 4

Tres imágenes que interactúan con la forma.

- Si la imagen 1 choca con cualquier parte de la forma, ésta debe hacerse transparente por un tiempo y después regresarla a su estado. [OK]
- Si la imagen 2 choca con cualquier parte de la forma, debe asignarse un color diferente al que tiene. [OK]
- Si la imagen 3 choca con la forma, debe aparecer y desaparecer la forma en 5 veces. [OK]
- Si la imagen 1 choca con la 3, deberá **generar una cuarta imagen** estática. [OK]
- Si la imagen 1 choca con la 2, la imagen 4 debe moverse por la forma. [OK]
- Si la imagen 2 choca con la 3, las imagenes deben cambiar (*todas*). [OK]
- Si la 2 choca con la 4, deben obtener la imagen original. [OK]
- Si la 3 choca con la 4, enviar mensaje. [OK]
- Si todas las imagenes chocan, terminar el programa. [OK]

```
.-------------------------------.
|                      4        |
|             1                 |
|         2                     |
|                               |
|                               |
|  3                            |
'...............................'
```

La colisión de las imágenes, siendo representadas como esferas bidimensionales, provoca que ambas se repelan en sentidos opuestos sin importar su dirección obedenciendo la regla de que dos figuras circulares en un plano se consideran en colisión cuando la distancia entre ambas (a través de la hipotenusa formada) sea menor a la suma de sus radios; tal como lo describe la imagen siguiente:

![colisión](https://cdn.tutsplus.com/gamedev/uploads/legacy/031_whenWorldsCollide/img4.png)