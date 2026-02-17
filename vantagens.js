
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { 
    threshold: 0.1 
});


document.addEventListener('DOMContentLoaded', function() {

    const animatedElements = document.querySelectorAll(
        '.feature-card, .support-card, .quality-card, .testimonial-card, .guarantee-item, .stat-card'
    );
    

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

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

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
            const target = entry.target.textContent;
            const numericValue = parseInt(target.replace(/\D/g, ''));
            if (!isNaN(numericValue)) {
                entry.target.dataset.counted = 'true';
                animateCounter(entry.target, numericValue);
            }
        }
    });
}, { threshold: 0.5 });


document.querySelectorAll('.stat-number, .quality-number').forEach(el => {
    counterObserver.observe(el);
});

document.querySelectorAll('.comparison-row').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'var(--bg-white)';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});