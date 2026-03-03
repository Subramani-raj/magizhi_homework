const form = document.getElementById("hello");

form.addEventListener("submit", function(event) {

    event.preventDefault(); // stop page reload

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phno = document.getElementById("phno").value;

    console.log("User Details");
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Email:", email);
    console.log("Phone:", phno);

    // Basic innerHTML method
    document.getElementById("output").innerHTML =
        "<h3>Entered Details:</h3>" +
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Email: " + email + "<br>" +
        "Phone: " + phno;
});