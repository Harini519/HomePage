
document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "home.html"; // Redirect to homepage after successful login
});

document.getElementById("signup-btn").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "home.html"; 
});
