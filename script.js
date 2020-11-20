function alertEmail() {
  const button = document.querySelector('#button-login');

  button.addEventListener('click', function () {
    const emailPhone = document.querySelector('#user-email-phone').value;
    alert(emailPhone);
  });
}

alertEmail();

/* function cheksInput() {
  const button = document.querySelector('#facebook-register');
  let contador = 0;
  let radio = false;

  button.addEventListener('click', function () {
    const formsInput = document.querySelectorAll('.form-register input');
    for (let index = 0; index < formsInput.length; index += 1) {
      if (formsInput[index].value === '' && formsInput[index].type === 'text') {
        contador += 1;
      } else if (formsInput[index].value === '' && formsInput[index].type === 'password') {
        contador += 1;
      } else if (formsInput[index].checked === true && formsInput[index].type === 'radio') {
        radio = true;
      }
    }
    if (contador !== 0 || radio !== true) {
      const forms = document.querySelector('.form-register');
      const errorText = document.createElement('p');
      errorText.innerHTML = 'Campos inválidos';
      forms.appendChild(errorText);
    }
  });
}

cheksInput(); */

const invalid = document.createElement('p');
const form = document.querySelector('.form-register');

function checkRadio() {
  const inputRadio = document.querySelector('.inputRadio');
  for (let index = 0; index < inputRadio.length; index += 1) {
    if (!inputRadio[index].checked) {
      invalid.innerHTML = 'Campos inválidos';
      form.appendChild(invalid);
      break;
    }
  }
}

function signIt() {
  const inputs = document.querySelectorAll('.inputText');
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      invalid.innerHTML = 'Campos inválidos';
      form.appendChild(invalid);
      break;
    }
  }
}

function addRegisterEvent() {
  const register = document.querySelector('#facebook-register');
  register.addEventListener('click', function () {
    checkRadio();
    signIt();
  });
}

addRegisterEvent();

function radioCustom() {
  const forms = document.querySelector('.form-register');
  forms.addEventListener('click', function (event) {
    if (event.target.id === 'personalizado') {
      const textArea = document.createElement('input');
      const personalizado = document.querySelector('.custom');
      textArea.type = 'text';
      textArea.name = 'gender-custom';
      textArea.placeholder = 'Gênero (opcional)';
      personalizado.appendChild(textArea);
    }
  });
}

radioCustom();

