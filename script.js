document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    // Animación de aparición al hacer scroll
    const productos = document.querySelectorAll(".producto");

    const mostrarProductos = () => {
        productos.forEach((producto) => {
            const rect = producto.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                producto.classList.add("opacity-100");
                producto.style.opacity = 1;
                producto.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", mostrarProductos);
    mostrarProductos(); // Llamado inicial para los productos visibles
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((reg) => {
          console.log('Service Worker registrado con éxito:', reg.scope);
        })
        .catch((err) => {
          console.log('Error al registrar el Service Worker:', err);
        });
    });
  }
  