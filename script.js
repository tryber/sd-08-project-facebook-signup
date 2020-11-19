const loginButton = document.getElementById('button-login');
const emailInput = document.getElementById('user-email-phone');
const customGenderDiv = document.querySelector('.genero-personalizado');
const customGenderRadio = document.getElementById('Personalizado');
const femaleGenderRadio = document.getElementById('Feminino');
const maleGenderRadio = document.getElementById('Masculino');

function alertLogin() {
  alert(emailInput.value);
}

loginButton.addEventListener('click', alertLogin);

function createCustomGender() {
  if (!customGenderDiv.children.length) {
    const genderInput = document.createElement('input');
    genderInput.name = 'gender-custom';
    genderInput.placeholder = 'Gênero (opcional)';
    customGenderDiv.appendChild(genderInput);
  }
}

function deleteCustomGender() {
  if (customGenderDiv.children.length) {
    const child = customGenderDiv.children[0];
    customGenderDiv.removeChild(child);
  }
}

customGenderRadio.addEventListener('click', createCustomGender);
femaleGenderRadio.addEventListener('click', deleteCustomGender);
maleGenderRadio.addEventListener('click', deleteCustomGender);
