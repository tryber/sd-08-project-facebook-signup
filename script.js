const buttonID = document.getElementById('button-login');
const findError = document.getElementById('Error');
const inputsRegister = document.getElementsByClassName('inputsSign');

buttonID.addEventListener('click', function () {
  const inputValue = document.getElementById('user-email-phone').value;

  alert(inputValue);
});

function ErrorMessage() {
  for (let index = 0; index < inputsRegister.length; index += 1) {
    if (inputsRegister[index].value === '') {
      findError.innerHTML = 'Campos inválidos';
      break;
    }
  }
}

const buttonRegister = document.getElementById('facebook-register');
buttonRegister.addEventListener('click', ErrorMessage());

const buttonPersonalizado = document.getElementById('personalizado');
buttonPersonalizado.addEventListener('click', function () {
  const createInput = document.createElement('input');
  createInput.name = 'gender-custom';
  createInput.type = 'text';
  createInput.placeholder = 'Gênero (opcional)';
  createInput.className = 'radio-buttons';
  const father = document.getElementById('genderPersonalizado');
  father.appendChild(createInput);
});
