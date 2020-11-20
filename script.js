function logInButton() {
  const alertText = document.getElementById('user-email-phone').value;
  alert(alertText);
}

const logInClick = document.getElementById('button-login');
logInClick.addEventListener('click', logInButton);

const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const phoneMail = document.getElementById('phone_email');
const birthdate = document.getElementById('birthdate');
const genderFemale = document.getElementById('Feminino');
const genderMale = document.getElementById('Masculino');
const gender = document.getElementById('Personalizado');
const signUpForm = document.querySelector('.signUp');

function finishForm() {
  document.querySelector('.right-content').removeChild(document.querySelector('.signUpForm'));

  const newMessage = document.querySelector('.right-content');

  const helloLog = document.createElement('h1');
  helloLog.innerHTML = `Olá, ${firstName.value} ${lastName.value}`;
  const emailLog = document.createElement('p');
  emailLog.innerHTML = `E-mail ou telefone: ${phoneMail.value}`;
  const birthLog = document.createElement('p');
  birthLog.innerHTML = `Data de nascimento: ${birthdate.value}`;

  const genderLog = document.createElement('p');
  if (genderFemale.checked) {
    genderLog.innerHTML = `Gênero: ${genderFemale.value}`;
  } else if (genderMale.checked) {
    genderLog.innerHTML = `Gênero: ${genderMale.vallue}`;
  } else if (gender.checked) {
    genderLog.innerHTML = `Gênero: ${gender.value}`;
  }

  newMessage.appendChild(helloLog);
  newMessage.appendChild(emailLog);
  newMessage.appendChild(birthLog);
  newMessage.appendChild(genderLog);
}

function checkRegistration() {
  if (!signUpForm.checkValidity()) {
    document.getElementById('invalid').innerHTML = 'Campos inválidos';
  } else {
    document.getElementById('invalid').innerHTML = '';
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
