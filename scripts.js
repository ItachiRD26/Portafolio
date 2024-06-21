document.addEventListener('DOMContentLoaded', () => {
    // Animación de scroll suave
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efecto parallax en el header
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        document.querySelector('header').style.backgroundPositionY = `${scrollPos * 0.5}px`;
    });
});
