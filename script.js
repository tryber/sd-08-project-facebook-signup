function alertLogin() {
  const button = document.getElementById('button-login');
  const emailPhone = document.getElementById('user-email-phone');
  button.addEventListener('click', function () {
    alert(emailPhone.value);
  });
}
alertLogin();
