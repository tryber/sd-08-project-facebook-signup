const buttonLogin = document.getElementById('button-login');
const inputUserEmailTelefone = document.getElementById('user-email-phone');
const formAlert = document.getElementById('form-alert');

buttonLogin.addEventListener('click', function () {
  alert(inputUserEmailTelefone.value);
});

const buttonCadastro = document.getElementById('facebook-register');

buttonCadastro.addEventListener('click', function (event) {
  event.preventDefault();
  const fields = document.querySelectorAll('[required]');

  for (let index = 0; index < fields.length; index += 1) {
    const field = fields[index];
    if (!field.checkValidity()) {
      formAlert.classList.remove('d-none');
    }
  }
});
