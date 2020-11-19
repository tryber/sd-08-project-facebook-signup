const buttonEntrar = document.querySelector('#button-login');
const emailOuTelefone = document.querySelector('#user-email-phone');

buttonEntrar.addEventListener('click', function () {
  alert(emailOuTelefone.value);
});
