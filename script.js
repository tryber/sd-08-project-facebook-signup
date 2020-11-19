function addCustomGenderInput() {
  const customGenderButton = document.querySelector('#custom');
  const registerButton = document.querySelector('#facebook-register');
  const genderLabel = document.querySelector('#label-gender');
  customGenderButton.addEventListener('click', function (event) {
    const customGender = document.createElement('input');
    customGender.setAttribute('type', 'text');
    customGender.setAttribute('name', 'gender-custom');
    customGender.setAttribute('placeholder', 'Gênero (opcional)');
    registerButton.insertBefore(customGender);
  });
}

addCustomGenderInput();

function alertWrongPassword() {
  const buttonEnterFacebook = document.querySelector('#button-login');  
  buttonEnterFacebook.addEventListener('click', function(){
    const urserMailOrPhone = document.querySelector('#user-email-phone').value;
    alert(urserMailOrPhone);
  });
}
