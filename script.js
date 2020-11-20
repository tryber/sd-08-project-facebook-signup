const botaoLogin = document.getElementById('button-login');
const entradaEmailTelefone = document.getElementById('user-email-phone');

botaoLogin.addEventListener('click', function () {
  alert(entradaEmailTelefone.value);
});
