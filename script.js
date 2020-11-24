const botaoLogin = document.getElementById('button-login');
const emailOuTelefone = document.getElementById('user-email-phone');

function alertBotao() {
  alert(emailOuTelefone.value);
}
botaoLogin.addEventListener('click', alertBotao);

function pegarRadioValor(name) {
  const rads = document.getElementsByName(name);
  for (let index = 0; index < rads.length; index += 1) {
    if (rads[index].checked) {
      return rads[index].value;
    }
  }
  return null;
}

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
