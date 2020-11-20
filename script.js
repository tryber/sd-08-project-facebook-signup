const buttonEnter = document.getElementById('button-login');
const inputEmailPhone = document.getElementById('user-email-phone');

function showAlert() {
  buttonEnter.addEventListener('click', function () {
    alert(inputEmailPhone.value);
  });
}
showAlert();

const formText = document.querySelectorAll('#sign-up input[type=text], #sign-up input[type=password]');
function verifyText() {
  for (let index = 0; index < formText.length; index += 1) {
    if (formText[index].value === '' || formText[index].value === null) {
      return true;
    }
  }
  return false;
}

const formRadio = document.querySelectorAll('#sign-up input[type=radio]');
function verifyRadio() {
  let radioEmpty = 0;
  for (let index = 0; index < formRadio.length; index += 1) {
    if (formRadio[index].checked === false) {
      radioEmpty += 1;
    }
  }
  if (radioEmpty > 2) {
    return true;
  }
  return false;
}

function selectedRadio() {
  let selectedGenre = '';
  for (let index = 0; index < formRadio.length; index += 1) {
    if (formRadio[index].checked === true) {
      selectedGenre = formRadio[index].value;
    }
  }
  return selectedGenre;
}

const signUpForm = document.getElementById('sign-up');
const newCustomInput = document.getElementById('custom-input');
const newInput = document.createElement('input');
newInput.name = 'gender-custom';
newInput.placeholder = 'Gênero (opcional)';

function createTextArea() {
  newCustomInput.appendChild(newInput);
}

function eraseTextArea() {
  if (signUpForm.length === 10) {
    newCustomInput.removeChild(newCustomInput.lastElementChild);
  }
}


function createBoxCustomGender() {
  for (let index = 0; index < formRadio.length; index += 1) {
    formRadio[index].addEventListener('click', function (event) {
      if (event.target.value === 'Personalizado') {
        createTextArea();
      } else {
        eraseTextArea();
      }
    });
  }
}
createBoxCustomGender();

const errorMessage = document.createElement('p');
signUpForm.appendChild(errorMessage);

const mainContent = document.querySelector('.main-content');

function eraseRightContent() {
  mainContent.removeChild(mainContent.lastElementChild);
}

function createRightContent() {
  const newRightContent = document.createElement('div');
  newRightContent.className = 'right-content';
  mainContent.appendChild(newRightContent);
  newRightContent.innerText = `Olá, ${formText[0].value} ${
    formText[1].value
  } ${'\n'} ${formText[2].value} ${'\n'} ${
    formText[4].value
  } ${'\n'} ${selectedRadio()}`;
}

function completeSignUp() {
  const buttonRegister = document.getElementById('facebook-register');
  buttonRegister.addEventListener('click', function (event) {
    event.preventDefault();
    if (verifyText() || verifyRadio()) {
      errorMessage.innerText = 'Campos inválidos';
    } else {
      errorMessage.innerText = '';
      eraseRightContent();
      createRightContent();
    }
  });
}
completeSignUp();
