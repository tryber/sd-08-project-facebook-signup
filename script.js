const getEnter = document.querySelector('#button-login');
const submitButton = document.getElementById('facebook-register');
const formFields = ['firstname', 'lastname', 'phone_email', 'password', 'birthdate', 'gender'];
const formValidation = document.forms.cadastro;
const personButton = document.getElementById('personalizado');
const opcionalInput = document.getElementById('campo-opicional');
const invalidDiv = document.getElementsByClassName('invalidField')[0];
const invalidField = document.createElement('p');

getEnter.addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
})

submitButton.addEventListener('click', function (event) {
  if (invalidDiv.hasChildNodes() === true) {
    document.getElementsByClassName('invalid-field')[0].remove();
  }
  for (let i = 0; i < formFields.length; i += 1) {
    if (formValidation[formFields[i]].value === '') {
      invalidField.innerHTML = 'Campos inválidos';
      invalidField.className = 'invalid-field';
      invalidDiv.appendChild(invalidField);
      event.preventDefault();
      break;
    }
  }
  if (invalidDiv.hasChildNodes() === false) {
    document.forms.cadastro.style.display = 'none';
    const fullName = `${formValidation[formFields[0]].value} ${formValidation[formFields[1]].value}`;
    const mailPhone = formValidation[formFields[2]].value;
    const birthDate = formValidation[formFields[4]].value;
    const personGender = formValidation[formFields[5]].value;
    const fullForm = `Olá,  ${fullName} <br> ${mailPhone} <br> ${birthDate} <br> ${personGender}`;
    invalidField.innerHTML = fullForm;
    document.getElementsByClassName('right-content')[0].appendChild(invalidField);
    event.preventDefault();
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
