# Propuesto 2: Ícono hamburguesa animado

Origen: páginas 9 del PDF de la sesión 10.

## Qué solicita

Tres líneas que al hacer clic o hover se conviertan en X: externas rotan ±45°, central desaparece, usando transform-origin y transiciones.

## Cómo se resolvió

Se elige la alternativa de clic permitida. Un botón nativo se activa con ratón, tacto, Enter o Espacio; aria-pressed controla los estados de CSS. Las tres líneas comparten centro y la central pasa a opacity: 0.

## Cómo ejecutar y comprobar

Extrae todo el ZIP y abre `index.html` con doble clic en un navegador moderno. Live Server es opcional.

1. Pulsa el botón: se ve una X.
2. Pulsa de nuevo: reaparecen las tres líneas.
3. Prueba Tab y Espacio o Enter.
4. Comprueba en CSS el origen central y las rotaciones de 45° y -45°.

## Dependencias

Solo un navegador moderno. Sin Node.js, compilación, bibliotecas, fuentes remotas ni conexión a Internet. El archivo script.js contiene la interacción básica.

Suposición: el ejercicio solo pide transformar el ícono; no se añade un menú asociado.
