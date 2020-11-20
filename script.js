function logInButton() {
  const alertText = document.getElementById('user-email-phone').value;
  alert(alertText);
}

const logInClick = document.getElementById('button-login');
logInClick.addEventListener('click', logInButton);

function checkRegistration() {
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const phoneMail = document.getElementById('phone_email').value;
  const password = document.getElementById('password').value;
  const birthdate = document.getElementById('label-birthdate').value;
  const gender = document.getElementsByClassName('gender');

  const registrationArray = [firstName, lastName, phoneMail, password, birthdate];

  for (let index = 0; index < 5; index += 1) {
    if (registrationArray[index] === '') {
      document.getElementById('invalid').innerHTML = ('Campos inválidos');
    }
  }
  if (!(gender[0].checked || gender[1].checked || gender[2].checked)) {
    document.getElementById('invalid').innerHTML = ('Campos inválidos');
  }
}

const cadastro = document.getElementById('facebook-register');
cadastro.addEventListener('click', checkRegistration);
