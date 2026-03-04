const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitbtn");

// 🔹 Live Username Display
username.addEventListener("input", function() {
    document.getElementById("liveText").innerHTML =
        "You typed: " + username.value;
});

// 🔹 Password Focus Event
password.addEventListener("focus", function() {
    password.style.backgroundColor = "yellow";
});

// 🔹 Password Blur Event
password.addEventListener("blur", function() {
    password.style.backgroundColor = "";
});

// 🔹 Form Submit
form.addEventListener("submit", function(event) {

    event.preventDefault(); // prevent reload

    // Clear previous messages
    document.getElementById("usererror").innerHTML = "";
    document.getElementById("emailerror").innerHTML = "";
    document.getElementById("passError").innerHTML = "";
    document.getElementById("finalMessage").innerHTML = "";

    let isValid = true;

    if (username.value === "") {
        document.getElementById("userError").innerHTML =
            "Username is required";
        isValid = false;
    }

    if (email.value === "") {
        document.getElementById("emailError").innerHTML =
            "Email is required";
        isValid = false;
    }

    if (password.value === "") {
        document.getElementById("passError").innerHTML =
            "Password is required";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("finalMessage").innerHTML =
            "Registration Successful";
        document.getElementById("finalMessage").className = "success";

        submitBtn.disabled = true;
        submitBtn.innerHTML = "Submitted";
    }

});