function entrar() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}
function loginCheck() {
  const btnEntrar = document.getElementById('button-login');
  btnEntrar.addEventListener('click', entrar);
}
loginCheck();

// modelo modificado do site http://gabsferreira.com/alterando-a-validacao-padrao-do-html5/ mas infelizmente não era essa a solução.

const formInputLocal = document.querySelectorAll('.form-input');
for (let index = 0; index < formInputLocal.length; index += 1) {
  formInputLocal[index].oninvalid = function () {
    // remove mensagens de erro padrão
    this.setCustomValidity('');
    // faz a validação novamente
    if (!this.validity.valid) {
      // se estiver inválido, coloca a mensagem
      this.setCustomValidity('Campos inválidos');
    }
  };
}

const btnSalvar = document.getElementById('facebook-register');
const form2Local = document.getElementsByClassName('form-group2');
btnSalvar.addEventListener('click', function () {
  form2Local[0].firstChild.remove();
  form2Local[0].insertAdjacentHTML('afterbegin', 'Campos inválidos');
});

// resolvido utilizando dados do site https://pt.stackoverflow.com/questions/65696/como-capturar-par%C3%A2metros-passados-pela-url-usando-javascript contudo, foi bem compreendido o funcionamento.

function obrigado() {
  const urlData = location.search.slice(1).split('&');
  const bancoDeDados = {};
  urlData.forEach(function (parte) {
    const chaveValor = parte.split('=');
    const chave = decodeURIComponent(chaveValor[0]);
    const valor = decodeURIComponent(chaveValor[1]);
    bancoDeDados[chave] = valor;
  });

  form2Local[0].innerHTML = `<br><br> Olá, ${bancoDeDados.firstname} ${bancoDeDados.lastname}`;
  form2Local[0].innerHTML += `<br><br> Celular / E-mail: ${bancoDeDados.phone_email}`;
  form2Local[0].innerHTML += `<br> Data de Nascimento: ${bancoDeDados.birthdate}`;
  form2Local[0].innerHTML += `<br> Celular - Gênero: ${bancoDeDados.gender}`;
}

function validar() {
  if ((document.getElementById('inputnome').value === '') || (document.getElementById('inputsobrenome').value === '') || (document.getElementById('inputcelular').value === '') || (document.getElementById('inputnovasenha').value === '') || (document.getElementById('inputnascimento').value === '')) {
    localStorage.clear();
  } else {
    localStorage.clear();
    localStorage.setItem('ok', 'valido');
  }
}

btnSalvar.addEventListener('click', validar);

function validado() {
  const valido = localStorage.getItem('ok');
  if (valido === 'valido') {
    obrigado();
  }
}

window.onload = function () {
  validado();
};

document.getElementById('personalizado').addEventListener('click', function () {
  const newInput = document.createElement('input');
  newInput.name = 'gender-custom';
  newInput.placeholder = 'Gênero (opcional)';
  document.getElementById('generoOpcional').appendChild(newInput);
});
