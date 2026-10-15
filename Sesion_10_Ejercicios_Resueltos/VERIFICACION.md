# Verificación de la sesión 10

## Realizado

- Lectura del texto y revisión visual de las 10 páginas completas del PDF: tablas, recuadros, logotipo y actividades. No se encontraron ejercicios adicionales dentro de imágenes.
- Cotejo de cobertura: 3 ejercicios resueltos, 4 propuestos y 5 preguntas, en 12 carpetas independientes.
- Revisión de requisitos y de las comparaciones solicitadas en los tres ejercicios resueltos. Los resultados de esas comparaciones se explican en sus README como comportamiento esperado, no como mediciones realizadas en navegador.
- Comprobación automatizada de la anidación y cierre de etiquetas HTML, identificadores únicos, destinos internos y referencias locales a hojas de estilos, scripts e imágenes.
- Comprobación estructural de CSS: delimitadores, paréntesis, declaraciones y correspondencia de nombres de animaciones con @keyframes. No equivale a una validación completa de CSS por un motor de navegador.
- Cotejo de requisitos específicos: transiciones y estados; cuatro funciones 2D y origen de la aguja; flip card; menú de .4 s; hamburguesa con rotaciones y opacidad; seis imágenes con zoom y entradas; cubo con seis caras, pausa y escala en elementos distintos.
- Análisis XML de las seis imágenes SVG y comprobación de sus referencias desde HTML.
- Comprobación de sintaxis con node --check en los dos archivos script.js. Node.js se usó únicamente para verificar el código, no es dependencia de la entrega.
- Ejecución de pruebas de lógica JavaScript con elementos DOM simulados: abrir y cerrar menú, Escape, elección de enlace y restauración de foco, y alternancia reversible de la hamburguesa y sus atributos accesibles. No es una prueba del DOM ni de eventos de un navegador real.
- Revisión de las cinco respuestas y sus justificaciones.
- Comprobación de integridad del ZIP y comparación de los bytes de todos los archivos comprimidos con sus originales.

## Limitaciones

El entorno no dispone de un navegador ejecutable. No se ejecutaron pruebas visuales de las páginas, transiciones, transformaciones 3D, estados hover/focus reales, adaptación móvil ni emulación de movimiento reducido. Esos aspectos se revisaron en el código y tienen pasos de comprobación manual en cada README.

La estructura y la sintaxis comprobadas no garantizan por sí solas el comportamiento de un navegador. No se afirma haber realizado pruebas visuales interactivas.

## Comprobación manual

Extraer el ZIP; abrir cada index.html en Chrome, Edge o Firefox. Probar ratón y Tab/Enter/Espacio; recargar las entradas; revisar un ancho pequeño; activar movimiento reducido. Para el cubo, retirar tanto cursor como foco para reanudar el giro. Para la flip card vertical, cambiar el eje en el contenedor y en el reverso.
