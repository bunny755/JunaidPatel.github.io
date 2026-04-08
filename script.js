function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    document.getElementById("response").innerHTML =
        "Thank you " + name + "! Your enquiry has been received.";
}
