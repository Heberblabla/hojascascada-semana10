# Propuesto 1: Menú lateral deslizable

Origen: páginas 9 del PDF de la sesión 10.

## Qué solicita

Botón Menú que muestra una barra inicialmente desplazada con translateX(-100%), transición de .4 s y enlaces con transición propia.

## Cómo se resolvió

JavaScript básico alterna la clase abierto y sincroniza aria-expanded, aria-hidden e inert. Los enlaces tienen destinos locales; al cerrar se devuelve el foco al botón o a la sección elegida.

## Cómo ejecutar y comprobar

Extrae todo el ZIP y abre `index.html` con doble clic en un navegador moderno. Live Server es opcional.

1. Pulsa Menú: la barra entra en .4 s.
2. Prueba el color y desplazamiento de los enlaces con cursor o teclado.
3. Cierra con el botón Cerrar menú o Escape.
4. Selecciona un enlace: cierra la barra y enfoca su sección.
5. Con el menú cerrado, Tab no debe entrar en sus controles.
6. Con movimiento reducido, abrir y cerrar es inmediato.

## Dependencias

Solo un navegador moderno. Sin Node.js, compilación, bibliotecas, fuentes remotas ni conexión a Internet. El archivo script.js contiene la interacción básica.


