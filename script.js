function alertaLogin() {
  const email = document.querySelector('#user-email-phone');
  alert(email.value);
}

const botaoLogin = document.querySelector('#button-login');
botaoLogin.addEventListener('click', alertaLogin);

const custom = document.querySelector('#custom');
custom.addEventListener('click', function () {
  const customInput = document.createElement('input');
  customInput.type = 'text';
  customInput.name = 'gender-custom';
  customInput.placeholder = 'Gênero (opcional)';
  document.querySelector('.custom-content').appendChild(customInput);
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
