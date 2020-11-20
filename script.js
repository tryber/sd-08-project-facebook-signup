const btnLogin = document.getElementById('button-login');
const rbPers = document.getElementById('personalizado');
const persInput = document.getElementById('persInput');
let userId;

btnLogin.addEventListener('click', function () {
  userId = document.getElementById('user-email-phone');
  alert(userId.value);
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
