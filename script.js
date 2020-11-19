const loginButton = document.getElementById('button-login');
const emailTelefone = document.getElementById('user-email-phone');

function login() {
  alert(emailTelefone.value);
}

loginButton.addEventListener('click', login);
