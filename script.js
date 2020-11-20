const email = document.getElementById('user-email-phone');
const loginBtn = document.getElementById('button-login');
function loginAlert() {
  alert(email.value);
}
loginBtn.addEventListener('click', loginAlert);
const personalizado = document.getElementById('other');
const radioWrapper = document.getElementsByClassName('radio-wrapper')[0];
function generoPersonalizado() {
  const divDoPersonalizado = document.createElement('div');
  radioWrapper.appendChild(divDoPersonalizado);
  const insiraPersonalizado = document.createElement('input');
  insiraPersonalizado.type = 'text';
  insiraPersonalizado.name = 'gender-custom';
  insiraPersonalizado.placeholder = 'Gênero (opcional)';
  insiraPersonalizado.id = 'insira-personalizado';
  divDoPersonalizado.appendChild(insiraPersonalizado);
}
personalizado.addEventListener('click', generoPersonalizado);
