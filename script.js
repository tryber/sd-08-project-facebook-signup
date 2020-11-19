const btnLogin = document.getElementById('button-login');
const emailTel = document.getElementById('user-email-phone');

btnLogin.addEventListener('click', function () {
  window.alert(emailTel.value);
});
