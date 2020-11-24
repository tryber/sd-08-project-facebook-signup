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
  const inputBirthday = document.getElementById('birthdate');
  const arrayDate = getInputBirthday.split('/');
  const day = arrayDate[0];
  const month = arrayDate[1];
  const year = arrayDate[2];
  if (!(day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0)) {
    inputBirthday.classList.add('error');
    getErrorWarning.classList.remove('input-display');
  } else {
    inputBirthday.classList.remove('error');
    // getErrorWarning.classList.add('input-display');
  }
  return 0;
}
// Verifica campos
const inputs = document.querySelectorAll('.input-text');

function emptyVerify() {
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      inputs[index].classList.add('error');
      getErrorWarning.classList.remove('input-display');
    } else if (inputs[index].value !== '') {
      inputs[index].classList.remove('error');
      // getErrorWarning.classList.add('input-display');
      dateVerify();
      // return 0;
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
  emptyVerify();
  // const verifyUserDate = dateVerify();
  let validate = 0;
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].classList.contains('error')) {
      validate += 1;
    }
  }
  if (validate === 0) {
    const getFormContent = document.getElementsByClassName('form-content')[0];
    const getHiddenContent = document.getElementsByClassName('hidden-content')[0];
    const getHelloUser = document.getElementsByClassName('hello-user')[0];
    const getUserName = document.querySelector('.input-first-name');
    const getUserLastName = document.querySelector('.input-last-name');
    const getUserEmailPhone = document.querySelector('.input-contact');
    const getBirthday = document.getElementById('birthdate');
    const getList = document.querySelectorAll('li');
    getFormContent.classList.add('input-display');
    getHiddenContent.classList.remove('input-display');
    getHelloUser.innerText = `Olá, ${getUserName.value} ${getUserLastName.value}`;
    getList[0].innerText = getUserEmailPhone.value;
    getList[1].innerText = getBirthday.value;
    for (let index = 0; index < customRadio.length; index += 1) {
      if (customRadio[index].checked) {
        getList[2].innerText = customRadio[index].value;
      }
    }
  }
});
