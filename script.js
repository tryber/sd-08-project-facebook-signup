const botaoLogin = document.getElementById('button-login');
const emailOuTelefone = document.getElementById('user-email-phone');

function alertBotao() {
  alert(emailOuTelefone.value);
}
botaoLogin.addEventListener('click', alertBotao);

const botaoEnviar = document.querySelector('#facebook-register');
const divVazia = document.getElementById('div-vazia');
botaoEnviar.addEventListener('click', function (event) {
  const inputsText = document.getElementsByClassName('inputs');
  event.preventDefault();
  divVazia.innerHTML = '';
  for (let index = 0; index < inputsText.length; index += 1) {
    const campoInput = inputsText[index];
    if (campoInput.required) {
      if (campoInput.value === '') {
        divVazia.innerHTML = 'Campos inválidos';
      }
    }
  }
  if(divVazia.innerHTML === '') exibirDados();
});

const botaoPer = document.querySelector('#botaopersonalizado');
const radioPerso = document.getElementsByClassName('radioperso');

for (let index = 0; index < radioPerso.length; index += 1) {
  radioPerso[index].addEventListener('click', function () {
    if (radioPerso[2].checked === true) {
      botaoPer.innerHTML =
        '<input type="text" name="gender-custom" placeholder="Gênero (opcional)">';
    } else {
      botaoPer.innerHTML = '';
    }
  });
}

const rightContent = document.querySelector('.right-content');
const nome = document.querySelector('[name=firstname]');
const sobreNome = document.querySelector('[name=lastname]');
const mostreNome = document.createElement('p');
const emailOuTel = document.querySelector('[name=phone_email]');
const dataNasc = document.querySelector('[name=birthdate]');
const genero = document.getElementsByClassName('radioperso');


function pegarRadioValor(name){
  
  const rads = document.getElementsByName(name);
  for(let index = 0; i < rads.length; i += 1){
    if(rads[index].checked){
      return rads[index].value;
    }  
  }
    
  return null;
}

function exibirDados() {

  let genero = pegarRadioValor('gender');
  let str = ''
  str += `Olá, ${nome.value} ${sobreNome.value}<br><br>`;
  str += `${emailOuTel.value} <br><br>`;
  str += `${dataNasc.value} <br><br>`;
  str += `${genero}`;
  rightContent.innerHTML = str;
}