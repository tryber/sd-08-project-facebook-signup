function alertaLogin() {
  const email = document.querySelector('#user-email-phone');
  alert(email.value);
}

const botaoLogin = document.querySelector('#button-login');
botaoLogin.addEventListener('click', alertaLogin);

const radioContent = document.querySelector('.radio-content');
let input = radioContent.querySelectorAll('input');
Array.from(input).forEach(function (input) {
  input.addEventListener('change', function () {
    if (input.id === 'custom') {
      const customInput = document.createElement('input');
      customInput.type = 'text';
      customInput.name = 'gender-custom';
      customInput.placeholder = 'Gênero (opcional)';
      document.querySelector('.custom-content').appendChild(customInput);
    } else {
      const customContent = document.querySelector('.custom-content');
      customContent.removeChild(customContent.firstChild);
    }
  });
});

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

function checaValidacao() {
  const form = document.getElementById('form-singUp');
  const formInput = form.querySelectorAll('input');
  for (let i = 0; i < formInput.length; i += 1) {
    if (formInput[i].value.length === 0) {
      formInput[i].setCustomValidity('Campos inválidos');
    } else {
      formInput[i].setCustomValidity('');
    }
  }
  verificaRadio();
}

const submit = document.querySelector('#facebook-register');
submit.addEventListener('click', checaValidacao);
