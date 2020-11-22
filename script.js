const buttonID = document.getElementById('button-login');
const findError = document.getElementById('Error');
const inputRegister = document.getElementsByClassName('inputsSign');
const buttonRegister = document.getElementById('facebook-register');
const customGenderButton = document.getElementById('personalizado');
const createInput = document.createElement('input');
const getRightContent = document.querySelector('.right-content');
const getRadioChecked = document.getElementsByName('gender');

function getGender() {
  let genderValue = '';
  for (let index = 0; index < getRadioChecked.length; index += 1) {
    if (getRadioChecked[index].checked) {
      genderValue = getRadioChecked[index].value;
    }
  }
  return genderValue;
}

buttonID.addEventListener('click', function () {
  const inputValue = document.getElementById('user-email-phone').value;
  alert(inputValue);
});

function validatedMessageInput() {
  const inputArray = [];
  for (let index = 0; index < inputRegister.length; index += 1) {
    inputArray.push(inputRegister[index].value);
  }
  getRightContent.innerHTML = `<p>Olá, ${inputArray[0]} ${inputArray[1]}
    <br> Celular/Email: ${inputArray[2]}
    <br> Data de Nascimento: ${inputArray[4]}
    <br> Gênero: ${getGender()}</p>`;
}

function ErrorMessage() {
  const fieldArray = [];
  for (let index = 0; index < inputRegister.length; index += 1) {
    fieldArray.push(inputRegister[index].value);
  }
  if (fieldArray.includes('')) {
    findError.innerHTML = 'Campos inválidos';
  } else {
    validatedMessageInput();
  }
}

buttonRegister.addEventListener('click', ErrorMessage);
buttonRegister.addEventListener('click', (event) => {
  event.preventDefault();
});

customGenderButton.addEventListener('click', function () {
  createInput.name = 'gender-custom';
  createInput.type = 'text';
  createInput.placeholder = 'Gênero (opcional)';
  createInput.className = 'radio-buttons';
  const father = document.getElementById('genderPersonalizado');
  father.appendChild(createInput);
});
