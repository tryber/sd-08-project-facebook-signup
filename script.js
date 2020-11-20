function hide() {
  if (document.getElementsByName('gender')[2].checked === true) {
    document.getElementsByClassName('hide')[0].style.display = 'inline-block';
  } else {
    document.getElementsByClassName('hide')[0].style.display = 'none';
  }
}

const btnFem = document.getElementsByName('gender')[0];
const btnMas = document.getElementsByName('gender')[1];
const btnPer = document.getElementsByName('gender')[2];
btnFem.addEventListener('click', hide);
btnMas.addEventListener('click', hide);
btnPer.addEventListener('click', hide);
const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});
window.onload = hide();
