// let buttonn = document.getElementById("btn");
// buttonn.addEventListener("click", () => {
//   alert("button was clicked");
// });

// let list = document.getElementById("list");
// let newItem = document.createElement("li");
// newItem.textContent = "New item";

// list.appendChild(newItem);

// let item = document.getElementById("item");
// let removeBtn = document.getElementById("remove-btn");
// let replaceBtn = document.getElementById("replace-btn");
// let addBtn = document.getElementById("add-btn");

// removeBtn.addEventListener("click", () => {
//   if (item) {
//     list.removeChild(item);
//   }
// });

// addBtn.addEventListener("click", () => {
//   let newItem = document.createElement("li");
//   newItem.textContent = "New item";
//   list.appendChild(newItem);
// });

// replaceBtn.addEventListener("click", () => {
//   let newItem = document.createElement("li");
//   newItem.innerText = "New item";
//   list.replaceChild(newItem, item);
// });

let form = document.getElementById("user-form");
let error_msg = document.getElementById("error-message");

form.addEventListener("submit", function () {
  let name = document.getElementById("name-input").value;
  let email = document.getElementById("email-input").value;

  if (name === "" || email === "") {
    error_msg.textContent = "all fields are required";
    event.preventDefault();
  } else {
    alert("form submited successfully");
    console.log(name);
  }
});
