// ========================================
// MOBILE MENU - NUCLEAR OPTION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('navLinks');
    
    if (!toggle || !menu) {
        console.error('MISSING ELEMENTS');
        return;
    }
    
    console.log('MENU READY');
    
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        
        const isOpen = menu.style.left === '0px';
        
        if (isOpen) {
            menu.style.left = '-100%';
            toggle.classList.remove('open');
            console.log('CLOSED');
        } else {
            menu.style.left = '0px';
            toggle.classList.add('open');
            console.log('OPENED');
        }
    });
    
    // Close on link click
    const links = menu.querySelectorAll('a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            menu.style.left = '-100%';
            toggle.classList.remove('open');
        });
    });
});

// ========================================
// HEADER SCROLL - SIMPLE
// ========================================

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
