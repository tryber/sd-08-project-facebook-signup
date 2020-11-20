function alertaLogin() {
  const email = document.querySelector('#user-email-phone');
  alert(email.value);
}

const botaoLogin = document.querySelector('#button-login');
botaoLogin.addEventListener('click', alertaLogin);

const radioContent = document.querySelector('.radio-content');
const input = radioContent.querySelectorAll('input');
Array.from(input).forEach(function (input) {
  input.addEventListener('change', function () {
    if (input.id == 'custom') {
      const customInput = document.createElement('input');
      customInput.type = 'text';
      customInput.name = 'gender-custom';
      customInput.placeholder = 'Gênero (opcional)';
      document.querySelector('.custom-content').appendChild(customInput);
    } else {
      const customContent = document.querySelector('.custom-content');
      customContent.removeChild(customContent.firstChild);
    }
  })
});

function checaValidacao() {
  const form = document.getElementById('form-singUp');
  const input = form.querySelectorAll('input');
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value.length === 0) {
      input[i].setCustomValidity('Campos inválidos');
    } else {
      input[i].setCustomValidity('');
    }
  }
  verificaRadio();
}

function verificaRadio() {
  const radio = document.getElementsByClassName('radio');
  for (let i = 0; i < radio.length; i += 1) {
    if (radio[i].checked === true) {
      input[i].setCustomValidity('');
      return;
    }
  }
  radio[0].setCustomValidity('Campos inválidos');
}

const submit = document.querySelector('#facebook-register');
submit.addEventListener('click', checaValidacao);
