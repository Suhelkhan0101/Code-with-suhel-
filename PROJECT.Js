document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageElement = document.getElementById('message');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Basic validation (replace with actual authentication logic)
    if (username === 'user' && password === 'password') {
        messageElement.textContent = 'Login successful!';
        messageElement.className = 'message success';
        // Redirect or perform other actions upon successful login
        // window.location.href = 'dashboard.html'; 
    } else {
        messageElement.textContent = 'Invalid username or password.';
        messageElement.className = 'message error';
    }
});