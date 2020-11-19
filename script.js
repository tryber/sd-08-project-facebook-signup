function loginButtonAlert() {
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', function () {
    const emailPhone = document.querySelector('#user-email-phone').value;
    alert(emailPhone);
  });
}

function createGenderField() {
  const dadElement = document.querySelector('#gender-input');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'gender-custom';
  input.id = 'genero-personalizado';
  input.placeholder = 'Gênero (opcional)';
  dadElement.appendChild(input);
}

function checkRadioButtons() {
  const radioButtons = document.getElementsByName('gender');
  for (let index = 0; index < radioButtons.length; index += 1) {
    radioButtons[index].addEventListener('change', function () {
      if (radioButtons[index].value === 'Personalizado') {
        createGenderField();
      }
    });
  }
}

loginButtonAlert();
checkRadioButtons();
