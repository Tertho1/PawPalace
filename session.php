<?php
// session.php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
} // Start the session if not already started

// Check if the user is logged in via session or cookie
if (isset($_COOKIE['logged_in']) && !isset($_SESSION['logged_in'])) {
    // If a valid cookie exists but the session is expired, restore the session
    $_SESSION['user_id'] = $_COOKIE['user_id'];
    $_SESSION['username'] = $_COOKIE['username'];
    $_SESSION['logged_in'] = true;
}
?>
