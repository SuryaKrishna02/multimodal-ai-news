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

// Function to update the impact meter color based on its value
function updateImpactMeterColor(meter) {
    const value = meter.value;
    const hue = (value / 10) * 120; // 0 = red, 120 = green
    meter.style.background = `hsl(${hue}, 100%, 50%)`;
}

// Initialize and add event listeners to all impact meters
document.querySelectorAll('.impact-meter input[type="range"]').forEach(meter => {
    updateImpactMeterColor(meter);
    meter.addEventListener('input', () => updateImpactMeterColor(meter));
});

// Function to add visual feedback when clicking on "Explore more" links
document.querySelectorAll('.explore-more').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        link.classList.add('clicked');
        setTimeout(() => link.classList.remove('clicked'), 300);
    });
});

// Add hover effect to difficulty level selects
document.querySelectorAll('.difficulty-level select').forEach(select => {
    select.addEventListener('mouseover', () => {
        select.style.borderColor = 'var(--accent-color)';
    });
    select.addEventListener('mouseout', () => {
        select.style.borderColor = 'var(--primary-color)';
    });
});