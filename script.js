const btnLogin = document.getElementById('button-login');
const rbPers = document.getElementById('personalizado');
const persInput = document.getElementById('persInput');
const btnRegister = document.getElementById('facebook-register');
const labelEmpty = document.getElementsByClassName('label-empty');
let userId;

btnLogin.addEventListener('click', function () {
  userId = document.getElementById('user-email-phone');
  alert(userId.value);
});

function Req20(num, obj, form) {
  if (num === 5 && obj !== null) {
    const right = document.getElementsByClassName('right-content')[0];
    right.innerHTML = `<h1>Olá, ${form[0].value} ${form[1].value}</h1>
    <p>${form[2].value}</p>
    <p>${form[4].value}</p>
    <p>${obj.value}</p>`;
    return;
  }
  labelEmpty[0].style.display = 'block';
  labelEmpty[0].innerHTML = 'Campos Inválidos';
}

btnRegister.addEventListener('click', function () {
  const checkForm = document.getElementsByClassName('check-form');
  const radioBtn = document.querySelector('input[name="gender"]:checked');
  let calc = 0;
  for (let i = 0; i < checkForm.length; i += 1) {
    if (checkForm[i].value !== '') {
      calc += 1;
    }
  }

  Req20(calc, radioBtn, checkForm);
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
