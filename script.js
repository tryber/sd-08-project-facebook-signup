const button = document.getElementById('button-login');
const login = document.getElementById('user-email-phone');

button.addEventListener('click', function () {
  alert(login.value);
});
