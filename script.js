const getFormNewAccount = document.querySelector('#register-form');
const getAllInputs = getFormNewAccount.getElementsByTagName('input');
const rightContentBox = document.querySelector('.right-content');
const p = document.querySelector('#error-message');

function alertPhoneOrMail() {
  const buttonEnterFacebook = document.querySelector('#button-login');
  buttonEnterFacebook.addEventListener('click', function () {
    const urserMailOrPhone = document.querySelector('#user-email-phone').value;
    alert(urserMailOrPhone);
  });
}

function addCustomGenderInput() {
  const customGenderRadio = document.querySelector('#custom');
  const registerButton = document.querySelector('#facebook-register');
  const form = document.querySelector('#register-form');
  customGenderRadio.addEventListener('click', function () {
    const allGenderElements = document.querySelectorAll('#gender-custom')[0];
    if ((typeof allGenderElements) === 'undefined') {
      const customGender = document.createElement('input');
      customGender.setAttribute('type', 'text');
      customGender.setAttribute('name', 'gender-custom');
      customGender.setAttribute('id', 'gender-custom');
      customGender.setAttribute('placeholder', 'Gênero (opcional)');
      customGender.setAttribute('class', 'gender-input');
      form.insertBefore(customGender, registerButton);
    }
  });
}

function deleteGenderInput() {
  const genderInput = document.querySelector('#gender-custom');
  const form = document.querySelector('#register-form');
  if (genderInput != null) {
    form.removeChild(genderInput);
  }
}

function removeCustomGenderInput() {
  const customGenderFemale = document.querySelector('#female');
  const customGenderMale = document.querySelector('#male');
  customGenderFemale.addEventListener('click', deleteGenderInput);
  customGenderMale.addEventListener('click', deleteGenderInput);
}

function checkInputValues() {
  for (let index = 0; index < getAllInputs.length; index += 1) {
    if (getAllInputs[index].type === 'text' && getAllInputs[index].value === '' && getAllInputs[index].id !== 'gender-custom') {
      p.innerHTML = 'Campos inválidos';
      return false;
    }
  }
  return true;
}

function checkRadioSelected() {
  for (let index = 0; index < getAllInputs.length; index += 1) {
    if (getAllInputs[index].type === 'radio' && getAllInputs[index].checked) {
      return true;
    }
  }
  return false;
}

function getSelectedGender() {
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
  const userName = document.querySelector('#firstname').value;
  const userlastName = document.querySelector('#lastname').value;
  const helloText = document.createElement('h1');
  helloText.innerHTML = `Olá, ${userName} ${userlastName}`;
  rightContentBox.appendChild(helloText);

  createP(document.querySelector('#phone_email').value);
  createP(document.querySelector('#birthdate').value);
  createP(getSelectedGender());

  rightContentBox.removeChild(getFormNewAccount);
  rightContentBox.removeChild(rightContentBox.querySelector('h1'));
  rightContentBox.removeChild(rightContentBox.querySelector('p'));
}

function validateForm() {
  const allInputFilled = checkInputValues();
  const radioSelected = checkRadioSelected();

  if (!allInputFilled || !radioSelected) {
    p.innerHTML = 'Campos inválidos';
    return false;
  }

  createNewUserInfo();
  return false;
}

window.onload = function () {
  alertPhoneOrMail();
  addCustomGenderInput();
  removeCustomGenderInput();
  validateForm();
  p.innerHTML = '';
};
