function logInButton() {
  const alertText = document.getElementById('user-email-phone').value;
  alert(alertText);
}

const logInClick = document.getElementById('button-login');
logInClick.addEventListener('click', logInButton);

function checkRegistration() {
  const gender = document.getElementsByClassName('gender');

  const registrationArray = [document.getElementById('firstname').value, document.getElementById('lastname').value, document.getElementById('phone_email').value, document.getElementById('password').value, document.getElementById('label-birthdate').value];

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
