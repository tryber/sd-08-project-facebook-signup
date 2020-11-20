let email = document.getElementById("user-email-phone");
let loginBtn = document.getElementById("button-login");
function loginAlert() {
  alert(email.value);
}
loginBtn.addEventListener("click", loginAlert());
