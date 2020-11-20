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

  let formFields = new FormData(signUpForm);
  
  const signUpResult = document.createElement('div');
  signUpResult.classList.add('right-content');

  const previewName = document.createElement("p");
  const firstname = formFields.get('firstname');
  const lastname = formFields.get('lastname');
  previewName.textContent = `Olá, ${firstname} ${lastname}`;
  signUpResult.appendChild(previewName);

  const email = formFields.get('phone_email');
  const previewEmailPhone = document.createElement('p');
  previewEmailPhone.textContent = `Email: ${email}`;
  signUpResult.appendChild(previewEmailPhone);

  const birthdate = formFields.get('birthdate');
  const previewBirthdate = document.createElement('p');
  previewBirthdate.textContent = `Data de nascimento: ${birthdate}`;
  signUpResult.appendChild(previewBirthdate);

  const gender = formFields.get('gender');
  const previewGender = document.createElement('p');
  previewGender.textContent = `Gênero: ${gender}`;
  signUpResult.appendChild(previewGender);

  const parent = rightContent.parentNode;
  parent.replaceChild(signUpResult, rightContent);
});
