document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hv-hamburger');
    const nav = document.getElementById('hv-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                nav.classList.add('hv-nav--mobile-open');
                document.body.style.overflow = 'hidden';
            } else {
                nav.classList.remove('hv-nav--mobile-open');
                document.body.style.overflow = '';
            }
        });
    }

    // Close mobile nav when clicking a link
    const navLinks = document.querySelectorAll('.hv-nav__list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav && nav.classList.contains('hv-nav--mobile-open')) {
                hamburger.setAttribute('aria-expanded', 'false');
                nav.classList.remove('hv-nav--mobile-open');
                document.body.style.overflow = '';
            }
        });
    });

    // Sticky Header Scroll Effect
    const header = document.getElementById('hv-header');
    const hero = document.getElementById('home');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('hv-header--scrolled');
                header.classList.remove('hv-header--dark-mode');
            } else {
                header.classList.remove('hv-header--scrolled');
                if (hero) {
                    header.classList.add('hv-header--dark-mode');
                }
            }
        }, { passive: true });
        
        // Initial check
        if (window.scrollY <= 50 && hero) {
            header.classList.add('hv-header--dark-mode');
        }
    }

    // Form Toggle (Selling / Letting)
    const toggleBtns = document.querySelectorAll('.hv-toggle-btn');
    const enquiryTypeInput = document.getElementById('enquiry_type');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            toggleBtns.forEach(b => b.classList.remove('is-active'));
            // Add active class to clicked
            e.target.classList.add('is-active');
            // Update hidden input
            if (enquiryTypeInput) {
                enquiryTypeInput.value = e.target.dataset.type;
            }
        });
    });

    // Reveal Animations using Intersection Observer
    const revealElements = document.querySelectorAll('.hv-reveal');
    
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
