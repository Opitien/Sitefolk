/* =============================================================
   APEX PLUMBING — script.js
   Vanilla JavaScript. No frameworks or libraries.
   ============================================================= */

(function () {
    'use strict';

    // ---- DOM References ----
    var header   = document.getElementById('apex-header');
    var hamburger = document.getElementById('apex-hamburger');
    var nav       = document.getElementById('apex-nav');
    var form      = document.getElementById('apex-form');

    // ---- Mobile Navigation Toggle ----
    if (hamburger && nav) {
        hamburger.addEventListener('click', function () {
            var isOpen = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', String(!isOpen));
            hamburger.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
            nav.classList.toggle('apex-nav--mobile-open', !isOpen);

            // Prevent body scroll when menu is open
            document.body.style.overflow = isOpen ? '' : 'hidden';
        });

        // Close mobile nav when a link is clicked
        var navLinks = nav.querySelectorAll('a');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', closeMobileNav);
        }
    }

    function closeMobileNav() {
        if (!hamburger || !nav) return;
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');
        nav.classList.remove('apex-nav--mobile-open');
        document.body.style.overflow = '';
    }

    // ---- Header scroll effect ----
    if (header) {
        var scrollThreshold = 40;
        var ticking = false;

        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    if (window.scrollY > scrollThreshold) {
                        header.classList.add('apex-header--scrolled');
                    } else {
                        header.classList.remove('apex-header--scrolled');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // ---- FAQ Accordion (one-at-a-time) ----
    var faqItems = document.querySelectorAll('.apex-faq__item');
    if (faqItems.length > 0) {
        for (var j = 0; j < faqItems.length; j++) {
            faqItems[j].addEventListener('toggle', function () {
                if (this.open) {
                    // Close other open items
                    for (var k = 0; k < faqItems.length; k++) {
                        if (faqItems[k] !== this && faqItems[k].open) {
                            faqItems[k].open = false;
                        }
                    }
                }
            });
        }
    }

    // ---- Demo form submission handler ----
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var submitBtn = form.querySelector('.apex-form__submit');
            var originalText = submitBtn.textContent;

            submitBtn.textContent = 'Sent! (Demo)';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            setTimeout(function () {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '';
                form.reset();
            }, 2500);
        });
    }

    // ---- Smooth scroll for mobile bar links ----
    var mobileCTA = document.getElementById('apex-mobile-bar');
    if (mobileCTA) {
        var quoteLink = mobileCTA.querySelector('a[href="#contact"]');
        if (quoteLink) {
            quoteLink.addEventListener('click', function (e) {
                var target = document.getElementById('contact');
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }

})();
