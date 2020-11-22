function fBtnLogin() {
  const inputUserEmail = document.getElementById('user-email-phone');
  alert(inputUserEmail.value);
}

document.getElementById('button-login').addEventListener('click', fBtnLogin);

function fBtnRegister(event) {
  event.preventDefault();
  const form = document.getElementsByClassName('facebook-signin')[0];
  const message = document.getElementById('message');
  const validacao = form.checkValidity();
  form.reportValidity();
  if (validacao) {
    message.innerText = '';
  } else {
    message.innerText = 'Campos inválidos';
  }
}

document.getElementById('facebook-register').addEventListener('click', fBtnRegister);
