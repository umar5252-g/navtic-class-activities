const apiCall = async () => {
  let user = "https://jsonplaceholder.typicode.com/users";
  let response = await fetch(user);
  let data = await response.json();
  console.log(data);
  const containerUser = document.getElementById("users");
  containerUser.innerHTML = data.map((user) => {
    return `<div>
    <h2>User Id: ${user.id}</h2>
    Name: ${user.name}
    <br>
    Email: ${user.email}
      <br>
    Address: ${user.address.city}</div>
    `;
  });
};
apiCall();

// e455
// u 88u 88u 88u 88u 888
// u 88u 88u 88u 88u 888
// 899 899 899 899 899
// 9-p98u
// 899p p pp -p-p 899 u u
// y 55 8 u9
