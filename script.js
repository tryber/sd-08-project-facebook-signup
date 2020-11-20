const botaoLogin = document.getElementById('button-login');
const emailOuTelefone = document.getElementById('user-email-phone');

function alertBotao() {
  alert(emailOuTelefone.value);
}
botaoLogin.addEventListener('click', alertBotao);

const botaoEnviar = document.querySelector('#facebook-register');
const formsPosicao = document.getElementById('limpa-forms');
botaoEnviar.addEventListener('click', function (event) {
  const inputsText = document.getElementsByClassName('inputs');
  event.preventDefault();
  for (let index = 0; index < inputsText.length; index += 1) {
    const campoInput = inputsText[index];
    if (campoInput.required) {
      if (campoInput.value === '') {
        alert('Campo inválido');
      }else{
        campoInput.value = '';
      }
    }
  }
});

const persona = document.querySelector('.botaopersonalizado');
const radioPerso = document.getElementsByClassName('radioperso');

for (let index = 0; index < radioPerso.length; index += 1) {
  radioPerso[index].addEventListener('click', function () {
    if (radioPerso[2].checked === true) {
      persona.style.display = 'block';
    } else {
      persona.style.display = 'none';
    }
  });
}
