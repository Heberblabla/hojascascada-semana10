# Resuelto 2: Transformaciones 2D y reloj

Origen: páginas 5-7 del PDF de la sesión 10.

## Qué solicita

Cuatro cajas con scale, rotate, translate y skew; un reloj cuya aguja gira alrededor de su base con curva elástica.

## Cómo se resolvió

Se reproducen las cuatro transformaciones del ejemplo y la aguja con origen bottom center. La curva cubic-bezier(.4,2,.6,1) permite sobrepasar temporalmente el valor de destino.

## Cómo ejecutar y comprobar

Extrae todo el ZIP y abre `index.html` con doble clic en un navegador moderno. Live Server es opcional.

1. Pasa el cursor o usa Tab sobre cada caja.
2. Enfoca el reloj: la aguja gira 150° desde su base.
3. Quita transform-origin de .aguja y compara: el giro pasa a ser alrededor del centro de la aguja.
4. Prueba en una caja `transform: rotate(20deg) scale(1.2) translateX(10px)` y luego `transform: translateX(10px) scale(1.2) rotate(20deg)`. Restaura los valores originales.

## Dependencias

Solo un navegador moderno. Sin Node.js, compilación, bibliotecas, fuentes remotas ni conexión a Internet. La solución usa HTML y CSS, sin JavaScript.

## Comparación del orden de funciones

El orden importa: en `rotate(20deg) scale(1.2) translateX(10px)`, la traslación queda orientada por la rotación y escalada: el desplazamiento del origen es aproximadamente (11.28 px, 4.10 px). En `translateX(10px) scale(1.2) rotate(20deg)`, ese desplazamiento es (10 px, 0 px).

Precisión sobre la teoría del PDF: las matrices se componen en el orden escrito; al calcular su efecto sobre un punto, la función situada más a la derecha actúa primero. No debe interpretarse la frase «de izquierda a derecha» como operaciones sucesivas sobre coordenadas globales invariables.

El reloj es una demostración de transform-origin, no muestra la hora actual.
