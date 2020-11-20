const buttonLoginBtn = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');
const facebookRegisterBtn = document.getElementById('facebook-register');
const invalidField = document.getElementById('invalid-field');

let counter = 0;

facebookRegisterBtn.addEventListener('click', validateForm);

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

function plotText() {
  const formField = document.getElementById('.create-account');
  const formValues = new FormData(formField);
  const boxText = document.querySelector('.right-content');
  boxText.innerHTML = '';
  boxText.innerHTML = `<p> Olá, ${formValues.get('firstname')} ${formValues.get('lastname')}
  ${formValues.get('phone_email')} ${formValues.get('birthdate')} ${formValues.get('gender')}
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