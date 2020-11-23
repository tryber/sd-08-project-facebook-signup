const botaoLogin = document.getElementById('button-login');
const emailOuTelefone = document.getElementById('user-email-phone');

function alertBotao() {
  alert(emailOuTelefone.value);
}
botaoLogin.addEventListener('click', alertBotao);

const nome = document.querySelector('[name=firstname]');
const sobreNome = document.querySelector('[name=lastname]');
const emailOuTel = document.querySelector('[name=phone_email]');
const dataNasc = document.querySelector('[name=birthdate]');
function pegarRadioValor(name) {
  const rads = document.getElementsByName(name);
  for (let index = 0; index < rads.length; index += 1) {
    if (rads[index].checked) {
      return rads[index].value;
    }
  }
  return null;
}

function exibirDados() {
  const genero = pegarRadioValor('gender');
  const formulario = document.getElementById('limpa-forms');
  formulario.innerHTML = '';
  formulario.innerHTML += `<p> Olá, ${nome.value} ${sobreNome.value}</p>`;
  formulario.innerHTML += `<p> ${emailOuTel.value}</p>`;
  formulario.innerHTML += `<p> ${dataNasc.value}</p>`;
  formulario.innerHTML += `<p> ${genero} </p>`;
}

const botaoEnviar = document.querySelector('#facebook-register');
const divVazia = document.getElementById('div-vazia');
botaoEnviar.addEventListener('click', function () {
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
  if (divVazia.innerHTML === '') exibirDados();
});

const botaoPer = document.querySelector('#botaopersonalizado');
const radioPerso = document.getElementsByClassName('radioperso');

for (let index = 0; index < radioPerso.length; index += 1) {
  radioPerso[index].addEventListener('click', function () {
    if (radioPerso[2].checked === true) {
      botaoPer.innerHTML = '<input type="text" name="gender-custom" placeholder="Gênero (opcional)">';
    } else {
      botaoPer.innerHTML = '';
    }
  });
}
