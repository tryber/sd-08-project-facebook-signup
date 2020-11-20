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

const signUpForm = document.getElementById('sign-up');
const errorMessage = document.createElement('p');
signUpForm.appendChild(errorMessage);

const mainContent = document.querySelector('.main-content');

function eraseRightContent() {
  mainContent.removeChild(mainContent.lastElementChild);
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

function createRightContent() {
  const newRightContent = document.createElement('p');
  mainContent.appendChild(newRightContent);
  newRightContent.innerText = `Olá, ${formText[0].value} ${formText[1].value} ${'\n'} ${formText[2].value} ${'\n'} ${formText[4].value} ${'\n'} ${selectedRadio()}`;
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
