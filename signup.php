<?php
// Start the session
session_start();

// Include database connection file
include_once("db_connect.php");

// Get form data
$firstName = trim($_POST['first-name']);
$lastName = trim($_POST['last-name']);
$email = trim($_POST['email']);
$username = trim($_POST['username']);
$password = trim($_POST['password']);
$rePassword = trim($_POST['re-password']);

// Check if passwords match
if ($password !== $rePassword) {
    $_SESSION['error'] = "Passwords do not match!";
    header("Location: signup.html");
    exit();
}

// Hash the password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Prepare SQL query
$query = "INSERT INTO users (first_name, last_name, email, username, password) 
          VALUES (?, ?, ?, ?, ?)";

// Create a prepared statement
$stmt = $conn->prepare($query);

// Bind parameters to the statement
$stmt->bind_param("sssss", $firstName, $lastName, $email, $username, $hashedPassword);

// Execute the statement
if ($stmt->execute()) {
    $_SESSION['success'] = "Signup successful! You can now log in.";
    header("Location: login.html");
} else {
    $_SESSION['error'] = "Signup failed. Please try again.";
    header("Location: signup.html");
}

// Close statement and connection
$stmt->close();
$conn->close();
?>
