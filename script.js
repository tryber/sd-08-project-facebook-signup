const form = document.getElementsByClassName('facebook-signin')[0];
const genderInput = document.querySelector('.gender-custom');
const radios = document.querySelectorAll('input[type=radio]');
const rightContent = document.getElementsByClassName('right-content')[0];
const inputs = document.getElementsByTagName('input');
const message = document.getElementById('message');

function showInfo() {
  let radioChecked;
  const infos = document.createElement('p');
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked) {
      radioChecked = radios[index].value;
    }
  }
  infos.innerText = `Olá, ${inputs[2].value} ${inputs[3].value}
  ${inputs[4].value}
  ${inputs[6].value}
  ${genderInput.style.display === '' ? radioChecked : genderInput.value}`;
  rightContent.innerHTML = '';
  rightContent.appendChild(infos);
}

function fBtnLogin() {
  const inputUserEmail = document.getElementById('user-email-phone');
  alert(inputUserEmail.value);
}

function fBtnRegister(event) {
  event.preventDefault();
  const validate = form.checkValidity();
  form.reportValidity();
  if (validate) {
    showInfo();
  } else {
    message.innerText = 'Campos inválidos';
  }
}

function femaleField() {
  genderInput.style.display = 'none';
}

function maleField() {
  genderInput.style.display = 'none';
}

function otherField() {
  genderInput.style.display = 'inline-block';
}

document.getElementById('facebook-register').addEventListener('click', fBtnRegister);
document.getElementById('button-login').addEventListener('click', fBtnLogin);
radios[0].addEventListener('click', femaleField);
radios[1].addEventListener('click', maleField);
radios[2].addEventListener('click', otherField);
