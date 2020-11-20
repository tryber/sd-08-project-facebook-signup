const btEntrar = document.getElementById('button-login');
const signUpForm = document.forms['signUp-form'];

btEntrar.addEventListener('click', function () {
  const m = document.getElementById('user-email-phone').value;
  alert(m);
});

function showForm(value) {
  const dataInput = document.getElementById('data-input');
  const createSpan = document.createElement('span');
  createSpan.innerText = value;
  createSpan.style.display = 'block';
  dataInput.appendChild(createSpan);
}

function exibirTexto() {
  const inputValueName = `Olá, ${signUpForm.firstname.value} ${signUpForm.lastname.value}`;
  showForm(inputValueName);
  const inputValueContact = `Celular ou email: ${signUpForm.phone_email.value}`;
  showForm(inputValueContact);
  const inputValueBday = `Data de nascimento: ${signUpForm.birthdate.value}`;
  showForm(inputValueBday);
  const inputValueGender = `Gênero: ${signUpForm.gender.value}`;
  showForm(inputValueGender);

  document.querySelector('.form-style').style.display = 'none';
}

function validateForm(event) {
  event.preventDefault();

  const firstNameValue = signUpForm.firstname.value;
  const lastNameValue = signUpForm.lastname.value;
  const phoneValue = signUpForm.phone_email.value;
  const passwordValue = signUpForm.password.value;
  const birthdayValue = signUpForm.birthdate.value;
  const genderValue = signUpForm.gender.value;
  const values = [firstNameValue,
    lastNameValue,
    phoneValue,
    passwordValue,
    birthdayValue,
    genderValue];

  let notValid = false;

  for (let i = 0; i < values.length; i += 1) {
    if (values[i] === '') {
      notValid = true;
    }
  }

  if (notValid) {
    document.getElementById('alerta').innerHTML = 'Campos inválidos';
  } else {
    exibirTexto();
  }
}

const btSubmit = document.getElementById('facebook-register');

btSubmit.addEventListener('click', validateForm);


const genderOption = document.getElementById('test');
const inputPersGender = document.createElement('input');
inputPersGender.type = 'text';
inputPersGender.name = 'gender-custom';
inputPersGender.placeholder = 'Gênero (opcional)';
genderOption.addEventListener('click', function () {
  document.getElementById('label-gender').appendChild(inputPersGender);
});
