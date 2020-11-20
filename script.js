const botaoLogin = document.getElementById('button-login');

botaoLogin.addEventListener('click', function () {
  alert('Email ou telefone');
});


const botaoenviar = document.querySelector('#facebook-register');

botaoenviar.addEventListener('click', function () {

  const inputsText = document.getElementsByClassName('input');

  for (let index = 0; index < inputsText.length; index += 1) {
    let input = inputsText[index];
    if (input.required) {
      if (input.value === '') {
        alert('Campos inválidos');
      }
    }
  }
});
