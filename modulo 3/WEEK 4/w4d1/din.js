function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight && rect.bottom >= 0
    );
}

function showOnScroll() {
    const rows = document.querySelectorAll('.row'); 
    rows.forEach(row => {
        if (isElementInViewport(row)) {
            row.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);


