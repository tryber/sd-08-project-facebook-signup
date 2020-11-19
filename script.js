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
function btnLogin() {
  const login = document.getElementById('button-logion');
  login.addEventListener('click', function () {
    const alerta = document.querySelector('#user-email-phone').value;
    alert(alerta);
  });
}

btnLogin();
