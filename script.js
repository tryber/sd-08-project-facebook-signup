function fBtnLogin() {
  const inputUserEmail = document.getElementById('user-email-phone');
  alert(inputUserEmail.value);
}
document.getElementById('button-login').addEventListener('click', fBtnLogin);
