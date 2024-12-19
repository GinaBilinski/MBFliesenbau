document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-on-scroll, .slide-in-left, .slide-in-right");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Klasse für Animation hinzufügen
                observer.unobserve(entry.target); // Stoppt die Beobachtung nach der Animation
            }
        });
    }, {
        threshold: 0.5 // Aktiviert, wenn 50% des Elements sichtbar sind
    });

    elements.forEach((el) => observer.observe(el));
});


