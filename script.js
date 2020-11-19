function addCustomGenderInput() {
  const customGenderButton = document.querySelector('#custom');
  const registerButton = document.querySelector('facebook-register');
  const genderLabel = document.querySelector('#label-gender');
  const body = document.getElementsByTagName('body')
  console.log(body);
  customGenderButton.addEventListener('click', function (event) {
    const customGender = document.createElement('input');
    customGender.setAttribute('name', 'gender-custom');
    customGender.setAttribute('placeholder', 'Gênero (opcional)');
    body.appendChild(genderLabel);
  });
}

addCustomGenderInput();
