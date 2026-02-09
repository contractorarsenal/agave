// ========================================
// MOBILE MENU - SIMPLE VERSION THAT WORKS
// ========================================

console.log('🔧 Mobile menu script loading...');

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('navLinks');
    
    console.log('Toggle:', toggle);
    console.log('Menu:', menu);
    
    if (!toggle || !menu) {
        console.error('❌ MISSING ELEMENTS');
        return;
    }
    
    console.log('✅ MENU READY');
    
    // Simple click handler
    toggle.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('🍔 HAMBURGER CLICKED');
        
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            toggle.classList.remove('open');
            console.log('❌ CLOSED');
        } else {
            menu.classList.add('active');
            toggle.classList.add('open');
            console.log('✅ OPENED');
        }
    };
    
    // Close on link click
    const links = menu.querySelectorAll('a');
    links.forEach(function(link) {
        link.onclick = function() {
            menu.classList.remove('active');
            toggle.classList.remove('open');
            console.log('🔗 CLOSED BY LINK');
        };
    });
    
    console.log('👍 Menu handlers attached');
});

// ========================================
// HEADER SCROLL
// ========================================

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});
