# Cuestionario 2: Cuatro propiedades de transition

## Pregunta

Mencione las cuatro propiedades que componen el atajo transition e indique un valor posible de cada una.

## Respuesta justificada

| Propiedad | Función | Valor de ejemplo |
| --- | --- | --- |
| transition-property | Propiedad cuyo cambio se interpola | transform |
| transition-duration | Tiempo que dura el cambio | .3s |
| transition-timing-function | Curva de progreso | ease-out |
| transition-delay | Espera antes de comenzar | .1s |

El atajo equivalente es `transition: transform .3s ease-out .1s;`. Cuando aparecen dos tiempos, el primero es la duración y el segundo el retardo. Para varias transiciones se separan los grupos con comas.
