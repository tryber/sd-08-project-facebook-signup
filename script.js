const btnEntrar = document.getElementById('button-login');
const txtEmail = document.getElementById('user-email-phone');

function alertConteudoEmail() {
  alert(txtEmail.value);
}

btnEntrar.addEventListener('click', alertConteudoEmail);
