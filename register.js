document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signupForm");
    console.log("working")

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const userDetails = {
            name: name,
            email: email,   
            password: password
        };

        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        form.reset();
        alert("Signup successful!");
    });
});
