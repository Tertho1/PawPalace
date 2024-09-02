
document.querySelector('.dropbtn').addEventListener('click', function () {
    document.querySelector('.dropdown-content').classList.toggle('show');
});


window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
// Function to check if the user is logged in
function isLoggedIn() {
    // You can check cookies or session storage here
    // Example using cookies:
    return document.cookie.split('; ').find(row => row.startsWith('logged_in=')) !== undefined;
}

// Function to handle the button click
function checkLoginAndPost() {
    if (!isLoggedIn()) {
        // If not logged in, redirect to the login page
        window.location.href = 'login.php';
    } else {
        // If logged in, allow the action
        window.location.href = 'post-adoption.html'; // or handle the post action directly
    }
}
function checkLoginStatus() {
    fetch('check_login.php')
        .then(response => response.json())
        .then(data => {
            if (data.logged_in) {
                console.log("logged in as " + data.username);

               document.querySelector(".login1").display = "none";
                // document.getElementById('logoutButton').style.display = 'block';
                // document.getElementById('usernameDisplay').textContent = data.username;
            }
            //else {
            //     document.getElementById('loginButton').style.display = 'block';
            //     document.getElementById('logoutButton').style.display = 'none';
            // }
        });
}

// Call this function on page load
document.addEventListener('DOMContentLoaded', checkLoginStatus);


