const buttonLoginBtn = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');
const facebookRegisterBtn = document.getElementById('facebook-register');
const invalidField = document.getElementById('invalid-field');
const personalizadoRadio = document.getElementById('Personalizado');

buttonLoginBtn.addEventListener('click', function () {
  alert(userEmailPhone.value);
});

let counter = 0;

function plotText() {
  const firstName = document.forms.myForm.firstname.value;
  const lastName = document.forms.myForm.lastname.value;
  const phoneEmail = document.forms.myForm.phone_email.value;
  const birthdate = document.forms.myForm.birthdate.value;
  const gender = document.forms.myForm.gender.value;

  const boxText = document.querySelector('.right-content');
  boxText.innerHTML = '';
  boxText.innerHTML = `<p> Olá, ${firstName} ${lastName}
  ${phoneEmail} ${birthdate} ${gender}
  </p>`;
}

function validateFirstName() {
  if (document.forms.myForm.firstname.value === '') {
    invalidField.innerText = 'Campos inválidos';
  } else {
    counter += 1;
  }
}

function validateLastName() {
  if (document.forms.myForm.lastname.value === '') {
    invalidField.innerText = 'Campos inválidos';
  } else {
    counter += 1;
  }
}

function validatePhoneEmail() {
  if (document.forms.myForm.phone_email.value === '') {
    invalidField.innerText = 'Campos inválidos';
  } else {
    counter += 1;
  }
}

function validatePassword() {
  if (document.forms.myForm.password.value === '') {
    invalidField.innerText = 'Campos inválidos';
  } else {
    counter += 1;
  }
}

function validateBirthDate() {
  if (document.forms.myForm.birthdate.value === '') {
    invalidField.innerText = 'Campos inválidos';
  } else {
    counter += 1;
  }
}

function validateGender() {
  if (document.forms.myForm.gender.value === '') {
    invalidField.innerText = 'Campos inválidos';
  } else {
    counter += 1;
  }
}

function validateForm() {
  counter = 0;

  validateFirstName();
  validateLastName();
  validatePhoneEmail();
  validatePassword();
  validateBirthDate();
  validateGender();

  if (counter === 6) {
    plotText();
  }
}

facebookRegisterBtn.addEventListener('click', validateForm);

function personalizadoField() {
  const personalizadoInput = document.createElement('input');
  personalizadoInput.type = 'text';
  personalizadoInput.name = 'gender-custom';
  personalizadoInput.placeholder = 'Gênero (opcional)';
  document.querySelector('.personalizado-container').appendChild(personalizadoInput);
}

personalizadoRadio.addEventListener('click', personalizadoField);
