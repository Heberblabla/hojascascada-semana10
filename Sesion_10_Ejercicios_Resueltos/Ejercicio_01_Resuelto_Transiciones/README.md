# Resuelto 1: Botones y tarjetas con transiciones

Origen: páginas 4-5 del PDF de la sesión 10.

## Qué solicita

Botón que cambia de color y se eleva, y tres tarjetas que se levantan y aumentan su sombra. Transiciones sobre transform, background-color y box-shadow.

## Cómo se resolvió

Se mantienen textos, colores y tiempos de la guía. Las transiciones se declaran en el estado base para suavizar entrada y salida. Se añade foco visible a las tarjetas para comprobarlas con teclado.

## Cómo ejecutar y comprobar

Extrae todo el ZIP y abre `index.html` con doble clic en un navegador moderno. Live Server es opcional.

1. Pasa el cursor sobre botón y tarjetas y retíralo: ambos sentidos deben ser suaves.
2. Usa Tab: el botón cambia igual que con hover.
3. Mantén presionado el botón: se reduce a .97 de escala.
4. Para la comparación, quita transition de .tarjeta y colócala solo en .tarjeta:hover; comprueba la salida y restaura el archivo.

## Dependencias

Solo un navegador moderno. Sin Node.js, compilación, bibliotecas, fuentes remotas ni conexión a Internet. La solución usa HTML y CSS, sin JavaScript.

## Comparación y suposición

Si transition solo existe en :hover, al salir el estado de destino ya no tiene duración de transición y el regreso es inmediato. El botón demuestra estados CSS; no abre un curso porque el PDF no proporciona un destino.
