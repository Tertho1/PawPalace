<?php
session_start();
include_once("db_connect.php");

// Debugging output
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Get form data
$emailOrUsername = trim($_POST['email']);
$password = trim($_POST['password']);

// Prepare SQL query to check if user exists
$query = "SELECT * FROM users WHERE (email = ? OR username = ?)";
$stmt = $conn->prepare($query);

if (!$stmt) {
    die('Prepare failed: ' . htmlspecialchars($conn->error));
}

$stmt->bind_param("ss", $emailOrUsername, $emailOrUsername);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();

    // Verify password
    if (password_verify($password, $user['password'])) {
        // Debugging output
        // echo "Password is correct. Redirecting...";
        // die();
    
        // The following won't execute if the above die() is not removed
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['logged_in'] = true;
    
        // Set a cookie to keep the user logged in
        setcookie("user_id", $user['id'], time() + (86400 * 30), "/"); // 30 days expiration
        setcookie("username", $user['username'], time() + (86400 * 30), "/");
        setcookie("logged_in", true, time() + (86400 * 30), "/");
    
        header("Location: home.php"); // Redirect to a protected page after login
        exit();
    }
    else {
        $_SESSION['error'] = "Invalid password!";
        header("Location: login.php");
        exit();
    }
} else {
    $_SESSION['error'] = "User not found!";
    header("Location: login.html");
    exit();
}

$stmt->close();
$conn->close();
?>
