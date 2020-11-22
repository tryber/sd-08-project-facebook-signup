// Exibe um alert com email ou número do usuário

const btnLogin = document.getElementById('button-login');
const inputEmailPhone = document.getElementById('user-email-phone');
btnLogin.addEventListener('click', function () {
  alert(inputEmailPhone.value);
});
// Verifica os campos
const submitButton = document.getElementById('facebook-register');
const getInputBirthday = document.querySelector('#birthdate');
const getErrorWarning = document.getElementById('error-warning');
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  const getInputBirthday = document.querySelector('#birthdate').value;
  let arrayDate = getInputBirthday.split('/')
  let day = arrayDate[0];
  let month = arrayDate[1];
  let year = arrayDate[2];
  if (getInputBirthday[2] == '/' && getInputBirthday[5] == '/') {
    if (!(day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0)) {
      document.querySelector('#birthdate').classList.add('error');
      getErrorWarning.classList.remove('input-display');
    }
  }
});



// Monstra um input de texto ao escolher personalizado no campo de gênero

const customRadio = document.querySelectorAll('.checked-gender');
const inputOption = document.getElementById('option');
customRadio.forEach((element) => {
  element.addEventListener('change', function () {
    if (customRadio[2].checked) {
      inputOption.classList.remove('input-display');
      inputOption.setAttribute('required', '');
    } else {
      inputOption.classList.add('input-display');
      inputOption.removeAttribute('required');
    }
  });
});

// const submitButton = document.getElementById('facebook-register');
// submitButton.addEventListener('click', function () {
//   const userRegister = document.querySelectorAll('input');
//   const userName = document.getElementsByClassName('hello-user');
// });
