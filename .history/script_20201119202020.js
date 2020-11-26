const buttonEntrar = document.querySelector('#button-login');
const emailOuTelefone = document.querySelector('#user-email-phone');
// const buttonCadastro = document.querySelector('#facebook-register');
const nome = document.querySelector('.firstname');
const sobreNome = document.querySelector('.lastname');
const telefone = document.querySelector('.phone_email');
const novaSenha = document.querySelector('.password');
const genero = document.querySelector('.gender');
const aniversario = document.querySelector('.birthdate');
const rapidoFacil = document.querySelector('.quick-easy');
const variaveis = { nome, sobreNome, telefone, novaSenha, genero, aniversario };
buttonEntrar.addEventListener('click', function () {
  alert(emailOuTelefone.value);
});

function cadastro() {
  const mensagemErro = document.createTextNode('Campos inválidos');
  for (const valores in variaveis) {
    if (valores.value === '') {
      rapidoFacil.appendChild(mensagemErro);
      return false;
    }
  }
  return true;
}
cadastro ();
