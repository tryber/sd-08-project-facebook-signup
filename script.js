const buttonLoginBtn = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');
buttonLoginBtn.addEventListener('click', function () {
  alert(userEmailPhone.value);
});
