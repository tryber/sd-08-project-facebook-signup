const loginButton = document.getElementById('button-login');
const emailTelefone = document.getElementById('user-email-phone');
const inputArray = document.querySelectorAll('.right-content input');
const customGender = document.getElementById('custom-gender');
const form = document.getElementsByClassName('form-right-content')[0];
const registerButton = document.getElementById('facebook-register');

loginButton.addEventListener('click', function () {
  alert(emailTelefone.value);
});

registerButton.addEventListener('click', function () {
  let check;
  for (let index = 0; index < inputArray.length; index += 1) {
    const input = inputArray[index];
    check = input.checkValidity();
    if (check) {
      input.setCustomValidity('');
    } else {
      const message = document.createElement('p');
      message.className = 'error-message';
      message.innerHTML = 'Campos inválidos';
      form.appendChild(message);
      break;
    }
  };
  if (check) {
    const rightContent = document.getElementById('right-section');
    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value;
    const phoneMail = document.getElementById('phone').value;
    const birthDate = document.getElementById('birthdate').value;
    const female = document.getElementById('female-gender');
    const male = document.getElementById('male-gender');
    const custom = document.getElementById('custom-gender');
    let gender;
    if (female.checked) {
      gender = female.value;
    } else if (male.checked) {
      gender = male.value;
    } else {
      gender = custom.value;
    }

    rightContent.innerHTML = `<p> Olá, ${firstName} ${lastName}.
    Seu e-mail é o ${phoneMail}.
    Sua data de nascimento é ${birthDate}.
    Você se identifica como alguém do sexo ${gender}.<\p>`;
  }
});

customGender.addEventListener('click', function () {
  const input = document.createElement('input');
  input.setAttribute('name', 'gender-custom');
  input.setAttribute('placeholder', 'Gênero (opcional)');
  form.insertBefore(input, registerButton);
});
