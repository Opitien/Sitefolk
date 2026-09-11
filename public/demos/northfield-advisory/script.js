document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('nf-hamburger');
    const nav = document.getElementById('nf-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                nav.classList.add('nf-nav--mobile-open');
                document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            } else {
                nav.classList.remove('nf-nav--mobile-open');
                document.body.style.overflow = '';
            }
        });
    }

    // Close mobile nav when clicking a link
    const navLinks = document.querySelectorAll('.nf-nav__list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav && nav.classList.contains('nf-nav--mobile-open')) {
                hamburger.setAttribute('aria-expanded', 'false');
                nav.classList.remove('nf-nav--mobile-open');
                document.body.style.overflow = '';
            }
        });
    });

    // Sticky Header Scroll Effect
    const header = document.getElementById('nf-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('nf-header--scrolled');
            } else {
                header.classList.remove('nf-header--scrolled');
            }
        }, { passive: true });
    }

    // FAQ Accordion - only one open at a time
    const faqDetails = document.querySelectorAll('.nf-faq__item');
    faqDetails.forEach(targetDetail => {
        targetDetail.addEventListener('click', () => {
            faqDetails.forEach(detail => {
                if (detail !== targetDetail) {
                    detail.removeAttribute('open');
                }
            });
        });
    });
});
