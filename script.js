const btnFacebookReg = document.getElementById('facebook-register');
btnFacebookReg.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

btnRadioPersonalizado = document.getElementsByName('gender')[2];
btnRadioPersonalizado.addEventListener('click', function () {
  document.getElementsByClassName('hide')[0].style.display = 'inline-block';
});
btnRadioFem = document.getElementsByName('gender')[0];
btnRadioFem.addEventListener('click', function () {
  document.getElementsByClassName('hide')[0].style.display = 'none';
});
btnRadioMasc = document.getElementsByName('gender')[1];
btnRadioMasc.addEventListener('click', function () {
  document.getElementsByClassName('hide')[0].style.display = 'none';
});
function btnLogin() {
  let login = document.getElementById('button-logion');
  login.addEventListener('click', function () {
    let alerta = document.querySelector('#user-email-phone').value;
    alert(alerta)
  });
}

btnLogin();
