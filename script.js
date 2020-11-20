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

const registerButton = document.getElementById('facebook-register');
registerButton.addEventListener('click', (event) => {
  event.preventDefault();
  const singUpForm = document.querySelector('.singup');
  if (singUpForm.checkValidity()) {
    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastName = document.querySelector('input[name="lastname"]').value;
    const phoneEmail = document.querySelector('input[name="phone_email"]').value;
    let contact = '';
    if (phoneEmail.includes('(')) {
      contact = 'Celular';
    } else {
      contact = 'Email';
    }
    const birthDate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[type="radio"]:checked').value;

    for (let index = singUpForm.children.length - 1; index >= 0; index -= 1) {
      singUpForm.children[index].remove();
    }

    const welcomePhrase = document.createElement('p');
    welcomePhrase.innerHTML = `Olá, ${firstName} ${lastName}<br><br>
    Bem vindo ao Facebook!<br><br>
    Dados Cadastrados:<br>
    - ${contact}: ${phoneEmail}<br>
    - Data de nascimento: ${birthDate}<br>
    - Gênero: ${gender}`;
    singUpForm.insertAdjacentElement('afterbegin', welcomePhrase);
  } else {
    if (singUpForm.firstChild.innerHTML === 'Campos inválidos') {
      singUpForm.firstChild.remove();
    }
    const invalidWarning = document.createElement('p');
    invalidWarning.innerHTML = 'Campos inválidos';
    singUpForm.insertAdjacentElement('afterbegin', invalidWarning);
  }
});
