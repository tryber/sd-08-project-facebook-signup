const getButtonLogin = document.getElementById('button-login');
const getInputLogin = document.getElementById('user-email-phone');
const getButtonSubmit = document.getElementById('facebook-register');
const getGenderPersonalizado = document.getElementById('personalizado');
const getGenderPersonalizadoContainer = document.getElementById('genero-personalizado');
const setMessageInvalid = document.getElementById('message-invalid');

function createInputGenderPersonalizado() {
  const genderCustom = '<input name="gender-custom" type="text" placeholder="Gênero (opcional)"></input>';
  getGenderPersonalizadoContainer.innerHTML += genderCustom;
}

getButtonLogin.onclick = function () {
  const login = getInputLogin.value;
  alert(login);
};
getButtonSubmit.onclick = function (event) {
  event.preventDefault();
  const inputForm = document.querySelectorAll('#form-create input');
  let check = false;
  inputForm.forEach((element) => {
    const valueElement = element.value;
    if (valueElement === '') check = true;
  });
  if (check) setMessageInvalid.style.display = 'block';
};
getGenderPersonalizado.onclick = createInputGenderPersonalizado;
