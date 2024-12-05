document.querySelector('.email-signup form').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    if (!emailInput.value) {
        alert('Please enter a valid email address.');
        event.preventDefault();  // Prevent form submission if email is empty
    }
});
