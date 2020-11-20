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

const personalizado = document.getElementById('personalizado');

function addInputGender() {
  const input = document.createElement('input');
  const genderCustom = document.getElementById('gender-custom');
  if (genderCustom === null) {
    input.type = 'text';
    input.className = 'large';
    input.name = 'gender-custom';
    input.placeholder = 'Gênero (opcional)';
    input.id = 'gender-custom';
    filedForms.insertBefore(input, btnSubmited);
  }
}

personalizado.addEventListener('change', addInputGender);
