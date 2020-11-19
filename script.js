function btnLogin() {
  const btnEntrar = document.querySelector('#button-login');
  const textLogin = document.querySelector('#user-email-phone');
  btnEntrar.addEventListener('click', function () {
    alert(textLogin.value);
  });
}
btnLogin();
