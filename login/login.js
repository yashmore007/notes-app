"use strict";

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const emailAdd = document.getElementById("email").value.trim();
  const password = document.getElementById("pass").value.trim();

  if (isValidEmail(emailAdd) && password) {
    if (emailAdd === "yashmore2002bs@gmail.com" && password === "1234") {
      alert("login successful");
    } else {
      alert("incorrect email or password");
    }
  }
});
