const btnLogin = document.getElementById('button-login');
const rbPers = document.getElementById('personalizado');
const persInput = document.getElementById('persInput');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phoneEmail = document.getElementById('phone_email');
const password = document.getElementById('password');
const birthdate = document.getElementById('birthdate');
const btnRegister = document.getElementById('facebook-register');
const labelEmpty = document.getElementById('labelEmpty');
let userId;

btnLogin.addEventListener('click', function () {
  userId = document.getElementById('user-email-phone');
  alert(userId.value);
});

btnRegister.addEventListener('click', function () {
  if (firstname.value === '' || lastname.value === '' || phoneEmail === '' || password === '' || birthdate === '') {
    labelEmpty.innerHTML = '<p>Campos inválidos</p>';
  }
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
