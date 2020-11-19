function alertLogin() {
  const emailOrPhone = document.getElementById('user-email-phone');
  alert(emailOrPhone.value);
}

function handleInputGender(event) {
  const registerForm = document.getElementById('signup-container');
  const customInputField = document.getElementById('custom-input');

  if (event.target.value === 'Personalizado' && !customInputField) {
    const createCustomInput = document.createElement('input');
    const registerBtn = document.getElementById('facebook-register');
    createCustomInput.name = 'gender-custom';
    createCustomInput.placeholder = 'Gênero (opcional)';
    createCustomInput.id = 'custom-input';
    createCustomInput.className = 'custom-input';
    registerForm.insertBefore(createCustomInput, registerBtn);
  } else if (event.target.value === 'Feminino' || event.target.value === 'Masculino') {
    customInputField && registerForm.removeChild(customInputField);
  }
}

window.onload = () => {
  const loginBtn = document.getElementById('button-login');
  loginBtn.addEventListener('click', alertLogin);
  const persoGender = document.getElementById('persona');
  persoGender.addEventListener('click', handleInputGender);
  const maleOrFemale = document.getElementsByClassName('male-female');

  for (let index = 0; index < maleOrFemale.length; index += 1) {
    maleOrFemale[index].addEventListener('click', handleInputGender);
  }

  const registerButton = document.getElementById('facebook-register');
  const InputAll = document.querySelectorAll('#signup-container .input');
  registerButton.addEventListener('click', function() {
      for (let index in InputAll) {
          if (InputAll[index].value === '') {
              alert('Campos inválidos');
              return true;
          }
      }
  });
};
