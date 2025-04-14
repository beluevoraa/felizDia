document.addEventListener("DOMContentLoaded", () => {
  // --- Carrusel de imágenes ---
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
  }

  showSlide(); // Mostrar la primera
  setInterval(showSlide, 5000); // Cambiar cada 5 segundos

}); // ← ahora sí está bien cerrado 😌
