const buttonLogin = document.querySelector('#button-login');

function formsAlert() {
  const emailOrPhoneNumber = document.querySelector('#user-email-phone').value;
  alert(emailOrPhoneNumber);
}

buttonLogin.addEventListener('click', formsAlert);

const custom = document.querySelector('#Personalizado');
const inputCustom = document.querySelector('.custom');

function customGender() {
  if (custom.checked) {
    inputCustom.style.display = 'contents';
  } else {
    inputCustom.style.display = 'none';
  }
}

custom.addEventListener('change', customGender);

const buttonRegister = document.querySelector('#facebook-register');

function verifyFields() {
  const firstname = document.querySelector('.firstname').value;
  const lastname = document.querySelector('.lastname').value;
  const phoneEmail = document.querySelector('.phone_email').value;
  const password = document.querySelector('.password').value;
  const birthdate = document.querySelector('.birthdate').value;
  const fields = [firstname, lastname, phoneEmail, password, birthdate];
  for (let i = 0; i < fields.length; i += 1) {
    if (fields[i] === '') {
      document.querySelector('.invalid-field').style.display = 'contents';
      break;
    }
  }
}

buttonRegister.addEventListener('click', verifyFields);
