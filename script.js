function alertLogin() {
  const emailOrPhone = document.getElementById('user-email-phone');
  alert(emailOrPhone.value);
}

function handleInputGender(event) {
  const registerForm = document.getElementById('signup-container');
  const customInputField = document.getElementById('custom-input');
  console.log('oi');

  if (event.target.value === 'Personalizado' && !customInputField) {
    const createCustomInput = document.createElement('input');
    const registerBtn = document.getElementById('facebook-register');
    createCustomInput.name = 'gender-custom';
    createCustomInput.placeholder = 'Gênero (opcional)';
    createCustomInput.id = 'custom-input';
    createCustomInput.className = 'custom-input';
    registerForm.insertBefore(createCustomInput, registerBtn);
  } else if (
    (event.target.value === 'Feminino' || event.target.value === 'Masculino') &&
    customInputField
  ) {
    registerForm.removeChild(customInputField);
  }
}

function validateInputElement(elem) {
  return elem.name === 'password' || (elem.type === 'radio' && !elem.checked);
}

function handleFormMessage() {
  const InputAll = document.querySelectorAll('#signup-container input');
  const Forms = document.getElementById('signup-container');
  Forms.innerHTML = 'Olá, ';
  for (let index = 0; index < InputAll.length; index += 1) {
    if (!InputAll[index].value && InputAll[index].id !== 'custom-input') {
      Forms.innerHTML = 'Campos inválidos';
      break;
    } else if (!validateInputElement(InputAll[index])) {
      Forms.innerHTML += `${InputAll[index].value} `;
    }
  }
}

function handleIdioms() {
  const idioms = ['Português (Brasil)', 'English (US)', 'Español', 'Français (France)', 'Italiano', 'العربية', 'Deutsch', '中文(中国)', '日本人'];
  const idiomsElement = document.getElementById('idioms');

  for (let i = 0; i < idioms.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = idioms[i];
    idiomsElement.appendChild(span);
  }
}

function handleStuff() {
  const stuff = ['Cadastre-se', 'Entrar', 'Messenger', 'Facebook Lite', 'Watch', 'Pessoas', 'Páginas', 'Categorias de Página', 'Locais', 'Jogos', 'Locais', 'Marketplace', 'Grupos', 'Portal', 'Instagram', 'Local', 'Campanhas de arrecadação de fundos', 'Serviços', 'Sobre', 'Criar anúncio', 'Criar Página', 'Desenvolvedores', 'Carreiras', 'Privacidade', 'Cookies', 'Opções de anúncio', 'Termos', 'Ajuda'];
  const stuffElement = document.getElementById('stuff');

  for (let i = 0; i < stuff.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = stuff[i];
    stuffElement.appendChild(span);
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

  registerButton.addEventListener('click', handleFormMessage);

  handleIdioms();
  handleStuff();
};
