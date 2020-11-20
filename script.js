const getButtonLogin = document.getElementById('button-login');
const getInputLogin = document.getElementById('user-email-phone');
const getButtonSubmit = document.getElementById('facebook-register');
const getRightContent = document.getElementById('right-content');
const getGenderPersonalizado = document.getElementById('personalizado');
const getGenderPersonalizadoContainer = document.getElementById('genero-personalizado');
const setMessageInvalid = document.getElementById('message-invalid');
const formInputName = [];

function rightContentClear() {
  while (getRightContent.hasChildNodes()) {
    getRightContent.removeChild(getRightContent.firstChild);
  }
}
function submitFormCreate() {
  rightContentClear();
  const template = `<h1>Olá, ${formInputName[0]} ${formInputName[1]}</h1>
  <span> ${formInputName[2]} </span>
  <span> ${formInputName[4]} </span>
  <span> ${formInputName[5]} </span>
  `;
  getRightContent.innerHTML += template;
}
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
    if (valueElement === '') {
      return (check = true);
    }
    if (element.name === 'gender') {
      if (element.checked) {
        formInputName.push(valueElement);
      }
      return false;
    }
    return formInputName.push(valueElement);
  });
  if (check) {
    return (setMessageInvalid.style.display = 'block');
  }
  return submitFormCreate();
};
getGenderPersonalizado.onclick = createInputGenderPersonalizado;
