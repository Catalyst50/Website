<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: index.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Dashboard</title>
</head>
<body>
    <h1>Welcome, <?php echo $_SESSION['user']; ?>!</h1>
    <a href="logout.php">Logout</a>
</body>
</html>
