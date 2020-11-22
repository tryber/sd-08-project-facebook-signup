// Exibe um alert com email ou número do usuário

const btnLogin = document.getElementById('button-login');
const inputEmailPhone = document.getElementById('user-email-phone');
btnLogin.addEventListener('click', function () {
  alert(inputEmailPhone.value);
});
// Verifica os campos
const submitButton = document.getElementById('facebook-register');
const getErrorWarning = document.getElementById('error-warning');
function dateVerify() {
  const getInputBirthday = document.querySelector('#birthdate').value;
  const arrayDate = getInputBirthday.split('/');
  const day = arrayDate[0];
  const month = arrayDate[1];
  const year = arrayDate[2];
  if (!(day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0)) {
    document.querySelector('#birthdate').classList.add('error');
    getErrorWarning.classList.remove('input-display');
  }
}
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  dateVerify();
});
// Mostra um input de texto ao escolher personalizado no campo de gênero

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
