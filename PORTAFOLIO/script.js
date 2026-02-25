// Animación de tarjetas y skills al hacer scroll
window.addEventListener('scroll', () => {
    const tarjetas = document.querySelectorAll('.project-card');
    tarjetas.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });

    const skills = document.querySelectorAll('.skill-badge');
    skills.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});

// Validar formulario de contacto
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    if (nombre && email) {
        alert('Gracias por tu mensaje, ' + nombre + '!');
        e.target.reset();
    }
});
