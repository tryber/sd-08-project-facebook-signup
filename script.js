const botaoLogin = document.getElementById('button-login');
const emailOuTelefone = document.getElementById('user-email-phone');

function alertBotao() {
  alert(emailOuTelefone.value);
}
botaoLogin.addEventListener('click', alertBotao);

const botaoEnviar = document.querySelector('#facebook-register');
const divVazia = document.getElementById('div-vazia');
botaoEnviar.addEventListener('click', function (event) {
  event.preventDefault();
  const inputsText = document.getElementsByClassName('inputs');
  divVazia.innerHTML = '';
  for (let index = 0; index < inputsText.length; index += 1) {
    const campoInput = inputsText[index];
    if (campoInput.required) {
      if (campoInput.value === '') {
        divVazia.innerHTML = 'Campos inválidos';
        return;
      }
    }
  }
  divVazia.innerHTML = 'Campos válidos';
});

const botaoPer = document.querySelector('#gender-custom');
const radioPerso = document.getElementsByClassName('radioperso');

for (let index = 0; index < radioPerso.length; index += 1) {
  radioPerso[index].addEventListener('click', function () {
    if (radioPerso[2].checked === true) {
      botaoPer.classList.remove('hidden');
    } else {
      botaoPer.classList.add('hidden');
    }
  });
}
