function alertLogin() {
  const buttonForm = document.querySelector('#button-login');
  const loginInput = document.querySelector('#user-email-phone');
  buttonForm.addEventListener('click', function () {
    alert(loginInput.value);
  });
}
