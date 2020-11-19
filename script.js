const buttonLogin = document.getElementById('button-login');
const emailOrTelephone = document.getElementById('user-email-phone');

function funcaoAlert() {
  window.alert(emailOrTelephone.value);
}

buttonLogin.addEventListener('click', funcaoAlert());

