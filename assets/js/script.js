// toogle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// theme toggle
let themeToggle = document.querySelector('#theme-toggle');
let body = document.querySelector('body');

// Save user preference in localStorage
themeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-theme');

    // Toggle icon between moon and sun
    themeToggle.classList.toggle('fa-moon', !isDarkMode);
    themeToggle.classList.toggle('fa-sun', isDarkMode);

    // Save user preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Load user preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.classList.add('fa-sun');
        themeToggle.classList.remove('fa-moon');
    }
});

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({
    // reset: true,
    distance: '50px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .education-container, .about-content', { origin: 'right'});