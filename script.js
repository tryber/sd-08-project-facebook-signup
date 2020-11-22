// Variáveis
const buttonLogin = document.getElementById('button-login');
const emailPhone = document.getElementById('user-email-phone');
const genderUndefined = document.getElementById('undefined');
const genderForm = document.querySelector('.radio-form');
const buttonCadastro = document.getElementById('facebook-register');
const required = document.querySelectorAll('[required]');

buttonLogin.addEventListener('click', function (event) {
  event.preventDefault();
  alert(emailPhone.value);
});

genderUndefined.addEventListener('click', function () {
  const genderCustom = document.createElement('input');
  genderCustom.name = 'gender-custom';
  genderCustom.placeholder = 'Gênero (opcional)';

  genderForm.appendChild(genderCustom);
});

buttonCadastro.addEventListener('click', function () {
  for (let index = 0; index < required.length; index += 1) {
    if (required[index].value === '') {
      alert('Campos inválidos');
    }
  }
});
