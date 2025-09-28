// Simple script for handling button clicks
document.addEventListener('DOMContentLoaded', () => {
    // Handle all "Shiko Më shumë" button clicks
    const viewMoreBtns = document.querySelectorAll('.view-more-btn');
    
    viewMoreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cardType = e.target.closest('.info-card').getAttribute('data-card');
            
            // Navigate to different pages based on card type
            if (cardType === 'medicine') {
                window.location.href = 'medicine-details.html';
            } else if (cardType === 'construction') {
                window.location.href = 'construction-details.html';
            } else if (cardType === 'school') {
                window.location.href = 'school-details.html';
            } else if (cardType === 'economic') {
                window.location.href = 'economic-details.html';
            } else if (cardType === 'environment') {
                window.location.href = 'ambientidetails.html';
            } else if (cardType === 'sport') {
                window.location.href = 'sportdetails.html';
            } else if (cardType === 'social') {
                window.location.href = 'socialdetails.html';
            } else {
                window.location.href = 'details.html';
            }
        });
    });
    
    // Add loading animations
    const cards = document.querySelectorAll('.info-card');
    const images = document.querySelectorAll('.image-container');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, index * 200);
    });
    
    images.forEach((image, index) => {
        image.style.opacity = '0';
        image.style.transform = 'translateX(30px)';
        
        setTimeout(() => {
            image.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            image.style.opacity = '1';
            image.style.transform = 'translateX(0)';
        }, index * 200);
    });
    
    // Add hover effects for better UX
    const buttons = document.querySelectorAll('.view-more-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Smooth scrolling for any anchor links
function smoothScrollTo(element, duration = 500) {
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Utility function to add click ripple effect
function addRippleEffect(button) {
    button.addEventListener('click', function(e) {
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
}

// Add ripple effect to all buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.view-more-btn');
    buttons.forEach(addRippleEffect);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .view-more-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);