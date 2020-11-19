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

function checaValidacao() {
  const input = document.querySelectorAll('input');
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value.length === 0) {
      input[i].setCustomValidity('Campos inválidos');
    } else {
      input[i].setCustomValidity('');
    }
  }
}
const submit = document.querySelector('#facebook-register');
submit.addEventListener('click', checaValidacao);


