// Cambiar el iconoWeb dinámicamente para lograr animación
const iconos = ["style/img/un-pan.png", "style/img/bollo.png", "style/img/empanada.png"]; // Frames individuales
let frameIndex = 0;

setInterval(() => {
  const iconoWeb = document.getElementById('iconoWeb');
  iconoWeb.href = iconos[frameIndex];
  frameIndex = (frameIndex + 1) % iconos.length;
}, 1000); // Cambia cada 200ms