# Cuestionario 4: Profundidad y propiedades 3D

## Pregunta

¿Qué se necesita para que una transformación 3D (por ejemplo rotateY) muestre profundidad? Mencione perspective, transform-style y backface-visibility.

## Respuesta justificada

Para percibir profundidad se aporta una proyección con perspectiva, normalmente `perspective: 900px` en el padre del objeto. También puede utilizarse `perspective()` en transform. Un valor menor acentúa la perspectiva; debe ser una longitud positiva.

`transform-style: preserve-3d` permite que los hijos conserven sus posiciones en un espacio 3D compartido, en lugar de aplanarse en el plano de su padre. No se hereda: se declara en los contenedores intermedios necesarios, por ejemplo `.zoom` y `.cubo`.

`backface-visibility: hidden` oculta la parte posterior de cada cara al orientarse de espaldas al observador. Evita ver texto reflejado o caras posteriores superpuestas.

Solo perspective aporta la proyección; preserve-3d organiza los hijos y backface-visibility controla qué cara se ve. Las tres tienen funciones distintas. En una flip card, el padre aporta perspectiva, el contenedor rota y cada cara oculta su reverso.
