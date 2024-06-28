// Intersection Observer for fade-in effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

// Observe all section elements
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Function to set up impact meters
function setupImpactMeters() {
    document.querySelectorAll('.impact-meter').forEach(meter => {
        const impact = parseInt(meter.dataset.impact);
        const bar = meter.querySelector('.meter-bar');
        const width = (impact / 5) * 100;
        const hue = (impact - 1) / 4 * 120; // 0 = red, 120 = green
        bar.style.setProperty('--width', `${width}%`);
        bar.style.setProperty('--color', `hsl(${hue}, 100%, 50%)`);
    });
}

// Function to set up difficulty levels
function setupDifficultyLevels() {
    document.querySelectorAll('.difficulty-level').forEach(level => {
        const difficulty = level.dataset.difficulty;
        const button = level.querySelector('.difficulty-btn');
        button.textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
        button.dataset.difficulty = difficulty;
    });
}

// Initialize everything when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setupImpactMeters();
    setupDifficultyLevels();
});