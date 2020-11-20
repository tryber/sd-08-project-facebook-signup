function alertEmail() {
  const button = document.querySelector('#button-login');

  button.addEventListener('click', function () {
    const emailPhone = document.querySelector('#user-email-phone').value;
    alert(emailPhone);
  });
}

alertEmail();

const invalid = document.createElement('p');
const form = document.querySelector('.form-register');

function signIt() {
  const inputs = document.querySelectorAll('.inputC');
  const register = document.querySelector('#facebook-register');
  register.addEventListener('click', function () {
    for (let index = 0; index < inputs.length; index += 1) {
      if (inputs[index].value === '') {
        invalid.innerHTML = 'Campos inválidos';
      }
    }
  });
  form.appendChild(invalid);
}

signIt();

function checkRadio() {
  const inputRadio = document.querySelectorAll('.inputRadio');
  const register = document.querySelector('#facebook-register');
  register.addEventListener('click', function () {
    for (let index = 0; index < inputRadio.length; index += 1) {
      if (!inputRadio[index].checked) {
        invalid.innerHTML = 'Campos inválidos';
      }
      form.appendChild(invalid);
    }
  });
}

checkRadio();
