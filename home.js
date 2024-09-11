
function updateButtonActions() {
    fetch('check_login.php')
        .then(response => response.json())
        .then(data => {
            if (data.logged_in) {
                document.querySelector(".post-adoption-btn").onclick = () => {
                    window.location.href = "post-adoption.php";
                }
            } else {
                document.querySelector(".post-adoption-btn").onclick = () => {
                    window.location.href = "login.php";
                }

            }
        });
}
document.addEventListener('DOMContentLoaded', updateButtonActions);

