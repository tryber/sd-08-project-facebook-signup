function alertPhoneOrMail() {
  const buttonEnterFacebook = document.querySelector('#button-login');
  buttonEnterFacebook.addEventListener('click', function () {
    const urserMailOrPhone = document.querySelector('#user-email-phone').value;
    alert(urserMailOrPhone);
  });
}

alertPhoneOrMail();

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

addCustomGenderInput();

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

removeCustomGenderInput();

function errorMessage() {
  const createAccountButton = document.querySelector('#facebook-register');
  createAccountButton.addEventListener('click', function () {
    const getFormNewAccount = document.querySelector('#register-form');
    const getAllInputs = getFormNewAccount.getElementsByTagName('input');
    const p = document.querySelector('#error-message');
    let count = 0;
    for (let index = 0; index < getAllInputs.length; index += 1) {
      if (getAllInputs[index].type === 'text' && getAllInputs[index].value === '') {
        count += 1;
      }
      if (getAllInputs[index].type === 'radio' && !getAllInputs[index].checked) {
        count += 1;
      }
    }
    if (count > 0) {
      p.innerHTML = 'Campos inválidos';
    }
  });
}

errorMessage();
