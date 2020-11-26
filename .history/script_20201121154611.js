const buttonEntrar = document.querySelector('#button-login');
const emailOuTelefone = document.querySelector('#user-email-phone');
const buttonCadastro = document.querySelector('#facebook-register');
const novoUsuario = document.querySelector('.novoUsuario');
const personalizado = document.querySelector('.personalizado');
const generos = document.querySelector('.generos');
let selecionado = document.querySelector('input[name="gender"]:checked').value;

buttonEntrar.addEventListener('click', function () {
  alert(emailOuTelefone.value);
});

buttonCadastro.addEventListener('click', function (event) {
  const mensagemErro = document.createTextNode('Campos inválidos');
  event.preventDefault();
  // Dica da Tais no plantão do dai 20-11-20
  const resultado = novoUsuario.checkValidity();
  if (resultado === false) {
    novoUsuario.appendChild(mensagemErro);
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
