document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const formSuccess = document.getElementById('formSuccess');
    const inputs = contactForm.querySelectorAll('input, textarea');

    // Validate on submit
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Reset error messages
        document.querySelectorAll('.error-message').forEach(el => {
            el.style.display = 'none';
            el.textContent = '';
        });

        // Validate each field
        inputs.forEach(input => {
            const errorElement = input.nextElementSibling;
            
            if (!input.value.trim()) {
                errorElement.textContent = 'This field is required';
                errorElement.style.display = 'block';
                isValid = false;
            } else if (input.type === 'email' && !validateEmail(input.value)) {
                errorElement.textContent = 'Please enter a valid email address';
                errorElement.style.display = 'block';
                isValid = false;
            }
        });

        // If form is valid, show success message
        if (isValid) {
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Reset form after 3 seconds
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                formSuccess.style.display = 'none';
            }, 3000);
        }
    });

    // Validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const errorElement = input.nextElementSibling;
            
            if (!input.value.trim()) {
                errorElement.textContent = 'This field is required';
                errorElement.style.display = 'block';
            } else if (input.type === 'email' && !validateEmail(input.value)) {
                errorElement.textContent = 'Please enter a valid email address';
                errorElement.style.display = 'block';
            } else {
                errorElement.style.display = 'none';
            }
        });
    });
});