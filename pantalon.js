function abrirWhatsApp(mensaje) {
  const telefono = "584123456789"; // <-- coloca tu número de WhatsApp aquí con código de país
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}
