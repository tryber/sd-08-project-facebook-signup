function buttonLogin() {
  const button = document.querySelector('#button-login');
  button.addEventListener('click', function () {
    const email = document.querySelector('#user-email-phone-label').value;
    const msg = 'email ou telefone: ' + email;
    alert(msg);
  })
}

buttonLogin();
