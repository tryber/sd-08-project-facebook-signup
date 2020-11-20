function loginButtonAlert() {
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', function () {
    const emailPhone = document.querySelector('#user-email-phone').value;
    alert(emailPhone);
  });
}
loginButtonAlert();

function createGenderField() {
  const dadElement = document.querySelector('#gender-input');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'gender-custom';
  input.id = 'genero-personalizado';
  input.placeholder = 'Gênero (opcional)';
  dadElement.appendChild(input);
}

function checkRadioButtons() {
  const radioButtons = document.getElementsByName('gender');
  for (let index = 0; index < radioButtons.length; index += 1) {
    radioButtons[index].addEventListener('change', function () {
      if (radioButtons[index].value === 'Personalizado') {
        createGenderField();
      }
    });
  }
}
checkRadioButtons();

function fillAfterAcContent() {
  const helloUser = document.getElementById('hello-user');
  const name = document.getElementById('user-ca-name');
  const surname = document.getElementById('user-ca-lastname');

  const userEmailOrPhone = document.getElementById('user-ca-phone-email');
  const emailOrPhone = document.getElementById('email-or-phone');

  const birthDate = document.getElementById('birth-date');
  const userBirthDate = document.getElementById('user-ca-birthdate');

  const gender = document.getElementById('gender');
  const f = document.getElementById('F');
  const m = document.getElementById('M');
  const p = document.getElementById('P');

  helloUser.innerHTML = `Olá, ${name.value} ${surname.value}`;
  emailOrPhone.innerHTML = userEmailOrPhone.value;
  birthDate.innerHTML = userBirthDate.value;

  if (f.checked === true) {
    gender.innerHTML = 'Feminino';
  } else if (m.checked === true) {
    gender.innerHTML = 'Masculino';
  } else if (p.checked === true) {
    gender.innerHTML = 'Personalizado';
  }

};

function verifyRadio(item, value) {

  for (let index = 0; index < value; index += 1) {
    if (item[index] === true) {

    }
  }

};

function verifyRadio(){
  const caRadioInputList = document.querySelectorAll('.ca-radio-input');
  if (caRadioInputList[0].checked === true) {
    return false
  } else if (caRadioInputList[1].checked === true) {
    return false;
  } else if (caRadioInputList[2].checked === true) {
    return false;
  }
  return true;
}

function isEverythingFilled() {
  const registerButton = document.getElementById('facebook-register');
  registerButton.addEventListener('click', function () {
    fillAfterAcContent();
    const caInputList = document.querySelectorAll('.ca-input');
    let isntFilledCount = 0;

    for (let index = 0; index < caInputList.length; index += 1) {
      if (caInputList[index].value === '') {
        isntFilledCount += 1;
      }
    }
    if (verifyRadio()) {
      isntFilledCount += 1;
    }
    if (isntFilledCount !== 0) {
      alert('Campos inválidos');
    } else {
      fillAfterAcContent();
      changeRightContentElementDisplay();
    }
  });
};
isEverythingFilled();

function changeRightContentElementDisplay() {
  const contentBeforeAc = document.querySelector('.before-ac');

  contentBeforeAc.parentNode.removeChild(contentBeforeAc);
};



