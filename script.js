const entrar = document.getElementById('button-login');
const emailPhone = document.getElementById('user-email-phone');

entrar.addEventListener('click', functionAlert());

funciton functionAlert() {
  window.alert(emailPhone.value);
}
