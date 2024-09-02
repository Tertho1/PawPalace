function updateButtonActions() {
    fetch('check_login.php')
        .then(response => response.json())
        .then(data => {
            if (data.logged_in) {
                // User is logged in
                document.querySelector(".login1").onclick = function () {
                    window.location.href = 'profile.html';
                };
                document.querySelector(".signup1").onclick = function () {
                    window.location.href = 'logout.php';
                };
                // Optionally, update button text or other properties
                document.querySelector(".login1").textContent = "Profile";
                document.querySelector(".signup1").textContent = "Logout";
            } else {
                // User is not logged in
                document.querySelector(".login1").onclick = function () {
                    window.location.href = 'login.html';
                };
                document.querySelector(".signup1").onclick = function () {
                    window.location.href = 'signup.html';
                };
            }
        });
}
document.addEventListener('DOMContentLoaded', updateButtonActions);