
const btnLogin = document.querySelector('#button-login');

function login() {
  const userEmailPhone = document.querySelector('#user-email-phone').value;

  alert(userEmailPhone);
}

btnLogin.addEventListener('click', login);

const btnRegister = document.querySelector('#facebook-register');

function radioBtnValue() {
  const radioBtns = document.getElementsByName('gender');

  for (let index = 0; index < radioBtns.length; index += 1) {
    if (radioBtns[index].checked) {
      return radioBtns[index].value;
    }
  }

  return '';
}

function inputValues() {
  const formInputs = {
    firstName: document.querySelector('.first-name').value,
    lastName: document.querySelector('.name input + input').value,
    phoneEmail: document.querySelector('#phone-email').value,
    password: document.querySelector('#password').value,
    birthdate: document.querySelector('#birthdate').value,
    gender: radioBtnValue(),
  };

  return formInputs;
}

function welcome() {
  const formInputs = inputValues();

  const rightSection = document.querySelector('.right-content');
  rightSection.innerHTML = '';

  const fullName = document.createElement('h1');
  fullName.innerHTML = `Olá, ${formInputs.firstName} ${formInputs.lastName}`;
  rightSection.appendChild(fullName);

  const emailTelefone = document.createElement('p');
  emailTelefone.innerHTML = formInputs.phoneEmail;
  rightSection.appendChild(emailTelefone);

  const nascimento = document.createElement('p');
  nascimento.innerHTML = formInputs.birthdate;
  rightSection.appendChild(nascimento);

  const genero = document.createElement('p');
  genero.innerHTML = formInputs.gender;
  rightSection.appendChild(genero);
}

function formValidation(event) {
  const formInputs = inputValues();
  const span = document.querySelector('.form-span');
  const keys = Object.keys(formInputs);

  let validation = true;

  keys.forEach(function (key) {
    if (formInputs[key] === null || formInputs[key] === '') {
      event.preventDefault();
      span.style.display = 'block';
      validation = false;
    }
  });

  if (validation) {
    return welcome();
  }

  return '';
}

btnRegister.addEventListener('click', formValidation);

const btnPersonalizado = document.querySelector('#other');

function genderCustomOn() {
  const genderInput = document.querySelector('#gender-custom');
  genderInput.style.display = 'block';
}

btnPersonalizado.addEventListener('click', genderCustomOn);

const btnGenderMale = document.querySelector('#male');
const btnGenderFemale = document.querySelector('#female');

function genderCustomOff() {
  const genderInput = document.querySelector('#gender-custom');
  genderInput.style.display = 'none';
}

btnGenderMale.addEventListener('click', genderCustomOff);
btnGenderFemale.addEventListener('click', genderCustomOff);
