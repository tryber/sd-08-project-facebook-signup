const buttonLogin = document.querySelector('#button-login');
const buttonCustomGender = document.querySelector('#Personalizado');


buttonLogin.addEventListener('click', () => {
  const emailValue = document.querySelector('#user-email-phone');
  alert(emailValue.value);
});

function plotInvalid() {
  const formField = document.querySelector('.create-account');
  const msgError = document.createElement('p');
  msgError.textContent = 'Campos inválidos';
  formField.appendChild(msgError);
}

buttonCustomGender.addEventListener('click', createCustomGender);

function createCustomGender() {
  const genderCustom = document.querySelector('.hidden-input');
  genderCustom.innerHTML = '<input name="gender-custom" placeholder="Gênero (opcional)" type="text">';
}
