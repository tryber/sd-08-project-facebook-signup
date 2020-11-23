const buttonLogin = document.getElementById('button-login');
const user = document.getElementById('user-email-phone');
const pswd = document.getElementById('user-password');
buttonLogin.addEventListener('click', function() {
  alert(user.value, pswd.value);
});
