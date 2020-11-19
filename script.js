function alertaLogin() {
  let email = document.querySelector('#user-email-phone');
  alert(email.value);
}

let botaoLogin = document.querySelector('#button-login');
botaoLogin.addEventListener('click', alertaLogin);