const buttonLogin = document.getElementById('button-login');
const inputUserEmailTelefone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(inputUserEmailTelefone.value);
});
