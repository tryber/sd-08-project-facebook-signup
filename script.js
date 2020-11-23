const getFormNewAccount = document.querySelector('#register-form');
const genderInput = document.querySelector('#gender-custom');
const rightContentBox = document.querySelector('.right-content');

function alertPhoneOrMail() {
  const buttonEnterFacebook = document.querySelector('#button-login');
  buttonEnterFacebook.addEventListener('click', function () {
    const urserMailOrPhone = document.querySelector('#user-email-phone').value;
    alert(urserMailOrPhone);
  });
}

function showCustomGenderInput() {
  const customGenderRadio = document.querySelector('#custom');
  customGenderRadio.addEventListener('click', function () {
    genderInput.classList.remove('hidden');
  });
}

function hideCustomGenderInput() {
  const customGenderFemale = document.querySelector('#female');
  const customGenderMale = document.querySelector('#male');
  customGenderFemale.addEventListener('click', function () { genderInput.classList.add('hidden'); });
  customGenderMale.addEventListener('click', function () { genderInput.classList.add('hidden'); });
}

function getSelectedGender() {
  const getAllInputs = getFormNewAccount.getElementsByTagName('input');
  let gender = 'none';
  for (let index = 0; index < getAllInputs.length; index += 1) {
    if (getAllInputs[index].type === 'radio' && getAllInputs[index].checked) {
      gender = getAllInputs[index].value;
    }
  }
  return gender;
}

function createP(text) {
  const newP = document.createElement('p');
  newP.innerHTML = text;
  rightContentBox.appendChild(newP);
}

function createNewUserInfo() {
  const helloText = document.createElement('h1');
  helloText.innerHTML = `Olá, ${document.querySelector('#firstname').value} ${document.querySelector('#lastname').value}`;
  rightContentBox.appendChild(helloText);
  createP(document.querySelector('#phone_email').value);
  createP(document.querySelector('#birthdate').value);
  createP(getSelectedGender());
  rightContentBox.removeChild(getFormNewAccount);
  rightContentBox.removeChild(rightContentBox.querySelector('h1'));
  rightContentBox.removeChild(rightContentBox.querySelector('p'));
}

function validateForm() {
  const requiredInputs = getFormNewAccount.querySelectorAll('[required]');
  for (let index = 0; index < requiredInputs.length; index += 1) {
    const currentInput = requiredInputs[index];
    if (!currentInput.checkValidity()) {
      document.querySelector('#error-message').innerHTML = 'Campos inválidos';
      return;
    }
  }
  createNewUserInfo();
}

function registerButtonListener() {
  document.querySelector('#facebook-register').addEventListener('click', function (event) {
    event.preventDefault();
    validateForm();
  });
}

window.onload = function () {
  alertPhoneOrMail();
  showCustomGenderInput();
  hideCustomGenderInput();
  registerButtonListener();
};
