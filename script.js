// Function to validate the form
function validateForm() {
    // Get values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var phone = document.getElementById("phone").value;
    var errorMessage = document.getElementById("errorMessage");

    // Clear previous error messages
    errorMessage.textContent = '';

    // Validate password match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false;
    }

    // Simple email validation (basic check for '@' and '.')
    if (!email.includes('@') || !email.includes('.')) {
        errorMessage.textContent = "Please enter a valid email address!";
        return false;
    }

    // Validate phone number format (basic check for 10 digits)
    var phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        errorMessage.textContent = "Please enter a valid phone number (10 digits).";
        return false;
    }

    // If all validations pass
    alert("Registration Successful!");
    return true;
}
