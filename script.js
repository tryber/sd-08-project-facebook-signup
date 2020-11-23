const alertButton = document.getElementById('button-login');
const userInput = document.getElementById('user-email-phone');
const genderInput = document.getElementById('other');
const inputDestination = document.querySelector('.gender-radio-input');

function alertLogin() {
  if (userInput.value === '') {
    alert('Usuário inválido!');
  } else {
    alert(userInput.value);
  }
}

alertButton.addEventListener('click', alertLogin);

function customInput() {
  if (genderInput.value === 'Personalizado') {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'gender-custom';
    newInput.placeholder = 'Gênero (opcional)';
    newInput.id = 'newInput';
    newInput.className = 'newInput';
    inputDestination.appendChild(newInput);
  }
}

genderInput.addEventListener('click', customInput);
