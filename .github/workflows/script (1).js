// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target element to scroll to
        const target = document.querySelector(this.getAttribute('href'));
        
        // Scroll smoothly to the target
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Validation (for example in a future 'Enroll Now' form)
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
   

    // Check if both fields are filled out
    if (name === "" || email === "") {
        alert("Please fill out both fields.");
        return false;
    }
    
    // Check if the email is valid
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Example of using validateForm in a form submission
document.getElementById("enrollForm").addEventListener("submit", function(e) {
    if (!validateForm()) {
        e.preventDefault();
    }
});
