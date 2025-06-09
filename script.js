// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        // Global settings
        duration: 600, // Animation duration
        once: true, // Whether animation should happen only once
        offset: 50, // Offset from the original trigger point
        easing: 'ease-out', // Easing function for animations
        delay: 0, // Delay before animation starts

        // Settings that can be overridden on per-element basis
        disable: function() {
            // Disable AOS on screens smaller than 768px if needed
            // return window.innerWidth < 768;
            return false;
        }
    });

    // Optional: Add active class to navigation items on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a');

    function setActiveNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Set active nav on scroll
    window.addEventListener('scroll', setActiveNav);

    // Set initial active state
    setActiveNav();
});