function entrar() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}
function loginCheck() {
  const btnEntrar = document.getElementById('button-login');
  btnEntrar.addEventListener('click', entrar);
}
loginCheck();
function validar() {
  const btncadastro = document.getElementById('facebook-register');
  if (document.getElementById('inputnome').value == null || document.getElementById('inputsobrenome').value == null
  || document.getElementById('inputcelular').value == null || document.getElementById('inputnovasenha').value == null
  || document.getElementById('inputnascimento').value == null) {
    alert('Campos inválidos');
  } else {
    return true;
  }
  btncadastro.addEventListener('click', validar);
}

