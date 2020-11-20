const getFormLogin = document.querySelector('.facebook-login');
const getFormRegister = document.getElementsByClassName('form-register')[0];
const getInvalid = document.querySelector('.invalid');
const getRadioPerson = document.getElementById('personalizado');
const radioBtn = document.getElementsByClassName('radioBtns');

const alertLogin = (value) => alert(value);

function login() {
  getFormLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    alertLogin(getFormLogin.emailPhone.value);
  });
}

const validForm = (elments) => {
  for (let el = 0; el < elments.length; el += 1) {
    if (elments[el].value === '' && elments[el].type !== 'submit') {
      getInvalid.style.display = 'inline';
      return false;
    }
  }
  getInvalid.style.display = 'none';
  return true;
};

function genderOpcClick() {
  const inputText = document.createElement('input');
  inputText.id = 'genderOpc';
  inputText.type = 'text';
  inputText.style.display = 'block';
  inputText.placeholder = 'Gênero (opcional).';
  getRadioPerson.addEventListener('focus', () => {
    if (getRadioPerson.spellcheck === true) {
      radioBtn[0].appendChild(inputText);
    }
  });
}

const regra = (ev) => ((ev.target.spellcheck === true && ev.target.id === 'feminino') || (ev.target.spellcheck === true && ev.target.id === 'masculino'));

function removeInput() {
  radioBtn[0].addEventListener('click', (event) => {
    const getGendOpc = document.getElementById('genderOpc');
    if (regra(event) && getGendOpc !== null) {
      radioBtn[0].removeChild(getGendOpc);
    }
  });
}

function mainFormRegister() {
  getFormRegister.addEventListener('submit', (event) => {
    event.preventDefault();
    validForm(event.target);
  });
}

function main() {
  login();
  mainFormRegister();
  genderOpcClick();
  removeInput();
}

main();
