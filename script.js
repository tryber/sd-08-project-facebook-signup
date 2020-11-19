// Requisito 7 - Evento alert para o botão entrar
const buttonLogin = document.getElementById('button-login');
const loginValue = document.getElementById('user-email-phone');
// Espaço
buttonLogin.addEventListener('click', function () {
  alert(loginValue.value);
});
