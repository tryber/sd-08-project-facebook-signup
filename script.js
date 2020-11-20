const btnLogin = document.getElementById('button-login');
const emailTel = document.getElementById('user-email-phone');

btnLogin.addEventListener('click', function () {
  window.alert(emailTel.value);
});

const filedForms = document.getElementById('forms');
const btnSubmited = document.getElementById('facebook-register');

btnSubmited.addEventListener('click', function (e) {
  e.preventDefault();
  if (!filedForms.checkValidity()) {
    window.alert('Campos inválidos');
  }
});
