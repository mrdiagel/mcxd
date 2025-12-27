function abrirModal(nombre, precio, talla, producto) {
  document.getElementById('modal-nombre').innerText = nombre;
  document.getElementById('modal-precio').innerText = precio;
  document.getElementById('modal-talla').innerText = talla;
  document.getElementById('buy-btn').onclick = function() {
    abrirWhatsApp(`Hola, quiero comprar ${nombre} (${producto}), precio ${precio}, talla disponible: ${talla}`);
  };
  document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

function abrirWhatsApp(mensaje) {
  const telefono = "584123456789"; // <-- coloca tu número de WhatsApp aquí con código de país
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}
