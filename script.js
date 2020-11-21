function alertaLogin() {
  const email = document.querySelector('#user-email-phone');
  alert(email.value);
}

const botaoLogin = document.querySelector('#button-login');
botaoLogin.addEventListener('click', alertaLogin);

const radioContent = document.querySelector('.radio-content');
const input = radioContent.querySelectorAll('input');
Array.from(input).forEach(function (inputArray) {
  inputArray.addEventListener('change', function () {
    const customContent = document.querySelector('.custom-content');
    if (inputArray.id === 'custom') {
      const customInput = document.createElement('input');
      customInput.type = 'text';
      customInput.name = 'gender-custom';
      customInput.placeholder = 'Gênero (opcional)';
      document.querySelector('.custom-content').appendChild(customInput);
    } else if (customContent.children.length > 0) {
      customContent.removeChild(customContent.firstChild);
    }
  });
});

function Substitute() {
  if (localStorage.getItem('setClear') === 'true') {
    const container = document.querySelector('.right-content');
    let array = [];
    array = container.children;
    for (let index = 0; index < array.length; index += 1) {
      array[index].classList.add('clear');
    }
    const url = new URL(window.location.href);

    const textName = document.createElement('h2');
    textName.innerText = `Olá, ${url.searchParams.get('firstname')} ${url.searchParams.get('lastname')}`;
    container.appendChild(textName);

    const textPhoneEmail = document.createElement('h4');
    textPhoneEmail.innerText = url.searchParams.get('phone_email');
    container.appendChild(textPhoneEmail);

    const textBirthdate = document.createElement('h4');
    textBirthdate.innerText = url.searchParams.get('birthdate');
    container.appendChild(textBirthdate);

    const textGender = document.createElement('h4');
    textGender.innerText = url.searchParams.get('gender');
    container.appendChild(textGender);
    localStorage.setItem('setClear', 'false');
  }
}

function showMessage() {
  document.querySelector('span');
  if (document.querySelector('span') != null) {
    return;
  }
  const message = document.createElement('span');
  const form = document.getElementById('form-singUp');
  message.style.color = 'red';
  message.innerText = 'Campos inválidos';
  form.insertBefore(message, form.firstChild);
}

function verificaRadio(formInput) {
  const radio = document.getElementsByClassName('radio');
  for (let i = 0; i < radio.length; i += 1) {
    if (radio[i].checked === true) {
      formInput[i].setCustomValidity('');
      localStorage.setItem('setClear', 'true');
      return;
    }
  }
  radio[0].setCustomValidity('Campos inválidos');
  showMessage();
}

function checaValidacao() {
  const form = document.getElementById('form-singUp');
  const formInput = form.querySelectorAll('input');
  for (let i = 0; i < formInput.length; i += 1) {
    if (formInput[i].value.length === 0) {
      showMessage();
      return;
    }
  }
  verificaRadio(formInput);
}

const submit = document.querySelector('#facebook-register');
submit.addEventListener('click', checaValidacao);
Substitute();
