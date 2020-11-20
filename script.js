function alertEmail() {
  const button = document.querySelector('#button-login');

  button.addEventListener('click', function () {
    const emailPhone = document.querySelector('#user-email-phone').value;
    alert(emailPhone);
  });
}

alertEmail();

function signIt() {
  const invalid = document.createElement('p');
  const form = document.querySelector('.form-register');
  const inputs = document.querySelectorAll('.inputC');
  const register = document.querySelector('#facebook-register');
  register.addEventListener('click', function () {
    for (let index = 0; index < inputs.length; index += 1) {
      if (inputs[index].value === '') {
        invalid.innerText = 'Campos inválidos';
      }
    }
  });
  form.appendChild(invalid);
}

signIt();

function checkRadio() {
  const invalid = document.createElement('p');
  const form = document.querySelector('.form-register');
  const inputRadio = document.querySelectorAll('.inputRadio');
  const register = document.querySelector('#facebook-register');
  register.addEventListener('click', function () {
    for (let index = 0; index < inputRadio.length; index += 1) {
      if (!inputRadio[index].checked) {
        invalid.innerText = 'Campos inválidos';
      }
      form.appendChild(invalid);
    }
  });
}

checkRadio();
