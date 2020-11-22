const buttonLogin = document.getElementById('button-login');
const buttonCustomGender = document.getElementById('Personalizado');
const buttonMaleGender = document.getElementById('Masculino');
const buttonFemaleGender = document.getElementById('Feminino');
const buttonRegister = document.getElementById('facebook-register');
const invalidField = document.getElementById('invalid-field');
const languagesList = document.getElementById('languages-list');
const footerLinks = document.getElementById('footer-links');
let contador = 0;

const languages = ['Português (Brasil)', 'English (US)', 'Español', 'Français (France)', 'Italiano', 'العربية', 'Deutsch', 'हिन्दी', '中文(简体)', '日本語'];

const arrayFooterLinks = ['Cadastre-se', 'Entrar', 'Messenger', 'Facebook Lite', 'Watch', 'Pessoas', 'Páginas', 'Categorias de Página', 'Locais', 'Jogos', 'Locais', 'Marketplace', 'Facebook Pay', 'Grupos', 'Vagas de emprego', 'Oculus', 'Portal', 'Instagram', 'Local', 'Campanhas de arrecadação de fundos', 'Serviços', 'Central de Informações de Votação', 'Sobre', 'Criar anúncio', 'Criar Página', 'Desenvolvedores', 'Carreiras', 'Privacidade', 'Cookies', 'Escolhas para anúncios', 'Termos', 'Ajuda', 'Configurações', 'Registro de Atividades'];

for (let index = 0; index < languages.length; index += 1) {
  const newLanguageItem = document.createElement('li');
  newLanguageItem.innerText = languages[index];
  languagesList.append(newLanguageItem);
}

for (let index = 0; index < arrayFooterLinks.length; index += 1) {
  const newFooterLink = document.createElement('a');
  newFooterLink.href = 'https://www.facebook.com';
  newFooterLink.target = '_blank';
  newFooterLink.innerText = arrayFooterLinks[index];
  footerLinks.append(newFooterLink);
}

function createCustomGender(event) {
  const genderCustom = document.querySelector('.hidden-input');

  if (event.target.value === 'Personalizado') {
    genderCustom.innerHTML = '<input name="gender-custom" placeholder="Gênero (opcional)" type="text">';
  } else {
    genderCustom.innerHTML = '';
  }
}

function plotText() {
  const formField = document.querySelector('.create-account');
  const formValues = new FormData(formField);
  const boxText = document.querySelector('.right-content');
  boxText.innerHTML = '';
  boxText.innerHTML = `<p> Olá, ${formValues.get('firstname')} ${formValues.get('lastname')}
  ${formValues.get('phone_email')} ${formValues.get('birthdate')} ${formValues.get('gender')}
  </p>`;
}

function validateFirstName() {
  if (document.forms.myForm.firstname.value === '') {
    invalidField.innerText = 'Campos inválidos';
  } else {
    contador += 1;
  }
}

function validateLastName() {
  if (document.forms.myForm.lastname.value === '') {
    invalidField.innerText = 'Campos inválidos';
  } else {
    contador += 1;
  }
}

function validatePhoneEmail() {
  if (document.forms.myForm.phone_email.value === '') {
    invalidField.innerText = 'Campos inválidos';
  } else {
    contador += 1;
  }
}

function validatePassword() {
  if (document.forms.myForm.password.value === '') {
    invalidField.innerText = 'Campos inválidos';
  } else {
    contador += 1;
  }
}

function validateBirthDate() {
  if (document.forms.myForm.birthdate.value === '') {
    invalidField.innerText = 'Campos inválidos';
  } else {
    contador += 1;
  }
}

function validateGender() {
  if (document.forms.myForm.gender.value === '') {
    invalidField.innerText = 'Campos inválidos';
  } else {
    contador += 1;
  }
}

function validateForm(event) {
  event.preventDefault();
  contador = 0;

  validateFirstName();
  validateLastName();
  validatePhoneEmail();
  validatePassword();
  validateBirthDate();
  validateGender();

  if (contador === 6) {
    plotText();
  }
}

buttonCustomGender.addEventListener('click', createCustomGender);
buttonMaleGender.addEventListener('click', createCustomGender);
buttonFemaleGender.addEventListener('click', createCustomGender);
buttonRegister.addEventListener('click', validateForm);

buttonLogin.addEventListener('click', () => {
  const emailValue = document.querySelector('#user-email-phone');
  alert(emailValue.value);
});
