function entrar() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}
function loginCheck() {
  const btnEntrar = document.getElementById('button-login');
  btnEntrar.addEventListener('click', entrar);
}
loginCheck();
const cadastro = document.getElementById('facebook-register');
const form = document.querySelector('.form-group2');
cadastro.addEventListener('click', function () {
  for (let index = 0; index < form.length; index += 1) {
    if (form [index].innerText === ''){
      alert('Campos inválidos');
      break;
    } else {
      alert('Cadastro efetuado');
    }
  }
});
