const buttonID = document.getElementById('button-login');

buttonID.addEventListener('click', function () {
  const inputValue = document.getElementById('user-email-phone').value;

  alert(inputValue);
});

const buttonCadastro = document.getElementById('facebook-register');

buttonCadastro.addEventListener('click', function () {
  const inputsCadastro = document.getElementsByClassName('inputsSign');

  for (let i = 0; i < inputsCadastro.length; i += 1) {
    if (inputsCadastro[i].value === '') {
      alert('Campos inválidos');
      break;
    }
  }
});
