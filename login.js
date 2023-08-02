document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const errorText = document.getElementById("errorText");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Get user details from localStorage
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        if (userDetails && userDetails.email === email && userDetails.password === password) {
            
            errorText.textContent = "";
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            errorText.textContent = "Invalid email or password.";
        }
    });
});
