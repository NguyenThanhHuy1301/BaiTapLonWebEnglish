// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize contact page functionality
    initContactPage();
});

function initContactPage() {
    // Facebook link click tracking (optional)
    const facebookLink = document.getElementById('facebook-link');
    if (facebookLink) {
        facebookLink.addEventListener('click', function() {
            console.log('Facebook link clicked');
            // You can add analytics tracking here if needed
        });
    }

    // Email link click tracking
    const emailLink = document.getElementById('email-link');
    if (emailLink) {
        emailLink.addEventListener('click', function() {
            console.log('Email link clicked');
            // You can add analytics tracking here if needed
        });
    }

    // Add smooth scroll animation for cards
    const contactCards = document.querySelectorAll('.contact-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initialize card animations
    contactCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add animation for info cards
    const infoCards = document.querySelectorAll('.contact-info-card');
    infoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, (contactCards.length * 100) + (index * 150));
    });

    // Copy email to clipboard functionality
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            // Allow default mailto behavior, but also copy to clipboard
            const email = 'contact@utc2.edu.vn';
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(() => {
                    // Show temporary feedback
                    const originalHTML = emailLink.innerHTML;
                    emailLink.innerHTML = '<i class="fa-solid fa-check"></i> Email đã được sao chép!';
                    emailLink.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
                    
                    setTimeout(() => {
                        emailLink.innerHTML = originalHTML;
                        emailLink.style.background = '';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy email:', err);
                });
            }
        });
    }

    // Add hover effect enhancement
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });
}

// Export functions if needed
window.initContactPage = initContactPage;

