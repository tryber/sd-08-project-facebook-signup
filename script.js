function entrar() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}
function loginCheck() {
  const btnEntrar = document.getElementById('button-login');
  btnEntrar.addEventListener('click', entrar);
}
loginCheck();
const btncadastro = document.getElementById('facebook-register');
btncadastro.addEventListener('click', function () {
  if ((document.getElementById('inputnome').value === '') || (document.getElementById('inputsobrenome').value === '') || (document.getElementById('inputcelular').value === '') || (document.getElementById('inputnovasenha').value === '') || (document.getElementById('inputnascimento').value === '')) {
    alert('Campos inválidos');
  }
});
