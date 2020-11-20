function hide() {
  if (document.getElementsByName('gender')[2].checked === true) {
    document.getElementsByClassName('hide')[0].style.display = 'inline-block';
  } else {
    document.getElementsByClassName('hide')[0].style.display = 'none';
  }
}

const btnFem = document.getElementsByName('gender')[0];
const btnMas = document.getElementsByName('gender')[1];
const btnPer = document.getElementsByName('gender')[2];
btnFem.addEventListener('click', hide);
btnMas.addEventListener('click', hide);
btnPer.addEventListener('click', hide);
const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

function registerMsg() {
  const firstname = document.getElementsByName('firstname')[0].value;
  const emailPhone = document.getElementsByName('phone_email')[0].value;
  const birthdate = document.getElementsByName('birthdate')[0].value;
  const gender = document.querySelector(':checked').value;
  document.querySelector('h1').outerHTML = '';
  document.querySelector('.quick-easy').outerHTML = '';
  document.getElementById('form-register').outerHTML = '';
  document.querySelector('.right-content').innerHTML = `<div class='success'><p>Olá, ${firstname}</p><p>Email/Celular: ${emailPhone}</p><p>Data de nascimento: ${birthdate}</p><p>Gênero: ${gender}</p></div>`;
}

function validation() {
  let invalid = 0;
  for (let index = 0; index < 5; index += 1) {
    if (document.getElementsByTagName('form')[1].querySelectorAll('input')[index].value === '') {
      invalid += 1;
    }
  }
  if (invalid > 0) {
    const invalidMsg = document.createElement('p');
    invalidMsg.className = 'danger';
    invalidMsg.innerText = 'Campos inválidos';
    document.getElementById('form-register').append(invalidMsg);
  } else {
    registerMsg();
  }
}

const btnRegister = document.getElementById('facebook-register');

btnRegister.addEventListener('click', validation);
btnRegister.addEventListener('click', function (evt) {
  evt.preventDefault();
});

window.onload = hide();
