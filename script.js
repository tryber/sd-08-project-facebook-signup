const btnEntrar = document.getElementById('button-login');
const btnCadastre = document.getElementById('facebook-register');
const divMensagemInvalida = document.getElementById('mensagem-invalida');
const txtEmail = document.getElementById('user-email-phone');

function alertConteudoEmail() {
  alert(txtEmail.value);
}

btnEntrar.addEventListener('click', alertConteudoEmail);

function validaCadastro() {
  const camposValidacao = document.querySelectorAll('.validator');
  for (let campo = 0; campo < camposValidacao.length; campo += 1) {
    if (camposValidacao[campo].value === '') {
      divMensagemInvalida.style.display = 'block';
      return;
    }
  }
}

btnCadastre.addEventListener('click', validaCadastro);
