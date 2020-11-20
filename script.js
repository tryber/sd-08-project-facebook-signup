const loginButton = document.getElementById('button-login');
const emailTelefone = document.getElementById('user-email-phone');
const inputArray = document.querySelectorAll('.right-content input');
const customGender = document.getElementById('custom-gender');
const form = document.getElementsByClassName('form-right-content')[0];

loginButton.addEventListener('click', function () {
  alert(emailTelefone.value);
});
const registerButton = document.getElementById('facebook-register');

registerButton.addEventListener('click', function () {
  for (let index = 0; index < inputArray.length; index += 1) {
    const input = inputArray[index];
    const check = input.checkValidity();
    if (check) {
      input.setCustomValidity('');
    } else {
      const message = document.createElement('p');
      message.className = 'error-message';
      message.innerHTML = 'Campos inválidos';
      form.appendChild(message);
      break;
    }
  }
});

customGender.addEventListener('click', function () {
  const input = document.createElement('input');
    input.setAttribute('name', 'gender-custom');
    input.setAttribute('placeholder', 'Gênero (opcional)');
    form.insertBefore(input,registerButton);
});
