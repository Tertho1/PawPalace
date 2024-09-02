<?php
session_start();
session_unset(); // Unset all session variables
session_destroy(); // Destroy the session

// Clear cookies
setcookie("user_id", "", time() - 3600, "/");
setcookie("username", "", time() - 3600, "/");
setcookie("logged_in", "", time() - 3600, "/");

header("Location: home.php"); // Redirect to login page after logout
exit();
?>
