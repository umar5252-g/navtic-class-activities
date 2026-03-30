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

// let form = document.getElementById("user-form");
// let error_msg = document.getElementById("error-message");

// form.addEventListener("submit", function () {
//   let name = document.getElementById("name-input").value;
//   let email = document.getElementById("email-input").value;

//   if (name === "" || email === "") {
//     error_msg.textContent = "all fields are required";
//     event.preventDefault();
//   } else {
//     alert("form submited successfully");
//     console.log(name);
//   }
// });

// let button = document.getElementById("btn");

// button.addEventListener("click", () => {
//   console.log("button was clicked");
// });
// let btn = document.getElementById("btn");
// let body = document.body;
// btn.addEventListener("click", function () {
//   body.style.backgroundImage = "url('./acerscreen.jpg')";
//   body.style.backgroundSize = "cover";
//   body.style.backgroundRepeat = "no-repeat";
// });

// let button = document.getElementById("btn");
// let img = document.getElementById("image");
// let body = document.body;

// button.addEventListener("click", () => {
//   let randomNum = Math.round(Math.random() * 6);
//   if (randomNum === 2) {
//     img.setAttribute(
//       "src",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FDR3VqaykN4kDML-3QoDEJzAgzjf8u79WQ&s",
//     );
//     // body.style.backgroundImage =
//     //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FDR3VqaykN4kDML-3QoDEJzAgzjf8u79WQ&s";
//     // // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FDR3VqaykN4kDML-3QoDEJzAgzjf8u79WQ&s
//     // body.style.backgroundSize = "cover";
//     // body.style.backgroundRepeat = "no-repeat";
//     // return;
//   } else if (randomNum === 4) {
//     img.setAttribute(
//       "src",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhW3KptjKis-eOBpD_q9q14_GfI-h3yeckA&s",
//     );
//   }
//   console.log(randomNum);
// });

// let accessList = document.getElementById("list");
// const accessBtn = document.getElementById("btn");
// const fruits = ["mango", "banna", "grapes", "watermelon"];
// let item;

// for (let i = 0; i < fruits.length; i++) {
//   let item = document.createElement("li");
// }
