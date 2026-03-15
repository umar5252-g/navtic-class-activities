let form = document.getElementById("user-form");
let error_message = document.getElementById("error-message");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let firstname = form.elements["first-name"].value;
  let lastName = form.elements["last-name"].value;
  let email = form.elements["email"].value;
  let password = form.elements["password"].value;
  let confirmPassword = form.elements["confirm-password"].value;
  let phoneNumber = form.elements["phone-number"].value;
  let birthDate = form.elements["birth-date"].value;

  if (
    firstname === "" ||
    lastName === "" ||
    email === "" ||
    phoneNumber === "" ||
    birthDate === ""
  ) {
    error_message.textContent = "Please fill in all the fields.";
    return;
  }
  if (password !== confirmPassword) {
    error_message.textContent = "Passwords dont match";
    return;
  } else if (password.length < 8) {
    error_message.textContent = "Password should have least 8 charecters";
    return;
  } else {
    error_message.textContent = "";
    alert("Form submitted successfully!");
    form.reset();
  }
});
