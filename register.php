<?php
include 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['Name'];
    $email = $_POST['E-mail'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Hash the password

    // Check if the email already exists
    $check_email = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($check_email);

    if ($result->num_rows > 0) {
        echo "Email already registered. Try logging in.";
    } else {
        // Insert user data
        $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

        if ($conn->query($sql) === TRUE) {
            echo "Registration successful! You can now log in.";
        } else {
            echo "Error: " . $conn->error;
        }
    }
}

$conn->close();
?>
