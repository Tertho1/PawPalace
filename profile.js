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
// Handle cancel button click to remove ?edit=true from URL
// document.getElementById('cancelBtn').addEventListener('click', function (e) {
//     e.preventDefault(); // Prevent default behavior of anchor tag
//     const url = window.location.href.split('?')[0]; // Get the base URL without query parameters
//     window.location.href = url; // Redirect to the base URL
// });
// Handle cancel button click to remove ?edit=true from URL
document.getElementById('editProfileBtn').addEventListener('click', function () {
    // Toggle visibility of the form and user details
    document.querySelector('.user-details').classList.add('hidden');
    document.querySelector('.profile-form').classList.remove('hidden');
});

document.getElementById('cancelBtn').addEventListener('click', function () {
    // Toggle back to user details and hide the form
    document.querySelector('.user-details').classList.remove('hidden');
    document.querySelector('.profile-form').classList.add('hidden');
});


function toggleProfilePictureInput() {
    var profilePictureInput = document.getElementById('profilePictureInput');
    if (profilePictureInput.style.display === 'none' || profilePictureInput.style.display === '') {
        profilePictureInput.style.display = 'block';
    } else {
        profilePictureInput.style.display = 'none';
    }
}


