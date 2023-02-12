function checkLogin(value) {
    if (value == "") {
      alert("Enter login!");
    } else if (value.indexOf("@") == -1) {
      alert('Missing character "@"');
    } else if (value.indexOf(".") == -1) {
      alert('Missing character "." in email address');
    }
  }
  function checkPassword(value) {
    let r = /[^A-Z-a-z-0-9]/g;
    if (value == "") {
      alert("Enter password!");
    } else if (value.length < 6) {
      alert("The password is too short!");
    } else if (value.length > 20) {
      alert("The password is too long!");
    } else if (r.test(value)) {
      alert("Invalid characters in the password");
    }
  }

  function checkRole(value) {
    if (value == "") {
      alert("Enter Role!");
    } else if (value != "Administrator" || value != "OrdinaryUser" || value != "Guest") {
      alert('Wrong Role. Select OrdinaryUser or Guest or Administrator');
    }}