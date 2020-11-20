function entrar() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}
function loginCheck() {
  const btnEntrar = document.getElementById('button-login');
  btnEntrar.addEventListener('click', entrar);
}
loginCheck();

// modelo modificado do site http://gabsferreira.com/alterando-a-validacao-padrao-do-html5/

const formInputLocal = document.querySelectorAll('.form-input');
for (let index = 0; index < formInputLocal.length; index += 1) {
  formInputLocal[index].oninvalid = function () {
    // remove mensagens de erro padrão
    this.setCustomValidity('');
    // faz a validação novamente
    if (!this.validity.valid) {
      // se estiver inválido, coloca a mensagem
      this.setCustomValidity('Campos inválidos');
    }
  };
}
