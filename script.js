const buttonEnter = document.getElementById('button-login');
const inputEmailPhone = document.getElementById('user-email-phone');

function showAlert() {
  buttonEnter.addEventListener('click', function () {
    alert(inputEmailPhone.value);
  });
}

showAlert();

function verifyText() {
  const formText = document.querySelectorAll(
    '#sign-up input[type=text], #sign-up input[type=password]'
  );
}

  for (let index = 0; index < formText.length; index += 1) {
    if (formText[index].value === '' || formText[index].value === null) {
      return true;
    }
  }
  return false;
}

function verifyRadio() {
  const formRadio = document.querySelectorAll('#sign-up input[type=radio]');
  let radioEmpty = 0;
  for (let index = 0; index < formRadio.length; index += 1) {
    if (formRadio[index].checked === false) {
      radioEmpty += 1;
    }
  }
  if (radioEmpty > 2) {
    return true;
  }
  return false;
}

const signUpForm = document.getElementById('sign-up');
const errorMessage = document.createElement('p');
signUpForm.appendChild(errorMessage);

function completeSignUp() {
  const buttonRegister = document.getElementById('facebook-register');
  buttonRegister.addEventListener('click', function (event) {
    event.preventDefault();
    if (verifyText() || verifyRadio()) {
      errorMessage.innerText = 'Campos inválidos';
    } else {
      errorMessage.innerText = '';
    }
  });
}
completeSignUp();
