// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Theme Toggle (Light/Dark Mode)
const themeToggle = document.createElement("button");
themeToggle.textContent = "Toggle Dark Mode";
themeToggle.style.position = "fixed";
themeToggle.style.top = "10px";
themeToggle.style.right = "10px";
themeToggle.style.padding = "8px 12px";
themeToggle.style.background = "#0073e6";
themeToggle.style.color = "white";
themeToggle.style.border = "none";
themeToggle.style.cursor = "pointer";
themeToggle.style.borderRadius = "5px";
document.body.appendChild(themeToggle);

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Form Validation (Simple)
document.querySelector("form").addEventListener("submit", function (event) {
    let isValid = true;
    const inputs = this.querySelectorAll("input, textarea");

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isValid = false;
            input.style.border = "2px solid red";
        } else {
            input.style.border = "1px solid #ccc";
        }
    });

    if (!isValid) {
        event.preventDefault();
        alert("Please fill in all fields before submitting.");
    }
});
// Scroll-to-top button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.textContent = "↑";
scrollTopBtn.style.position = "fixed";
scrollTopBtn.style.bottom = "20px";
scrollTopBtn.style.right = "20px";
scrollTopBtn.style.padding = "10px";
scrollTopBtn.style.display = "none";
scrollTopBtn.style.borderRadius = "50%";
scrollTopBtn.style.border = "none";
scrollTopBtn.style.background = "#0073e6";
scrollTopBtn.style.color = "white";
scrollTopBtn.style.cursor = "pointer";
scrollTopBtn.title = "Back to top";
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Fade-in animation on scroll
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
