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
