
const btnLogin = document.querySelector('#button-login');

btnLogin.addEventListener('click', function () {
  const userEmailPhone = document.querySelector('#user-email-phone').value;

  alert(userEmailPhone);
});

const btnRegister = document.querySelector('#facebook-register');

function radioBtnValue() {
  const radioBtns = document.getElementsByName('gender');

  for (let index = 0; index < radioBtns.length; index += 1) {
    if (radioBtns[index].checked) {
      return radioBtns[index].value;
    }
  }

  return '';
}

function formValidation(event) {
  const formInputs = {
    firstName: document.querySelector('.first-name').value,
    lastName: document.querySelector('.name input + input').value,
    phoneEmail: document.querySelector('#phone-email').value,
    password: document.querySelector('#password').value,
    birthdate: document.querySelector('#birthdate').value,
    gender: radioBtnValue(),
  };

  const span = document.querySelector('.form-span');

  const keys = Object.keys(formInputs);

  keys.forEach(function (key) {
    if (formInputs[key] === null || formInputs[key] === '') {
      event.preventDefault();
      span.style.display = 'block';
    }
  });
}

btnRegister.addEventListener('click', formValidation);
