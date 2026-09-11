document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('an-hamburger');
    const nav = document.getElementById('an-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                nav.classList.add('an-nav--mobile-open');
                document.body.style.overflow = 'hidden';
            } else {
                nav.classList.remove('an-nav--mobile-open');
                document.body.style.overflow = '';
            }
        });
    }

    // Close mobile nav when clicking a link
    const navLinks = document.querySelectorAll('.an-nav__list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav && nav.classList.contains('an-nav--mobile-open')) {
                hamburger.setAttribute('aria-expanded', 'false');
                nav.classList.remove('an-nav--mobile-open');
                document.body.style.overflow = '';
            }
        });
    });

    // Sticky Header Scroll Effect
    const header = document.getElementById('an-header');
    const hero = document.getElementById('home');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('an-header--scrolled');
                header.classList.remove('an-header--dark-mode');
            } else {
                header.classList.remove('an-header--scrolled');
                if (hero) {
                    header.classList.add('an-header--dark-mode');
                }
            }
        }, { passive: true });
        
        // Initial check
        if (window.scrollY <= 50 && hero) {
            header.classList.add('an-header--dark-mode');
        }
    }

    // Reveal Animations using Intersection Observer
    const revealElements = document.querySelectorAll('.an-reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
