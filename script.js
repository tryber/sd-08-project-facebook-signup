const loginButton = document.getElementById('button-login');
const loginEmail = document.getElementById('user-email-phone');
const nameInput = document.getElementById('firstname');
const lastNameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email-input');
const birthDateInput = document.getElementById('birthdate');
const customGenderDiv = document.querySelector('.genero-personalizado');
const customGenderRadio = document.getElementById('Personalizado');
const femaleGenderRadio = document.getElementById('Feminino');
const maleGenderRadio = document.getElementById('Masculino');
const signInForm = document.querySelector('.sign-in');
const invalidMessage = document.querySelector('.invalid-form-message');
const submitButton = document.getElementById('facebook-register');
const rightContent = document.querySelector('.right-content');

function alertLogin() {
  alert(loginEmail.value);
}

loginButton.addEventListener('click', alertLogin);

function createCustomGender() {
  if (!customGenderDiv.children.length) {
    const genderInput = document.createElement('input');
    genderInput.name = 'gender-custom';
    genderInput.placeholder = 'Gênero (opcional)';
    genderInput.id = 'custom-gender-input';
    customGenderDiv.appendChild(genderInput);
  }
}

function deleteCustomGender() {
  if (customGenderDiv.children.length) {
    const child = customGenderDiv.children[0];
    customGenderDiv.removeChild(child);
  }
}

customGenderRadio.addEventListener('click', createCustomGender);
femaleGenderRadio.addEventListener('click', deleteCustomGender);
maleGenderRadio.addEventListener('click', deleteCustomGender);

function validateForm() {
  if (!signInForm.checkValidity()) {
    invalidMessage.innerHTML = 'Campos inválidos';
  } else {
    invalidMessage.innerHTML = '';
  }
}

function deleteRightContent() {
  const { children } = rightContent;
  for (let index = 0; index < children.length;) {
    rightContent.removeChild(rightContent.lastChild);
  }
}

function addName() {
  const hello = document.createElement('p');
  hello.innerHTML = `Olá, ${nameInput.value} ${lastNameInput.value}`;
  rightContent.appendChild(hello);
}

function addMailOrPhone() {
  const mailOrPhone = document.createElement('p');
  mailOrPhone.innerHTML = `Email ou telefone: ${emailInput.value}`;
  rightContent.appendChild(mailOrPhone);
}

function addBirthDate() {
  const birthDate = document.createElement('p');
  birthDate.innerHTML = `Data de nascimento: ${birthDateInput.value}`;
  rightContent.appendChild(birthDate);
}

function addGender() {
  const gender = document.createElement('p');
  if (femaleGenderRadio.checked) {
    gender.innerHTML = `Gênero: ${femaleGenderRadio.value}`;
  } else if (maleGenderRadio.checked) {
    gender.innerHTML = `Gênero: ${maleGenderRadio.value}`;
  } else if (customGenderRadio.checked) {
    gender.innerHTML = `Gênero: ${customGenderRadio.value}`;
  }
  rightContent.appendChild(gender);
}

function addContent(event) {
  event.preventDefault();
  validateForm();
  if (signInForm.checkValidity()) {
    deleteRightContent();
    addName();
    addMailOrPhone();
    addBirthDate();
    addGender();
  }
}

// Apaga e adiciona//
submitButton.addEventListener('click', addContent);
