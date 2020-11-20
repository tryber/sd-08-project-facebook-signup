const buttonLogin = document.getElementById('button-login');
const inputUserEmailTelefone = document.getElementById('user-email-phone');
const formAlert = document.getElementById('form-alert');
const customGenderInput = document.getElementById('gender-personalizado-input');

buttonLogin.addEventListener('click', function () {
  alert(inputUserEmailTelefone.value);
});

function toggleCustomGenderInput(event) {
  const radio = event.target;
  if (radio.id === 'gender-personalizado') {
    customGenderInput.classList.remove('d-none');
  } else {
    customGenderInput.classList.add('d-none');
  }
}

const radios = document.querySelectorAll('[type=radio]');
for (let index = 0; index < radios.length; index += 1) {
  const radio = radios[index];
  radio.addEventListener('change', toggleCustomGenderInput);
}

const buttonCadastro = document.getElementById('facebook-register');
const rightContent = document.querySelector('.right-content');
const signUpForm = rightContent.querySelector('form');

buttonCadastro.addEventListener('click', function (event) {
  event.preventDefault();
  const fields = document.querySelectorAll('[required]');

  for (let index = 0; index < fields.length; index += 1) {
    const field = fields[index];
    if (!field.checkValidity()) {
      formAlert.classList.remove('d-none');
      return;
    }
  }

  const formFields = new FormData(signUpForm);

  let previewData = '';

  const firstname = formFields.get('firstname');
  const lastname = formFields.get('lastname');
  previewData += `Olá, ${firstname} ${lastname} `;

  const email = formFields.get('phone_email');
  previewData += `Email: ${email} `;

  const birthdate = formFields.get('birthdate');
  previewData += `Data de nascimento: ${birthdate} `;

  const gender = formFields.get('gender');
  previewData += `Gênero: ${gender} `;

  rightContent.innerHTML = previewData;
});
