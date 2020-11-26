const buttonEntrar = document.querySelector('#button-login');
const emailOuTelefone = document.querySelector('#user-email-phone');
const buttonCadastro = document.querySelector('#facebook-register');
const nome = document.querySelector('.firstname');
const sobreNome = document.querySelector('.lastname');
const telefone = document.querySelector('.phone_email');
const novaSenha = document.querySelector('.password');
const genero = document.querySelector('.gender');
const aniversario = document.querySelector('.birthdate');
const rapidoFacil = document.querySelector('.quick-easy');
const variaveis = { a: nome, b: sobreNome, c:telefone, d: novaSenha, e: genero, f: aniversario };
buttonEntrar.addEventListener('click', function () {
  alert(emailOuTelefone.value);
});
const mensagemErro = document.createTextNode('Campos inválidos');
// const naoSei = Object.value(variaveis);
buttonCadastro.addEventListener('click', function (event) {

  event.preventDefault();
  for (const valor in variaveis) {
    if (valor.value == null) {
      rapidoFacil.appendChild(mensagemErro);
    }
  }
});
