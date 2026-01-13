// List of users (temporary)
var users = [
  { username: "admin", password: "1234" },
  { username: "student", password: "1111" },
  { username: "teacher", password: "2222" }
];

function login() {
  var inputUser = document.getElementById("username").value;
  var inputPass = document.getElementById("password").value;

  var found = false;

  for (var i = 0; i < users.length; i++) {
    if (
      users[i].username === inputUser &&
      users[i].password === inputPass
    ) {
      found = true;
      break;
    }
  }

  if (found) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
}
