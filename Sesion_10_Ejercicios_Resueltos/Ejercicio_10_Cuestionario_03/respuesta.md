# Cuestionario 3: Funciones 2D y punto de origen

## Pregunta

Explique la diferencia entre translate(), rotate(), scale() y skew(). ¿Qué papel cumple transform-origin?

## Respuesta justificada

- `translate(x,y)` desplaza visualmente el elemento: `translate(20px,-10px)` lo mueve a la derecha y arriba.
- `rotate(45deg)` lo gira 45 grados alrededor de su origen.
- `scale(1.2)` aumenta al 120 % su tamaño visual en ambos ejes.
- `skew(15deg,5deg)` inclina sus ejes, deformando sus ángulos.

Estas transformaciones no redistribuyen el espacio que el elemento ocupa en el flujo; por eso pueden superponerse visualmente a otros elementos.

`transform-origin` define el punto de referencia para la transformación. Su valor inicial es `50% 50%` (centro). Con `bottom center`, una aguja gira desde su base, como en el resuelto 2. Cambiar el origen influye en giros, escalas e inclinaciones; una traslación pura no cambia su desplazamiento por modificar ese origen.
