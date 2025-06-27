"use strict";

const isValidUsername = function (users_name) {
  const regex = /^[A-Za-z]+(?: [A-Za-z]+)+$/;

  return regex.test(users_name);
};

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

document.getElementById("signUpForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  const confirmPassword = document.getElementById("confirmPass").value;

  if (
    isValidUsername(username) &&
    isValidEmail(email) &&
    confirmPassword === password
  ) {
    alert("sign up done");
  }
});
