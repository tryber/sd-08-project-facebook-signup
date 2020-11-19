function loginButtonAlert() {
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', function () {
    const emailPhone = document.querySelector('#user-email-phone').value;
    alert(emailPhone);
  });
}
loginButtonAlert();

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
checkRadioButtons();

function isEverythingFilled() {
  const registerButton = document.getElementById('facebook-register');
  registerButton.addEventListener('click', function () {
    const caInputList = document.querySelectorAll('.ca-input');
    const caRadioInputList = document.querySelectorAll('.ca-radio-input');
    for (let index = 0; index < caInputList.length; index += 1) {
      const caInputListItem = caInputList[index];
      if (caInputListItem.value === '') {
        alert('Campos inválidos');
      }
    }
    if (caRadioInputList[0].checked === false && caRadioInputList[1].checked === false && caRadioInputList[2].checked === false) {
      alert('Campos inválidos');
    }
  });
}
isEverythingFilled();

