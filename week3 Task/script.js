
document.addEventListener("DOMContentLoaded", function () {

    // 1. Mobile navigation menu
    const menuButton = document.getElementById("menu-toggle");
    const navigation = document.getElementById("primary-nav");

    menuButton.addEventListener("click", function () {
        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.textContent = isOpen ? "✕ Close" : "☰ Menu";
    });

    // Close menu after clicking a navigation link
    navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.textContent = "☰ Menu";
        });
    });

    // 2. Automatically update the footer year
    document.getElementById("current-year").textContent =
        new Date().getFullYear();

    // 3. Contact form validation
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        formMessage.className = "";

        if (name.length < 2) {
            showMessage("Please enter a name with at least 2 characters.", "error");
            return;
        }

        if (!emailPattern.test(email)) {
            showMessage("Please enter a valid email address.", "error");
            return;
        }

        if (message.length < 10) {
            showMessage("Your message must contain at least 10 characters.", "error");
            return;
        }

        showMessage("Thank you! Your form has been validated successfully.", "success");
        form.reset();
    });

    function showMessage(text, className) {
        formMessage.textContent = text;
        formMessage.classList.add(className);
    }

});
