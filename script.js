// Exibe um alert com email ou número do usuário

const btnLogin = document.getElementById('button-login');
const inputEmailPhone = document.getElementById('user-email-phone');
btnLogin.addEventListener('click', function () {
  alert(inputEmailPhone.value);
});
// Verifica data
const submitButton = document.getElementById('facebook-register');
const getErrorWarning = document.getElementById('error-warning');
function dateVerify() {
  const getInputBirthday = document.getElementById('birthdate').value;
  const inputBirthday = document.getElementById('birthdate')
  const arrayDate = getInputBirthday.split('/');
  const day = arrayDate[0];
  const month = arrayDate[1];
  const year = arrayDate[2];
  if (!(day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0)) {
    inputBirthday.classList.add('error');
    getErrorWarning.classList.remove('input-display');
  } else {
    inputBirthday.classList.remove('error');
    getErrorWarning.classList.add('input-display');
    return '';
  }
}
// Verifica campos
const inputs = document.querySelectorAll('input');

function emptyVerify() {
  for (let index = 2; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      inputs[index].classList.add('error');
      getErrorWarning.classList.remove('input-display');
    } else if (inputs[index].value != '' || inputs[index].classList.contains('error')) {
        inputs[index].classList.remove('error')
        getErrorWarning.classList.add('input-display');
        return '';
      }
    }
  }

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
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  const verifyUserFields = emptyVerify();
  const verifyUserDate = dateVerify();
  if (verifyUserDate === '' && verifyUserFields === '') {
    let getFormContent = document.getElementsByClassName('form-content')[0];
    let getHiddenContent = document.getElementsByClassName('hidden-content')[0];
    let getHelloUser = document.getElementsByClassName('hello-user')[0];
    let getUserName = document.querySelector('.input-first-name');
    let getUserLastName = document.querySelector('.input-last-name');
    getFormContent.classList.add('input-display');
    getHiddenContent.classList.remove('input-display');
    getHelloUser.innerText = `Olá, ${getUserName.value} ${getUserLastName.value}`
  }
  // console.log(verifyUserFields);
  console.log(verifyUserDate);
  
  
});
// const submitButton = document.getElementById('facebook-register');
// submitButton.addEventListener('click', function () {
//   const userRegister = document.querySelectorAll('input');
//   const userName = document.getElementsByClassName('hello-user');
// });




