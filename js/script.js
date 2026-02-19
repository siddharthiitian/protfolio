/**
 * Typewriter effect for elements with 'data-typewriter' attribute.
 */
function initTypewriter() {
    const elements = document.querySelectorAll('[data-typewriter]');
    elements.forEach(el => {
        const text = el.getAttribute('data-typewriter') || el.innerText;
        el.innerText = '';
        let i = 0;
        const speed = parseInt(el.getAttribute('data-typewriter-speed')) || 50;

        function type() {
            if (i < text.length) {
                el.innerText += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
});
