document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000,
        once: true,
    });

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for header height
                behavior: "smooth"
            });
        });
    });
});
