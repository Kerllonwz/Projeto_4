// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito de parallax no hero
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    const scrollPosition = window.pageYOffset;
    
    if (heroBackground) {
        heroBackground.style.transform = `translate(${scrollPosition * 0.1}px, ${scrollPosition * 0.1}px)`;
    }
});

// Animação ao entrar na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animar seções
document.querySelectorAll('.sobre, .elenco, .criticas, .cta').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Animar cards
document.querySelectorAll('.elenco-card, .critica-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Menu responsivo
const createMobileMenu = () => {
    const header = document.querySelector('.header');
    const navbar = document.querySelector('.navbar .container');
    
    if (window.innerWidth <= 768) {
        // Menu mobile pode ser adicionado aqui se necessário
    }
};

// Scroll animation for header
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.2)';
    } else {
        header.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Event listeners para botões
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        console.log('Botão clicado:', this.textContent);
        // Aqui você pode adicionar ações para os botões
        if (this.textContent.includes('Trailer')) {
            alert('Link do trailer será aberto em breve!');
        } else if (this.textContent.includes('Mais')) {
            document.querySelector('#sobre').scrollIntoView({ behavior: 'smooth' });
        } else if (this.textContent.includes('Assistir')) {
            alert('Redirecionando para plataforma de streaming...');
        }
    });
});

// Precarregar imagens
window.addEventListener('load', () => {
    document.querySelectorAll('img').forEach(img => {
        img.style.transition = 'all 0.3s ease';
    });
});

console.log('Landing page INCEPTION carregada com sucesso!');
