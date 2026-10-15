# Cuestionario 5: Rendimiento y conflictos de transform

## Pregunta

¿Por qué conviene hacer transiciones sobre transform y opacity en lugar de width o top? ¿Qué problema puede ocurrir si una animación y una transición modifican transform en el mismo elemento y cómo se resuelve?

## Respuesta justificada

`transform` y `opacity` suelen poder actualizarse en la fase de composición sin recalcular la distribución del documento. Cambiar `width` modifica dimensiones y puede provocar redistribución y repintado; `top` cambia la posición de un elemento posicionado y también puede requerir trabajo de diseño. Por eso se prefiere `translate` para movimiento visual y `scale` para ampliar sin cambiar el flujo. El rendimiento real depende del navegador y de la escena; la aceleración GPU no está garantizada.

Si @keyframes controla transform mientras el estado hover intenta cambiarlo mediante una transición, la animación puede mantener el valor animado e impedir que el valor normal de hover se vea o incluso que se dispare la transición esperada. Esto también puede ocurrir cuando el fill-mode conserva el efecto de la animación. No debe interpretarse como una regla universal de prioridad: las transiciones que ya están activas tienen su propio nivel en la cascada.

La solución sencilla es separar responsabilidades: animación de entrada en el padre y transición de giro en el hijo. En el cubo, el hijo rota con @keyframes y el padre amplía con transition. Así cada efecto modifica el transform de un elemento diferente y no se sobrescriben.
