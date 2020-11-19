function userAlert() {
  let loginBtn = document.querySelector('#button-login');
  let userLogin = document.querySelector('#user-email-phone');

  loginBtn.addEventListener('click', function () {
    alert(userLogin.value);
  })
}

userAlert(); 