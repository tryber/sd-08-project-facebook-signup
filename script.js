const buttonID = document.getElementById('button-login');
const findError = document.getElementById('Error');
const inputsRegister = document.getElementsByClassName('inputsSign');
const buttonRegister = document.getElementById('facebook-register');
const buttonPersonalizado = document.getElementById('personalizado');
const createInput = document.createElement('input');

buttonID.addEventListener('click', function () {
  const inputValue = document.getElementById('user-email-phone').value;
  alert(inputValue);
});

buttonRegister.addEventListener('click', ErrorMessage());
function ErrorMessage() {
  for (let index = 0; index < inputsRegister.length; index += 1) {
    if (inputsRegister[index].value === '') {
      findError.innerHTML = 'Campos inválidos';
      break;
    }
  }
}

buttonPersonalizado.addEventListener('click', function () {
  createInput.name = 'gender-custom';
  createInput.type = 'text';
  createInput.placeholder = 'Gênero (opcional)';
  createInput.className = 'radio-buttons';
  const father = document.getElementById('genderPersonalizado');
  father.appendChild(createInput);
});
