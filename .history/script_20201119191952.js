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

buttonEntrar.addEventListener('click', function () {
  alert(emailOuTelefone.value);
});

function cadastro(){
  if(nome.value === ''|| sobreNome.value === ''|| telefone.value === '' || novaSenha.value ==='' || genero.value === '' || aniversario.value ===''){
    //let mensagemErro = document.createElement('p');
    mensagemErro = document.creatTextNode('Campos inválidos');
    mensagemErro.appendChild(rapidoFacil);
  }
}
