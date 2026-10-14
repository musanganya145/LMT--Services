// ==================== MENU MOBILE ====================
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Fermer le menu au clic sur un lien (mobile)
document.querySelectorAll('.nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// ==================== FORMULAIRE DE CONTACT ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    // Validation simple
    if (!name || !email || !subject || !message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }

    // Simuler l'envoi (remplacer par un vrai envoi via backend)
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    btn.disabled = true;

    setTimeout(() => {
        alert('Merci pour votre message ! Nous vous contacterons dans les plus brefs délais.');
        contactForm.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 1500);
});

// ==================== NEWSLETTER ====================
const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    const email = input.value.trim();

    if (!email || !email.includes('@') || !email.includes('.')) {
        alert('Veuillez entrer un email valide.');
        return;
    }

    alert('Merci de vous être abonné(e) à notre newsletter !');
    newsletterForm.reset();
});

// ==================== ANIMATION AU SCROLL ====================
// Détecte l'apparition des éléments dans la fenêtre
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Ajouter une classe avec un délai progressif
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

// Cibler les cartes de service et les éléments de la galerie
document.querySelectorAll('.service-card, .gallery-item, .apropos-content, .contact-form, .contact-info').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== EFFET DE SCROLL SUR LE HEADER ====================
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.background = 'rgba(10, 26, 42, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
        header.style.background = '#0a1a2a';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    }

    lastScroll = currentScroll;
});