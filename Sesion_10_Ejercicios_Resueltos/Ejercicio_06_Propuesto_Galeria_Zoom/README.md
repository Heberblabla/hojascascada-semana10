# Propuesto 3: Galería con zoom y entrada escalonada

Origen: páginas 9 del PDF de la sesión 10.

## Qué solicita

Al menos seis imágenes con CSS Grid, zoom scale(1.1) recortado con overflow: hidden, descripción que aparece con opacity/translateY y entradas escalonadas.

## Cómo se resolvió

Se incluyen seis imágenes SVG originales y locales, cargadas mediante img. La entrada está en figure, el zoom en img y la descripción en figcaption: no compiten por transform. Hay soporte para foco de teclado y pantallas sin hover.

## Cómo ejecutar y comprobar

Extrae todo el ZIP y abre `index.html` con doble clic en un navegador moderno. Live Server es opcional.

1. Recarga para observar seis entradas con retardos de 0 a .6 s.
2. Pasa el cursor por cada imagen: crece al 110 % sin salir del contenedor y aparece la descripción.
3. Usa Tab para obtener el mismo resultado.
4. Reduce el ancho: Grid reorganiza las columnas.
5. Con movimiento reducido, la entrada desaparece y los cambios de estado son inmediatos.

## Dependencias

Solo un navegador moderno. Sin Node.js, compilación, bibliotecas, fuentes remotas ni conexión a Internet. La solución usa HTML y CSS, sin JavaScript.

Suposición: el PDF no proporciona imágenes para esta galería ni exige fotografías. Se usan seis ilustraciones vectoriales propias con colores y composiciones distintos, disponibles sin descargar recursos.
