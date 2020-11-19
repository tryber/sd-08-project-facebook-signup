const btnLogin = document.getElementById('button-login');
let userId;

btnLogin.addEventListener('click', function () {
  userId = document.getElementById('user-email-phone');
  alert(userId.value);
});
