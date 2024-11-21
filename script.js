function redirectTo(url) {
    window.location.href = url; // Redirect to the specified URL
}

function submitComment() {
    const comment = document.getElementById('userComment').value;

    if (comment) {
        // Here, you would typically send the comment to your AWS backend
        alert("Your comment has been submitted!");
        // Clear the textarea after submission
        document.getElementById('userComment').value = '';
    } else {
        alert("Please enter a comment or suggestion before submitting.");
    }
}