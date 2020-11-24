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
const message = document.querySelector('#validation-message');

facebookRegister.addEventListener('click', function () {
  const inputArray = document.querySelectorAll('.input-validation');
  for (let index = 0; index < inputArray.length; index += 1) {
    if (inputArray[index].value === '') {
      message.innerHTML = 'Campos inválidos';
      break;
    }
  }
});

// adiciona input pesonalizado
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
  // validação do cadastro
const form = document.querySelector('form');
const button = form.querySelector('button');
const rightContent = document.querySelector('.right-content');
button.addEventListener('click', function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  let result = '';
  result += `Olá ${formData.get('firstname')}${formData.get('lastname')}</br>`;
  result+= `${formData.get('phone_email')}`
  result += `Gênero: ${formData.get('gender')}`;
  rightContent.innerHTML = result;
});
