<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page with Login Failed</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        form {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;
        }

        label {
            display: block;
            margin-bottom: 8px;
        }

        input {
            width: 100%;
            padding: 8px;
            margin-bottom: 16px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            background-color: #4caf50;
            color: #fff;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }

        .error-message {
            color: red;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <form id="loginForm">
        <h2>Login</h2>
        <label for="username">Username:</label>
        <input type="text" id="username" required>

        <label for="password">Password:</label>
        <input type="password" id="password" required>

        <button type="button" onclick="login()">Login</button>

        <p class="error-message" id="errorMessage"></p>
    </form>

    <script>
        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessageElement = document.getElementById('errorMessage');

            // Check if the entered credentials are correct (this is just a simple example)
            if (username === 'example' && password === 'password') {
                // Successful login
                alert('Login successful!');
            } else {
                // Failed login
                errorMessageElement.textContent = 'Login failed. Please check your username and password.';
            }
        }
    </script>
</body>
</html>
