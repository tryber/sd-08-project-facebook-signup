// Requisito 7 - Evento alert para o botão entrar
let buttonLogin = document.getElementById('button-login');
let loginValue = document.getElementById('user-email-phone');
buttonLogin.addEventListener('click', function () {
  alert (loginValue.value);
})
