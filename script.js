// Requisito 7 - Evento alert para o botão entrar
const buttonLogin = document.getElementById('button-login');
const loginValue = document.getElementById('user-email-phone');
// Espaço
buttonLogin.addEventListener('click', function () {
  alert(loginValue.value);
});
// Adicionando evento do requisito 19 - Campo de texto para opção personalizado
const personalizadoRadioButton = document.getElementsByClassName('genderType')[2];
const containerForGender = document.getElementById('genderContainer')
// Espaço
personalizadoRadioButton.addEventListener('click', function () {
  let textForPersonalized = document.createElement('input');
  textForPersonalized.type = 'text';
  textForPersonalized.name = 'gender-custom';
  textForPersonalized.placeholder = 'Gênero (opcional)';
  containerForGender.appendChild(textForPersonalized);
})
