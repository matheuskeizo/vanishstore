
function filterServices(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('[data-category]');
    

    buttons.forEach(btn => btn.classList.remove('active'));
    

    event.target.classList.add('active');
    

    if (category === 'all') {
        sections.forEach(section => section.style.display = 'block');
    } else {
        sections.forEach(section => {
            section.style.display = section.dataset.category === category ? 'block' : 'none';
        });
    }
}


function toggleFAQ(element) {
    const wasActive = element.classList.contains('active');
    

    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    

    if (!wasActive) {
        element.classList.add('active');
    }
}


document.addEventListener('DOMContentLoaded', function() {
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
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });


document.querySelectorAll('.product-card, .elojob-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});