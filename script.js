const submitButton = document.getElementById('facebook-register');
const formFields = ['firstname', 'lastname', 'phone_email', 'password', 'birthdate', 'gender'];
const formValidation = document.forms.cadastro;
const personButton = document.getElementById('personalizado');
const opcionalInput = document.getElementById('campo-opicional');

function sendAlert() {
  alert(document.getElementById('user-email-phone').value);
}

const getEnter = document.querySelector('#button-login');
getEnter.addEventListener('click', sendAlert);

submitButton.addEventListener('click', function (event) {
  for (let i = 0; i < formFields.length; i += 1) {
    if (formValidation[formFields[i]].value === '') {
      formValidation[formFields[i]].value = 'Campos inválidos';
      event.preventDefault();
    }
  }
}, false);

personButton.addEventListener('click', function () {
  if (opcionalInput.hasChildNodes() === false) {
    const campoOpicional = document.createElement('input');
    campoOpicional.type = 'text';
    campoOpicional.name = 'gender-custom';
    campoOpicional.placeholder = 'Gênero (opcional)';
    opcionalInput.appendChild(campoOpicional);
  }
}, false);
