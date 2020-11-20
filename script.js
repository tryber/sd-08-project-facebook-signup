const btnFacebookReg = document.getElementById('facebook-register');
btnFacebookReg.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

const btnRadioPersonalizado = document.getElementsByName('gender')[2];
btnRadioPersonalizado.addEventListener('click', function () {
  document.getElementsByClassName('hide')[0].style.display = 'inline-block';
});
const btnRadioFem = document.getElementsByName('gender')[0];
btnRadioFem.addEventListener('click', function () {
  document.getElementsByClassName('hide')[0].style.display = 'none';
});
const btnRadioMasc = document.getElementsByName('gender')[1];
btnRadioMasc.addEventListener('click', function () {
  document.getElementsByClassName('hide')[0].style.display = 'none';
});
document.getElementsByName('firstname')[0].style.width = '138px';
document.getElementsByName('lastname')[0].style.width = '138px';
document.getElementsByName('phone_email')[0].style.width = '300px';
document.getElementsByName('password')[0].style.width = '300px';
const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

