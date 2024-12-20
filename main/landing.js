document.addEventListener('DOMContentLoaded', function () {
    // Add fade-out effect to the body after 2 seconds
    setTimeout(function () {
        document.body.classList.add('fade-out');  // Apply fade-out class
        setTimeout(function () {
            window.location.href = '/main/main.html';  // Redirect to the main page
        }, 1000); // Wait for the fade-out animation (1 second)
    }, 2000); // 2000ms = 2 seconds before fading out
});
