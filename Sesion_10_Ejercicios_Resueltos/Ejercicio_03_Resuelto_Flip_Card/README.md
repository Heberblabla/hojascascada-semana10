# Resuelto 3: Tarjeta 3D con entrada

Origen: páginas 7-9 del PDF de la sesión 10.

## Qué solicita

Flip card con perspective, rotateY y backface-visibility; entrada con @keyframes y giro mediante transición en elementos separados.

## Cómo se resolvió

La escena entra desde 60 px por debajo y el hijo gira 180°. El reverso está prerrotado para quedar legible tras el giro. La versión base conserva el diseño y tiempos de la guía.

## Cómo ejecutar y comprobar

Extrae todo el ZIP y abre `index.html` con doble clic en un navegador moderno. Live Server es opcional.

1. Recarga: la tarjeta aparece y sube.
2. Pasa el cursor o usa Tab: se muestra el reverso. Retira el cursor y el foco para volver al frente.
3. Quita backface-visibility: hidden de .cara y observa la superposición.
4. Para el giro vertical, sustituye rotateY(180deg) por rotateX(180deg) tanto en la regla de interacción como en .reverso.
5. Activa movimiento reducido: no hay entrada animada y el giro es inmediato.

## Dependencias

Solo un navegador moderno. Sin Node.js, compilación, bibliotecas, fuentes remotas ni conexión a Internet. La solución usa HTML y CSS, sin JavaScript.

## Comparaciones

Sin ocultar las caras posteriores, pueden verse ambas y texto reflejado. Para convertir el giro horizontal en vertical se cambia el eje en los dos lugares: si solo se cambia el giro del contenedor, la orientación del reverso no coincide y puede quedar invertido.
