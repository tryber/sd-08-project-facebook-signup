function alertaLogin() {
  const email = document.querySelector('#user-email-phone');
  alert(email.value);
}

const botaoLogin = document.querySelector('#button-login');
botaoLogin.addEventListener('click', alertaLogin);

let custom = document.querySelector('#custom');
custom.addEventListener('click', function () {
  let custom_input = document.createElement('input');
  custom_input.type = 'text';
  custom_input.name = 'gender-custom';
  custom_input.placeholder = 'Gênero (opcional)'
  document.querySelector('.custom-content').appendChild(custom_input);
});

