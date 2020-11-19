function btnLogin() {
  let btnEntrar = document.querySelector('#button-login');
  let textLogin = document.querySelector('#user-email-phone');
  btnEntrar.addEventListener('click', function() {
    alert(textLogin.value);
  });
}
btnLogin();