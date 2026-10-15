const boton = document.querySelector('.hamburguesa');
boton.addEventListener('click', () => {
  const activo = boton.getAttribute('aria-pressed') !== 'true';
  boton.setAttribute('aria-pressed', String(activo));
  boton.setAttribute('aria-label', activo ? 'Volver a tres líneas' : 'Activar forma X');
});
