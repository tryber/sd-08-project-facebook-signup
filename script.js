let btnEntrar = document.getElementById('button-login');
btnEntrar.addEventListener("click", entrar);

function entrar() {
  let email = document.getElementById("user-email-phone").value;
  alert(email);
}
