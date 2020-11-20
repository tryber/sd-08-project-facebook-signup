const email = document.getElementById('user-email-phone');
const loginBtn = document.getElementById('button-login');
function loginAlert() {
  alert(email.value);
}
loginBtn.addEventListener('click', loginAlert);
