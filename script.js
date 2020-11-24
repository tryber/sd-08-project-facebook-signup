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

function exibirDados() {
  const nome = document.querySelector('[name=firstname]').value;
  const sobreNome = document.querySelector('[name=lastname]').value;
  const emailOuTel = document.querySelector('[name=phone_email]').value;
  const dataNasc = document.querySelector('[name=birthdate]').value;
  const genero = pegarRadioValor('gender');
  const formulario = document.querySelector('.right-content');
  formulario.innerHTML = '';

  const p1 = document.createElement('p');
  p1.innerHTML = `Olá, ${nome} ${sobreNome}`;
  formulario.appendChild(p1);

  const p2 = document.createElement('p');
  p2.innerHTML = emailOuTel;
  formulario.appendChild(p2);

  const p3 = document.createElement('p');
  p3.innerHTML = dataNasc;
  formulario.appendChild(p3);

  const p4 = document.createElement('p');
  p4.innerHTML = genero;
  formulario.appendChild(p4);
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
