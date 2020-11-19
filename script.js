let buttonLogin = document.getElementById('button-login');
let emailOrTelephone = document.getElementById('user-email-phone');


buttonLogin.addEventListener('click', funcaoAlert());

function funcaoAlert() {
  window.alert(emailOrTelephone.value);
}
