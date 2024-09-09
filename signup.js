document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phonenumber').value.trim();
    const address = document.getElementById('address').value.trim();

    let message = '';

    if (!name || !email ||!phone ||!address) {
        message = 'All fields are required!';
    } else {
        message = 'Sign up successful! Welcome, dog lover!';
    }

    document.getElementById('formMessage').innerText = message;
});
