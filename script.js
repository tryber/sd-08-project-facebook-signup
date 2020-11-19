const loginButton = document.getElementById('button-login');
const emailInput = document.getElementById('user-email-phone');

function alertLogin() {
  alert(emailInput.value);
}

loginButton.addEventListener('click', alertLogin);
