document.addEventListener("DOMContentLoaded", function() {
    const profileImageInput = document.getElementById("profile-image-input");
    const profileImagePreview = document.querySelector(".profile-image-preview img");
    const profileImageText = document.querySelector(".profile-image-text");

    profileImageInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            profileImagePreview.src = e.target.result;
            // Hide the profile picture text when an image is uploaded
            profileImageText.style.display = 'none';
        };

        reader.readAsDataURL(file);
    });
});
