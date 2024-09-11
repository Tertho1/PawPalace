// profile.js
document.addEventListener("DOMContentLoaded", function () {
    const editProfileBtn = document.getElementById('editProfileBtn');
    const editProfileForm = document.getElementById('editProfileForm');

    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', function () {
            if (editProfileForm.style.display === "none") {
                editProfileForm.style.display = "block"; // Show the form
                editProfileBtn.style.display = "none"; // Hide the edit button
            }
        });
    }
});
