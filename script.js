function entrar() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}

const btnEntrar = document.getElementById('button-login');
btnEntrar.addEventListener('click', entrar);
