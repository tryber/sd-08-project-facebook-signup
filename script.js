function entrar() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}

function loginCheck() {
  const btnEntrar = document.getElementById('button-login');
  btnEntrar.addEventListener('click', entrar);
}
loginCheck();

const rightContent = document.querySelector('.right-content');
const formsContent = rightContent.querySelectorAll('input');
function formsCheck() {
  const btnSubmit = document.getElementById('facebook-register');
  btnSubmit.addEventListener('click', function (event) {
    for (let i = 0; i < formsContent.length; i += 1) {
      if (formsContent[i].value === '') {
        formsContent[i].value = 'Campos inválidos';
        event.preventDefault();
      }
    }
  });
}
formsCheck();
