function logInButton() {
  const alertText = document.getElementById('user-email-phone').value;
  alert(alertText);
}

const logInClick = document.getElementById('button-login');
logInClick.addEventListener('click', logInButton);

const firstName = document.getElementById('firstname').value;
const lastName = document.getElementById('lastname').value;
const phoneMail = document.getElementById('phone_email').value;
const password = document.getElementById('password').value;
const birthdate = document.getElementById('label-birthdate').value;
const gender = document.getElementsByClassName('gender');
const registrationArray = [firstName, lastName, phoneMail, password, birthdate];

function finishForm() {
  document.querySelector('.main-content').removeChild(document.querySelector('.right-content'));

  const newMessage = document.createElement('section');
  newMessage.setAttribute('class', 'message');

  document.querySelector('.main-content').appendChild(newMessage);

  const helloLog = document.createElement('h1');
  helloLog.innerHTML = `Olá, ${firstName} ${lastName}`;
  const emailLog = document.createElement('p');
  emailLog.innerHTML = `E-mail ou telefone: ${phoneMail}`;
  const birthLog = document.createElement('p');
  birthLog.innerHTML = `Data de nascimento: ${birthdate}`;
  const genderLog = document.createElement('p');
  genderLog.innerHTML = `Gênero: ${gender.checked}`;

  newMessage.appendChild(helloLog);
  newMessage.appendChild(emailLog);
  newMessage.appendChild(birthLog);
  newMessage.appendChild(genderLog);
}

function checkRegistration(registrationArray) {
  for (let index = 0; index < 5; index += 1) {
    if (registrationArray[index] === '') {
      document.getElementById('invalid').innerHTML = ('Campos inválidos');
    }
  }
  if (!(gender[0].checked || gender[1].checked || gender[2].checked)) {
    document.getElementById('invalid').innerHTML = ('Campos inválidos');
  }
  if (document.getElementById('invalid').innerHTML !== 'Campos inválidos') {
    finishForm();
  }
}

const cadastro = document.getElementById('facebook-register');
cadastro.addEventListener('click', checkRegistration);

function genderCustom() {
  const newGender = document.createElement('input');
  newGender.setAttribute('name', 'gender-custom');
  newGender.setAttribute('placeholder', 'Gênero (opcional)');

  document.getElementById('select-gender').appendChild(newGender);

  if (document.getElementById('select-gender').lastChild.className !== 'gender-custom') {
    document.getElementById('select-gender').appendChild(newGender);
  }
}

const custom = document.getElementById('Personalizado');
custom.addEventListener('click', genderCustom);
