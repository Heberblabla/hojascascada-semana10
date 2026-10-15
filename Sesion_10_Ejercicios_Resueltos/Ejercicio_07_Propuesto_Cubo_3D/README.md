# Propuesto 4: Cubo 3D giratorio

Origen: páginas 9 del PDF de la sesión 10.

## Qué solicita

Cubo con seis caras, rotateX/rotateY/translateZ y preserve-3d; giro continuo con keyframes; pausa y ampliación al pasar el cursor; movimiento reducido.

## Cómo se resolvió

Cada cara mide 160 px y se aleja 80 px del centro. La escena aporta perspectiva. El cubo gira en dos ejes durante 12 s; su padre zoom aplica la escala mediante transición para evitar que animation y transition compitan por transform. La escena estable detecta hover sin moverse con el cubo.

## Cómo ejecutar y comprobar

Extrae todo el ZIP y abre `index.html` con doble clic en un navegador moderno. Live Server es opcional.

1. Observa que aparecen distintas caras durante el giro.
2. Pasa el cursor o usa Tab: se pausa en su ángulo actual y aumenta al 115 %.
3. Retira cursor y foco: retoma desde el mismo instante y vuelve a su tamaño.
4. Activa movimiento reducido: queda estático con una vista inclinada y las interacciones cambian sin transición.

## Dependencias

Solo un navegador moderno. Sin Node.js, compilación, bibliotecas, fuentes remotas ni conexión a Internet. La solución usa HTML y CSS, sin JavaScript.

Suposición: al no especificar tamaño ni velocidad, se eligen 160 px y 12 s por ciclo. La preferencia de movimiento reducido no elimina las transformaciones que construyen las seis caras.
