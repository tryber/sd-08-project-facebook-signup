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

function checkRegistration() {
  const registrationArray = [firstName, lastName, phoneMail, password, birthdate];

  let invalidInput = 0;
  for (let index = 0; index < 5; index += 1) {
    if (registrationArray[index] === '') {
      invalidInput += 1;
    }
  }
  let genderCheck = 0;
  for (let index = 0; index < 3; index += 1) {
    if (gender[index].checked) {
      genderCheck += 1;
    }
  }
  if (genderCheck === 0) {
    invalidInput += 1;
  }
  if (invalidInput > 0) {
    alert('Campos inválidos');
  }
}

const cadastro = document.getElementById('facebook-register');
cadastro.addEventListener('click', checkRegistration);
