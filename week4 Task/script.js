
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");
    const year = document.getElementById("current-year");

    // Update the footer year automatically.
    year.textContent = new Date().getFullYear();

    // Validate form input before showing success feedback.
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        feedback.className = "";

        if (name.length < 2) {
            showFeedback(
                "Please enter a name with at least 2 characters.",
                "error"
            );
            document.getElementById("name").focus();
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showFeedback("Please enter a valid email address.", "error");
            document.getElementById("email").focus();
            return;
        }

        if (message.length < 10) {
            showFeedback(
                "Please enter a message with at least 10 characters.",
                "error"
            );
            document.getElementById("message").focus();
            return;
        }

        showFeedback(
            "Your form has been validated successfully.",
            "success"
        );

        form.reset();
    });

    function showFeedback(message, type) {
        feedback.textContent = message;
        feedback.classList.add(type);
    }
});
