// script.js

// Let's add some cosmic vibes!
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu li a');
    menuItems.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            alert(`Enjoy your ${item.textContent}! 🌌`);
        });
    });
});
