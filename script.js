const loginButton = document.getElementById('button-login');
const emailTelefone = document.getElementById('user-email-phone');

loginButton.addEventListener('click', login)

function login() {
  alert(emailTelefone.value);
};