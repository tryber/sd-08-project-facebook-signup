const getFormLogin = document.querySelector('.facebook-login');
const getFormRegister = document.getElementsByClassName('form-register')[0];
const getInvalid = document.getElementsByClassName('invalid')[0];
const radioBtn = document.getElementsByClassName('radioBtns');
const rightContent = document.querySelectorAll('.right-content')[0];
const quickEasy = document.querySelector('.quick-easy');

const alertLogin = (value) => alert(value);

function login() {
  getFormLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    alertLogin(getFormLogin.emailPhone.value);
  });
}

const inputNoneBlock = (elements) => window.getComputedStyle(elements['gender-custom']).display === 'block';
const regex = (elements, index) => (elements[index].value === '' && elements[index].type !== 'submit');
const regexTwo = (elements, index) => (elements[index] !== elements['gender-custom']);
const regexBlock = (elements, index) => (regex(elements, index) && inputNoneBlock(elements));
const regexNone = (elements, index) => (regex(elements, index) && regexTwo(elements, index));

function validForm(elements) {
  for (let index = 0; index < elements.length; index += 1) {
    if (regexBlock(elements, index) || regexNone(elements, index)) {
      getInvalid.style.display = 'block';
      return false;
    }
  }
  getInvalid.style.display = 'none';
  return true;
}

function chekedInput() {
  radioBtn[0].addEventListener('click', (event) => {
    const setInput = document.getElementsByClassName('genderOpc');
    if (event.target.id === 'personalizado') {
      setInput[0].style.display = 'block';
    }
    if (event.target.id === 'masculino' || event.target.id === 'feminino') {
      setInput[0].style.display = 'none';
      setInput[0].value = '';
    }
  });
}

const clearContainer = () => {
  const rightContainer = rightContent.children;
  for (let i = 0; i < rightContainer.length; i += 1) {
    rightContent.removeChild(rightContainer[i]);
  }
  rightContent.removeChild(quickEasy);
};

const regexArray = (elements, index) => ((elements[index].value !== '' && elements[index].type !== 'submit' && elements[index].name !== 'gender'));

function setArrayDate(elements) {
  const arrayD = [];
  for (let index = 0; index < elements.length; index += 1) {
    if (regexArray(elements, index)) {
      arrayD.push(elements[index].value);
    }
    if (elements[index].checked && elements[index].value !== 'Personalizado') {
      arrayD.push(elements[index].value);
    }
  }
  return arrayD;
}

const supSetView = (newLi, arrayD, index) => {
  if (index === 0) {
    newLi.innerText = `Olá ${arrayD[index]} ${arrayD[index + 1]}`;
  }
  if (index > 1) {
    newLi.innerText = arrayD[index];
  }
  return newLi;
};

function setView(arrayD) {
  const newUl = document.createElement('ul');
  for (let index = 0; index < arrayD.length; index += 1) {
    if (index !== 3) {
      const newLi = document.createElement('li');
      const newEl = supSetView(newLi, arrayD, index);
      newUl.appendChild(newEl);
    }
  }
  rightContent.appendChild(newUl);
}

function mainFormRegister() {
  getFormRegister.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validForm(event.target)) {
      clearContainer();
      const arrayD = setArrayDate(event.target);
      setView(arrayD);
    }
  });
}

function main() {
  login();
  chekedInput();
  mainFormRegister();
}

main();
