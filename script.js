const button = document.querySelector('#button-login');

button.addEventListener('click', () => {
  const emailTel = document.querySelector('#user-email-phone').value;
  alert(emailTel);
});

const buttonRegister = document.querySelector('#facebook-register');

buttonRegister.addEventListener('click', (event) => {
  const form = document.querySelectorAll('.form');
  const div = document.querySelector('.erro');
  for (let index = 0; index < form.length; index += 1) {
    if (form[index].value === '') {
      event.preventDefault();
      div.innerText = 'Campos inválidos';
    }
  }
});


const personalizado = document.getElementsByName('gender');
const newField = document.querySelector('.new-field');
const campoPersonalizado = document.createElement('input');
campoPersonalizado.name = 'gender-custom';
campoPersonalizado.placeholder = 'Gênero (opcional)';

for (let index = 0; index < personalizado.length; index += 1) {
  personalizado[index].addEventListener('click', () => {
    if (personalizado[index].value === 'Personalizado') {
      newField.appendChild(campoPersonalizado);
    }
  });
}
