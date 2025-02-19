<?php
include 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['E-mail'];
    $password = $_POST['password'];

    // Check if the user exists
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        
        // Verify password
        if (password_verify($password, $user['password'])) {
            session_start();
            $_SESSION['user'] = $user['name'];

            // Redirect to the dashboard or homepage after successful login
            header("Location: dashboard.php");
            exit(); // Make sure to stop further script execution
        } else {
            echo "Incorrect password.";
        }
    } else {
        echo "User not found. Please register.";
    }
}

$conn->close();
?>

