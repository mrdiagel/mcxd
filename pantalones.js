function abrirWhatsApp(mensaje) {
  const telefono = "0412604242"; // <-- coloca tu número de WhatsApp aquí con código de país
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}
