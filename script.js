// Wait for the DOM to load before executing the scripts
document.addEventListener("DOMContentLoaded", function() {

    // Example: Basic form validation for "Sign Up" and "Sign In"
    
    // Sign Up Form Validation
    const signUpForm = document.querySelector('form[action="#"][method="POST"]');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            let valid = true;

            // Get form fields
            const name = signUpForm.querySelector('#name');
            const email = signUpForm.querySelector('#email');
            const password = signUpForm.querySelector('#password');

            // Validate name
            if (name.value.trim() === "") {
                alert("Please enter your full name.");
                valid = false;
            }

            // Validate email
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email.value)) {
                alert("Please enter a valid email address.");
                valid = false;
            }

            // Validate password
            if (password.value.length < 6) {
                alert("Password should be at least 6 characters.");
                valid = false;
            }

            // Prevent form submission if invalid
            if (!valid) {
                event.preventDefault();
            }
        });
    }

    // Sign In Form Validation
    const signInForm = document.querySelector('form[action="#"][method="POST"]');
    if (signInForm) {
        signInForm.addEventListener('submit', function(event) {
            let valid = true;

            // Get form fields
            const email = signInForm.querySelector('#email');
            const password = signInForm.querySelector('#password');

            // Validate email
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email.value)) {
                alert("Please enter a valid email address.");
                valid = false;
            }

            // Validate password
            if (password.value.length < 6) {
                alert("Password should be at least 6 characters.");
                valid = false;
            }

            // Prevent form submission if invalid
            if (!valid) {
                event.preventDefault();
            }
        });
    }

    // Example: Form submission (for example, in Contact Us page)
    const contactUsForm = document.querySelector('form[action="#"][method="POST"]');
    if (contactUsForm) {
        contactUsForm.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent actual form submission for demo
            const name = contactUsForm.querySelector('#name').value;
            const email = contactUsForm.querySelector('#email').value;
            const message = contactUsForm.querySelector('#message').value;
            console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

            // Show confirmation message
            alert('Thank you for contacting us! We will get back to you shortly.');
        });
    }

    // Example: Alert user when they reach the homepage
    const homePageAlert = document.querySelector('.hero');
    if (homePageAlert) {
        homePageAlert.addEventListener('click', function() {
            alert("Welcome to our website!");
        });
    }
    // Services Page - Toggle "More Info" Details for Services
    const toggleButtons = document.querySelectorAll('.toggle-details-btn');
    if (toggleButtons) {
        toggleButtons.forEach(button => {
            button.addEventListener('click', function() {
                const longDescription = this.nextElementSibling;

                if (longDescription.style.display === 'none' || longDescription.style.display === '') {
                    longDescription.style.display = 'block';
                    this.textContent = 'Less Info';
                } else {
                    longDescription.style.display = 'none';
                    this.textContent = 'More Info';
                }
            });
        });
    }
    

});
