// ============================================
// PREMIUM INTERACTIVE EFFECTS
// ============================================

// Cursor Follower
const cursorFollower = document.querySelector('.cursor-follower');
const cursorDot = document.querySelector('.cursor-dot');

if (cursorFollower && cursorDot) {
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let dotX = 0;
    let dotY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorFollower.classList.add('active');
        cursorDot.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('active');
        cursorDot.classList.remove('active');
    });

    // Smooth follower animation
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';

        dotX += (mouseX - dotX) * 0.3;
        dotY += (mouseY - dotY) * 0.3;
        
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';

        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .qualification-card, .current-item, .nav-link');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorFollower.style.width = '60px';
            cursorFollower.style.height = '60px';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorFollower.style.width = '40px';
            cursorFollower.style.height = '40px';
        });
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up, .fade-in-left').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    const scrollPosition = window.pageYOffset + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Magnet Effect
const magnetElements = document.querySelectorAll('.magnet-effect');

magnetElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const moveX = x * 0.15;
        const moveY = y * 0.15;
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0, 0)';
    });
});

// Ripple Effect
const rippleElements = document.querySelectorAll('.ripple-effect');

rippleElements.forEach(element => {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Parallax Effect
const parallaxElements = document.querySelectorAll('.section-background-pattern, .section-geometric-pattern');

function updateParallax() {
    const scrollTop = window.pageYOffset;
    
    parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        const yPos = -(scrollTop * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
}

window.addEventListener('scroll', updateParallax);

// Enhanced Particle Animation
const particles = document.querySelectorAll('.particle');

particles.forEach((particle, index) => {
    const randomDelay = Math.random() * 5;
    const randomDuration = 15 + Math.random() * 10;
    
    particle.style.animationDelay = randomDelay + 's';
    particle.style.animationDuration = randomDuration + 's';
});

// Character Animation on Scroll
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const chars = heroTitle.querySelectorAll('.char');
    chars.forEach((char, index) => {
        char.style.setProperty('--char-index', index);
    });
}

// Staggered Animation for Cards
function animateCards() {
    const cards = document.querySelectorAll('.qualification-card, .current-item');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(card);
        }, index * 50);
    });
}

// Initialize on load
window.addEventListener('load', () => {
    animateCards();
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const throttledParallax = throttle(updateParallax, 10);
const throttledActiveNav = throttle(updateActiveNav, 100);

window.addEventListener('scroll', () => {
    throttledParallax();
    throttledActiveNav();
});

// Ripple CSS is defined in styles.css

