function alertEmail() {
  const button = document.querySelector('#button-login');

  button.addEventListener('click', function () {
    const emailPhone = document.querySelector('#user-email-phone').value;
    alert(emailPhone);
  });
}

alertEmail();

function cheksInput() {
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
      alert('Campos inválidos');
    }
  });
}

cheksInput();

function radioCustom() {
  const forms = document.querySelector('.form-register');
  forms.addEventListener('click', function (event) {
    if (event.target.id === 'personalizado') {
      const textArea = document.createElement('textarea');
      const personalizado = document.querySelector('.custom');
      textArea.name = 'gender-custom';
      textArea.placeholder = 'Gênero';
      personalizado.appendChild(textArea);
    }
  });
}

radioCustom();
