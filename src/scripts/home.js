// Intersection Observer for fade-in effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.team-member').forEach(member => {
    member.style.opacity = 0;
    member.style.transform = 'translateY(50px)';
    member.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(member);
});