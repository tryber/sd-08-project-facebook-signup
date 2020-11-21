const buttonID = document.getElementById('button-login');

buttonID.addEventListener('click', function () {
  const inputValue = document.getElementById('user-email-phone').value;

  alert(inputValue);
});

function ErrorMessage() {
  const inputsCadastro = document.getElementsByClassName('inputsSign');
  const findError = document.getElementById('Error');
  for (let i = 0; i < inputsCadastro.length; i += 1) {
    if (inputsCadastro[i].value === '') {
      findError.innerHTML = 'Campos inválidos';
      break;
    }
  }
}

const buttonCadastro = document.getElementById('facebook-register');
buttonCadastro.addEventListener('click', ErrorMessage());

function PersonalizadoButton() {
  const buttonPersonalizado = document.getElementById('Personalizado');

  buttonPersonalizado.addEventListener('changed', function () {
    const createInput = document.createElement('input');

    createInput.name = 'gender-custom';
    createInput.placeholder = 'Gênero (opcional)';
    createInput.className = 'radio-buttons';
  });
}
PersonalizadoButton();
