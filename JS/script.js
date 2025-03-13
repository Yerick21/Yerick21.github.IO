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