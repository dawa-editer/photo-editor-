document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email.trim() !== "" && password.trim() !== "") {

        alert("Login Successful!");

        window.location.href = "editor.html";

    } else {

        alert("Email aur Password bhariye");

    }

});