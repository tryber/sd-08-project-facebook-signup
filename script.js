const form = document.getElementsByClassName('facebook-signin')[0];
const input = document.querySelector('.gender-custom');
const radios = document.querySelectorAll('input[type=radio]');
const rightContent = document.getElementsByClassName('right-content')[0];

function showInfo() {
  const formData = new FormData(form);
  const field = document.createElement('p');
  rightContent.innerHTML = '';
  Array.from(formData.entries()).forEach((entrie) => {
    if (entrie[0] === 'firstname') {
      field.innerText = `Olá, ${entrie[1]}`;
    } else if (entrie[0] === 'lastname') {
      field.innerText = `${field.innerText} ${entrie[1]}`;
    } else if (entrie[0] !== 'password') {
      field.innerText = `${field.innerText} ${entrie[1]}`;
    }
  });
  rightContent.appendChild(field);
}

function fBtnLogin() {
  const inputUserEmail = document.getElementById('user-email-phone');
  alert(inputUserEmail.value);
}

function fBtnRegister(event) {
  event.preventDefault();
  const message = document.getElementById('message');
  const validate = form.checkValidity();
  form.reportValidity();
  if (validate) {
    showInfo();
  } else {
    message.innerText = 'Campos inválidos';
  }
}

function offOtherField() {
  input.style.display = 'none';
}

function onOtherField() {
  input.style.display = 'inline-block';
}

document.getElementById('facebook-register').addEventListener('click', fBtnRegister);
document.getElementById('button-login').addEventListener('click', fBtnLogin);
radios[0].addEventListener('click', offOtherField);
radios[1].addEventListener('click', offOtherField);
radios[2].addEventListener('click', onOtherField);
