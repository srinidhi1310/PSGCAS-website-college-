document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links (optional, for same-page links)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if it's an internal link to a section on the same page
            // For a multi-page site, this primarily handles the active state
            // and potential future single-page section scrolling.
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form submission handling
    const contacForm = document.getElementById('contac-form');
    if (contacForm) {
        contacForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // In a real application, you would send this data to a server
            // using Fetch API or XMLHttpRequest.
            // For now, let's just simulate success.
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (name && email && subject && message) {
                alert(`Thank you, ${name}! Your message has been sent. We will get back to you at ${email} soon.`);
                contactForm.reset(); // Clear the form
            } else {
                alert('Please fill in all the required fields.');
            }
        });
    }

    // You can add more JavaScript for dynamic elements:
    // - Simple image lightbox for gallery (requires more code or a library)
    // - Animations on scroll (e.g., using Intersection Observer API)
    // - Toggling mobile navigation menu (if implemented)
});