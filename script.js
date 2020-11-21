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
  const preview = document.createElement('div');
  preview.classList.add('right-content');

  const previewName = document.createElement('p');
  const firstname = formFields.get('firstname');
  const lastname = formFields.get('lastname');
  previewName.textContent = `Olá, ${firstname} ${lastname}`;
  preview.appendChild(previewName);

  const previewEmail = document.createElement('p');
  const email = formFields.get('phone_email');
  previewEmail.textContent = `Email: ${email}`;
  preview.appendChild(previewEmail);

  const previewBirthdate = document.createElement('p');
  const birthdate = formFields.get('birthdate');
  previewBirthdate.textContent = `Data de nascimento: ${birthdate}`;
  preview.appendChild(previewBirthdate);

  const previewGender = document.createElement('p');
  const gender = formFields.get('gender');
  previewGender.textContent += `Gênero: ${gender} `;
  preview.appendChild(previewGender);

  const parent = rightContent.parentNode;
  parent.replaceChild(preview, rightContent);
});
