const buttonEntrar = document.querySelector('#button-login');
const emailOuTelefone = document.querySelector('#user-email-phone');
const buttonCadastro = document.querySelector('#facebook-register');
const novoUsuario = document.querySelector('.novoUsuario')

buttonEntrar.addEventListener('click', function () {
  alert(emailOuTelefone.value);
});

buttonCadastro.addEventListener('click', function (event) {
  const mensagemErro = document.createTextNode('Campos inválidos');
  event.preventDefault();
  // Dica da Tais no plantão do dai 20-11-20
  var resultado = result.checkValidity();
    if (resultado === false) {
      rapidoFacil.appendChild(mensagemErro);
    }
});
