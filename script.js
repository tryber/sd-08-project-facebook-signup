const buttonLogin = document.getElementById('button-login');
const emailPhone = document.getElementById('user-email-phone-label');

buttonLogin.addEventListener('click', function (event) {
  event.preventDefault();
  alert(emailPhone.value);
})