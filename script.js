const loginButton = document.getElementById('button-login');
const emailTelefone = document.getElementById('user-email-phone');
loginButton.addEventListener('click', function () {
  alert(emailTelefone.value);
});
