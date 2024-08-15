// script for logic behind contact box. Asks for email.

document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Here, we are defining the function for an event listener upon a submission attempt.
    // event: the input or event of the function
    // 'submit': name of the event
    // element id is "contactForm".
    event.preventDefault();

    // If submissions errors out, clear fields of all erroring elements.
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(field => field.style.display = 'none');

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation flags
    let isValid = true;

    // Name validation, if empty
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email validation, if empty or not written in a valid email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Message validation, if empty
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    // If form is valid, you can submit it or perform any other action
    if (isValid) {
        alert('Form submitted successfully!');
        // You can also submit the form here using AJAX or similar methods
    }
});

