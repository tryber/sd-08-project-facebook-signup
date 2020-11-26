const buttonEntrar = document.querySelector('#button-login');
const emailOuTelefone = document.querySelector('#user-email-phone');
const buttonCadastro = document.querySelector('#facebook-register');
const novoUsuario = document.querySelector('.novoUsuario');
const personalizado = document.querySelector('.personalizado')
const genero = document.querySelector('.genero');
const generoPersonalizado = document.getElementById('genero-personalizado');

// const rapidoFacil = document.querySelector('.quick-easy');

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

let selecionado = document.querySelector('input[name="gender"]:checked').value;
genero.addEventListener('click', function () {
  selecionado = document.querySelector('input[name="gender"]:checked').value;
  // genero = document.querySelector('.genero');
  if(selecionado != "Personalizado"){
    personalizado.style.display = 'none';
  }
  personalizado.style.display = 'flex';
});
