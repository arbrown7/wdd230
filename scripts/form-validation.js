document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const rating = document.getElementById("rating").value;

    let isValid = true; // Tracks overall form validity

    // Check each field and update validity status
    if (!validateEmail(email)) {
        showErrorMessage("emailFeedback", "Please enter a valid email address.");
        isValid = false;
    } else {
        clearErrorMessage("emailFeedback");
    }

    if (!validatePassword(password)) {
        showErrorMessage("passwordFeedback", "Password must be at least 8 characters, with one uppercase letter, one lowercase letter, and one number.");
        isValid = false;
    } else {
        clearErrorMessage("passwordFeedback");
    }

    if (password !== confirmPassword) {
        showErrorMessage("confirmPasswordFeedback", "Passwords do not match.");
        isValid = false;
    } else {
        clearErrorMessage("confirmPasswordFeedback");
    }

    // Helper function to show error message
    function showErrorMessage(id, message) {
        const feedbackElement = document.getElementById(id);
        feedbackElement.textContent = message;
        feedbackElement.style.display = "block";
    }

    // Helper function to clear error message
    function clearErrorMessage(id) {
        const feedbackElement = document.getElementById(id);
        feedbackElement.textContent = "";
        feedbackElement.style.display = "none";
    }

    // Email validation function
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Password validation function
    function validatePassword(password) {
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordPattern.test(password);
    }
});

// Real-time validation for email field
document.getElementById("email").addEventListener("input", function() {
    if (validateEmail(this.value)) {
        clearErrorMessage("emailFeedback");
    } else {
        showErrorMessage("emailFeedback", "Please enter a valid email address.");
    }
});

// Real-time validation for password field
document.getElementById("password").addEventListener("input", function() {
    if (validatePassword(this.value)) {
        clearErrorMessage("passwordFeedback");
    } else {
        showErrorMessage("passwordFeedback", "Password must be at least 8 characters, with one uppercase letter, one lowercase letter, and one number.");
    }
});

// Real-time validation for confirm password field
document.getElementById("confirmPassword").addEventListener("input", function() {
    if (this.value === document.getElementById("password").value) {
        clearErrorMessage("confirmPasswordFeedback");
    } else {
        showErrorMessage("confirmPasswordFeedback", "Passwords do not match.");
    }
});
