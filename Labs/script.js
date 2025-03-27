document.getElementById("sienaForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    validateForm(); // Call the validation function
});

function validateEmail(email) {
    if (!email) {
        return "Please enter your Siena College email.";
    }
    if (!email.endsWith("@siena.edu")) {
        return "Invalid email. Use your Siena College email ending in '@siena.edu'.";
    }
    return ""; // No errors => Return empty string.
}

function validateSienaID(sienaID) {
    // Your code here: return an error message if the input is empty or not a number
    if (!sienaID) {
        return "Siena ID is required.";
    }
    if (isNaN(sienaID)) {
        return "Siena ID must be a number.";
    }
    return "";
}

function validateForm() {
    const emailInput = document.getElementById("emailAddress");
    const sienaIDInput = document.getElementById("sienaID");
    const emailError = document.getElementById("emailError");
    const sienaIDError = document.getElementById("sienaIDError");

    // Clear previous error messages
    emailError.textContent = "";
    sienaIDError.textContent = "";

    // Run validation checks
    const emailValidationMessage = validateEmail(emailInput.value.trim());

    // Display errors if any
    let isValid = true;
    if (emailValidationMessage) {
        emailError.textContent = emailValidationMessage;
        isValid = false;
    }
    // << ADD CODE HERE >>
    // Do something similar for SienaID error handling.
    const idValidationMessage = validateSienaID(sienaIDInput.value.trim());

    let valid = true;
    if (idValidationMessage) {
        sienaIDError.textContent = idValidationMessage;
        valid = false;
    }

    // If both are valid, submit the form
    if (isValid && valid) {
        console.log("Form is valid! Submitting...");
        submitRequest();
    }
}

function submitRequest(){
    
}