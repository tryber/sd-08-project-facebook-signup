const buttonLogin = document.getElementById('button-login');
const user = document.getElementById('user-email-phone');
buttonLogin.addEventListener('click', function () {
  alert(user.value);
});
