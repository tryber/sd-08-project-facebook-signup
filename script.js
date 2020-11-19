function loginButtonAlert() {
  let buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', function () {
    let emailPhone = document.querySelector('#user-email-phone').value;
    alert(emailPhone);
  });
}

loginButtonAlert();
