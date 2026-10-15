# Cuestionario 1: Transición y estado base

## Pregunta

¿Qué es una transición CSS y en qué estado del elemento (base o :hover) conviene declararla? ¿Por qué?

## Respuesta justificada

Una transición interpola gradualmente el cambio de una propiedad entre su valor anterior y uno nuevo durante un intervalo. Puede activarse por hover, foco, pulsación o un cambio de clase.

Conviene declararla en el estado base. Así está presente al entrar y al salir de hover y ambos cambios pueden ser suaves. Si solo se declara en :hover, al salir deja de existir la duración en el estado de destino y el regreso normalmente es inmediato.

Ejemplo: `.boton { transition: transform .3s ease; }` y `.boton:hover { transform: translateY(-3px); }`.
