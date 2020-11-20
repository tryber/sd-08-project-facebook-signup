const botaoEntrar = document.getElementById('button-login');
const emailOuTelefone = document.getElementById('user-email-phone');

function alertaBotao() {
  alert(emailOuTelefone.value);
}

botaoEntrar.addEventListener('click', alertaBotao);
