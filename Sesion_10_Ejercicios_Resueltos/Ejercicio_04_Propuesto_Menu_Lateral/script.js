const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');
const lateral = document.querySelector('#lateral');
function mostrar(abierto, devolverFoco = true) {
  lateral.classList.toggle('abierto', abierto);
  lateral.inert = !abierto;
  lateral.setAttribute('aria-hidden', String(!abierto));
  abrir.setAttribute('aria-expanded', String(abierto));
  if (abierto) cerrar.focus();
  else if (devolverFoco) abrir.focus();
}
abrir.addEventListener('click', () => mostrar(abrir.getAttribute('aria-expanded') !== 'true'));
cerrar.addEventListener('click', () => mostrar(false));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lateral.classList.contains('abierto')) mostrar(false);
});
lateral.querySelectorAll('a').forEach(enlace => enlace.addEventListener('click', () => {
  mostrar(false, false);
  const destino = document.querySelector(enlace.getAttribute('href'));
  destino.setAttribute('tabindex', '-1');
  destino.focus();
}));
