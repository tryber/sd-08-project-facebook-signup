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
const inputArray = document.querySelectorAll('.input-validation');
const facebookRegister = document.querySelector('#facebook-register');

facebookRegister.addEventListener('click', function () {
  for (let index = 0; index < inputArray.length; index += 1) {
    if (inputArray[index].innerText === '') {
      alert('Campos inválidos');
      break;
    }
  }
});

// adiciona input pesonalizado
const divGender = document.querySelector('.gender');
const personalizadoGender = document.querySelector('#personalizado');

personalizadoGender.addEventListener('click', function () {
  const createInput = document.createElement('input');
  createInput.name = 'gender-custom';
  createInput.placeholder = 'Gênero (opcional)';
  divGender.appendChild(createInput);
});
