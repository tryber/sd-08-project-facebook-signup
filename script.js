const signUpForm = document.querySelector('.signUp');
const signUpFormInputs = document.querySelector('.signUp').querySelectorAll('input');

function logInButton() {
  const alertText = document.getElementById('user-email-phone').value;
  alert(alertText);
}

function addGender() {
  document.querySelector('.another-gender').style.display = 'flex';
}

function removeCustom() {
  document.querySelector('.another-gender').style.display = 'none';
}

function finishForm() {
  document.querySelector('.right-content').removeChild(document.querySelector('.signUpForm'));

  const newMessage = document.querySelector('.right-content');

  const helloLog = document.createElement('h1');
  helloLog.innerHTML = `Olá, ${signUpFormInputs[0].value} ${signUpFormInputs[1].value}`;
  const emailLog = document.createElement('p');
  emailLog.innerHTML = `E-mail ou telefone: ${signUpFormInputs[2].value}`;
  const birthLog = document.createElement('p');
  birthLog.innerHTML = `Data de nascimento: ${signUpFormInputs[4].value}`;

  const genderLog = document.createElement('p');
  if (signUpFormInputs[5].checked) {
    genderLog.innerHTML = `Gênero: ${signUpFormInputs[5].value}`;
  } else if (signUpFormInputs[6].checked) {
    genderLog.innerHTML = `Gênero: ${signUpFormInputs[6].value}`;
  } else if (signUpFormInputs[7].checked) {
    genderLog.innerHTML = `Gênero: ${signUpFormInputs[7].value}`;
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
// Eu pensei que tinha visto a função no material da Trybe no dia de forms, mas parece que vi em outro lugar. De qualquer forma, eu revisei sobre ela aqui: https://www.w3schools.com/js/js_validation_api.asp
}

const logInClick = document.getElementById('button-login').addEventListener('click', logInButton);
const cadastro = document.getElementById('facebook-register').addEventListener('click', checkRegistration);
const genderCustom = document.getElementById('Personalizado').addEventListener('click', addGender);
const genderFemale = document.getElementById('Feminino').addEventListener('click', removeCustom);
const genderMale = document.getElementById('Masculino').addEventListener('click', removeCustom);
