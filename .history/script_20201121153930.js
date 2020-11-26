const buttonEntrar = document.querySelector('#button-login');
const emailOuTelefone = document.querySelector('#user-email-phone');
const buttonCadastro = document.querySelector('#facebook-register');
const novoUsuario = document.querySelector('.novoUsuario');
const personalizado = document.querySelector('.personalizado')
const generos = document.querySelector('.generos');
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

// let selecionado = document.querySelector('input[name="gender"]:checked').value;
generos.addEventListener('click', function () {
  var selecionado = document.querySelector('input[name="gender"]:checked').value;
  // genero = document.querySelector('.genero');
  console.log(selecionado);
  if(selecionado == "Personalizado"){
    personalizado.style.display = 'flex';
    console.log("aparece");
  } else {
  personalizado.style.display = 'none';
  console.log("some");
  }
});
