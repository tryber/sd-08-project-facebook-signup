const buttonEntrar = document.querySelector('#button-login');
const emailOuTelefone = document.querySelector('#user-email-phone');
const buttonCadastro = document.querySelector('#facebook-register');
const novoUsuario = document.querySelector('.novoUsuario');
const personalizado = document.querySelector('.personalizado');
const generos = document.querySelector('.generos');
const conteudoPrincipal = document.querySelector('.main-content');
const paragrafoBoasVindas = document.createElement('p');
const entradas = document.querySelectorAll('.entradas');
let selecionado = document.querySelector('input[name="gender"]');

buttonEntrar.addEventListener('click', function () {
  alert(emailOuTelefone.value);
});

function guardarTexto() {
  selecionado = document.querySelector('input[name="gender"]:checked').value;
  // console.log('Olá, ' + entradas[0].value + ' ' + entradas[1].value + ', e-mail ou telefone ' + entradas[2].value + ', data de nascimento ' + entradas[3].value + ' ' + selecionado);
  paragrafoBoasVindas.innerHTML = `Olá, ${entradas[0].value} ${entradas[1].value} e-mail ou telefone ${entradas[2].value}, data de nascimento ${entradas[3].value} genero ${selecionado}`;
}

function remover() {
  const direita = document.querySelector('.right-content');
  direita.remove();
}

function preencher() {
  paragrafoBoasVindas.className = 'right-content';
  conteudoPrincipal.appendChild(paragrafoBoasVindas);
}

buttonCadastro.addEventListener('click', function (event) {
  const mensagemErro = document.createTextNode('Campos inválidos');
  event.preventDefault();
  // Dica da Tais no plantão do dai 20-11-20
  const resultado = novoUsuario.checkValidity();
  if (resultado === false) {
    novoUsuario.appendChild(mensagemErro);
  } else {
    guardarTexto();
    remover();
    preencher();
  }
});

generos.addEventListener('click', function () {
  selecionado = document.querySelector('input[name="gender"]:checked').value;
  if (selecionado === 'Personalizado') {
    personalizado.style.display = 'flex';
  } else {
    personalizado.style.display = 'none';
  }
});
