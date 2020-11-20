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
const message = document.querySelector('#validation-message')

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
const divGender = document.querySelector('.gender');
const personalizadoGender = document.querySelector('#personalizado');

personalizadoGender.addEventListener('click', function () {
  const createInput = document.createElement('input');
  createInput.className = 'input-validation';
  createInput.name = 'gender-custom';
  createInput.placeholder = 'Gênero (opcional)';
  divGender.appendChild(createInput);
});
