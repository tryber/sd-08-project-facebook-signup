//  req 7 - criar alert para o botão;

const buttonEntrar = document.querySelector('#button-login');

function addAlert() {
  buttonEntrar.addEventListener('click', function () {
    const inputEmail = document.querySelector('#user-email-phone');
    alert(inputEmail.value);
  });
}
addAlert();

// validar input
const facebookRegister = document.querySelector('#facebook-register');
const form = document.querySelector('.register');
const message = document.querySelector('#validation-message');
form.appendChild(message);
function emptyInput(event) {
  event.preventDefault();
  const inputArray = document.querySelectorAll('.input-validation');
  for (let index = 0; index < inputArray.length; index += 1) {
    if (inputArray[index].value === '') {
      message.innerHTML = 'Campos inválidos';
    } else {
      const phoneMail = document.querySelector('.phone_email').value;
      const birthDay = document.querySelector('.birthday').value;
      const gender = document.querySelectorAll('input[name="gender"]').value;
      const firstName = document.querySelector('.first-name').value;
      const lastName = document.querySelector('.last-name').value;
      const printAll = `Olá, ${firstName} ${lastName} ${gender} ${phoneMail} ${birthDay}`;
      message.innerHTML = `${printAll}`;
    }
  }
}
facebookRegister.addEventListener('click', emptyInput);

const radios = document.querySelectorAll('[type=radio]');
const customGender = document.querySelector('#gender-custom');
for (let index = 0; index < radios.length; index += 1) {
  const radio = radios[index];
  radio.addEventListener('click', function (event) {
    if (event.target.id === 'personalizado') {
      customGender.classList.remove('d-none');
    } else {
      customGender.classList.add('d-none');
    }
  });
}
