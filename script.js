// Scroll Event Listener for background color change
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    // Add 'scroll-dark' class when the user scrolls down 400px or more
    if (scrollPosition > 400) {
        document.body.classList.add('scroll-dark');
    } else {
        document.body.classList.remove('scroll-dark');
    }
});

// Smooth scrolling for navigation links
// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

