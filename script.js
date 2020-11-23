const btnLogin = document.getElementById('button-login');
const rbPers = document.getElementById('personalizado');
const persInput = document.getElementById('persInput');
const btnRegister = document.getElementById('facebook-register');
const labelEmpty = document.getElementById('labelEmpty');
let userId;

btnLogin.addEventListener('click', function () {
  userId = document.getElementById('user-email-phone');
  alert(userId.value);
});

function Req20 (num, obj) {
  if (num === 5 && obj !== null) {
    console.log(num);
    return;
  }
  labelEmpty.innerText = 'Campos Inválidos';
}

btnRegister.addEventListener('click', function () {
  const checkForm = getElementsByClassName('check-form');
  const radioBtn = document.querySelector('input[name="gender"]:checked')
  let calc = 0;
  for (let i = 0; i < checkForm.length; i += 1) {
    if(checkForm[i].value != '') {
      calc += 1;
      console.log(calc);
    }
  }

  Req20(calc, radioBtn);
});

function DisableInput() {
  if (rbPers.checked) {
    persInput.innerHTML = '<input type="text" name="gender-custom" id="genderCustom" placeholder="Gênero (Opcional)">';
    return;
  }
  persInput.innerHTML = '';
}

rbPers.addEventListener('change', DisableInput);

DisableInput();
