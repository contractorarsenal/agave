// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Header scroll effect
const body = document.body;
const header = document.getElementById('header');
const hasHeroFullwidth = document.querySelector('.hero-fullwidth');

// Add class to body if hero exists (for CSS targeting)
if (hasHeroFullwidth) {
    body.classList.add('has-fullwidth-hero');
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll Animation - Fade in elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('section, .feature-card, .feature-card-compact, .service-card, .step, .portfolio-card, .credential-item, .credential-highlight');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Stagger animation for cards
    document.querySelectorAll('.features-grid, .services-grid, .steps-grid, .portfolio-grid').forEach(grid => {
        const cards = grid.querySelectorAll('.feature-card, .service-card, .step, .portfolio-card, .feature-card-compact');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    });
});

// Smooth scroll for anchor links
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

// Form submission handling (Formspree integration)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.form-submit');
        const formSuccess = document.getElementById('formSuccess');
        const originalHTML = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> SENDING...';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success message
                if (formSuccess) {
                    formSuccess.style.display = 'block';
                }
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    if (formSuccess) {
                        formSuccess.style.display = 'none';
                    }
                }, 5000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            alert('Oops! There was a problem submitting your form. Please try calling us directly at (425) 446-1638.');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
        }
    });
}
