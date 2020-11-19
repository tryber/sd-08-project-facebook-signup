function userAlert() {
  const loginBtn = document.querySelector('#button-login');
  const userLogin = document.querySelector('#user-email-phone');

  loginBtn.addEventListener('click', function () {
    alert(userLogin.value);
  });
}
userAlert();
