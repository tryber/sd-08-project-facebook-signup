// Variáveis
const buttonLogin = document.getElementById('button-login');
const emailPhone = document.getElementById('user-email-phone');
const genderUndefined = document.getElementById('undefined');
const genderForm = document.querySelector('.radio-form');
const buttonCadastro = document.getElementById('facebook-register');
const rightContentForm = document.getElementById('right-content-form');
const rightContentDiv = document.querySelector('.right-content');
const genderInputs = genderForm.getElementsByTagName('input');
const allInputs = rightContentForm.getElementsByTagName('input');
let gender = '';

function atribuiValorGenders (genderInputs) {
  for (let index = 0; index < genderInputs.length; index +=1) {
    if (genderInputs[index].checked == true) {
      gender = genderInputs[index].value;
    }
  }
  return gender;
};

atribuiValorGenders (genderInputs);

buttonLogin.addEventListener('click', function (event) {
  event.preventDefault();
  alert(emailPhone.value);
});

genderUndefined.addEventListener('click', function () {
  const genderCustom = document.createElement('input');
  genderCustom.name = 'gender-custom';
  genderCustom.placeholder = 'Gênero (opcional)';

  genderForm.appendChild(genderCustom);
});

buttonCadastro.addEventListener('click', function (event) {
  event.preventDefault();
  const invalidInput = document.createElement('p');
  let auxiliar = false;
  const inputValues = [];

  for (let index = 0; index < allInputs.length; index += 1) {
    if (allInputs[index].name !== 'gender' && allInputs[index].name !=='password') {
      if (allInputs[index].value === '') {
        rightContentForm.appendChild(invalidInput);
        invalidInput.innerText = 'Campos inválidos';
        auxiliar = true;
      }
      inputValues.push(allInputs[index].value);
    }
  }

  if (auxiliar == false) {
    rightContentForm.innerHTML = '';
    inputValues.push(gender);
    let fullName = '';
    const name = inputValues[0];
    const lastname = inputValues[1];
    const email = inputValues[2];
    const date = inputValues[3];
    const genero = inputValues[4];
    rightContentForm.innerHTML = `<p>Olá, ${name} ${lastname}</p> <p>Email: ${email}</p> <p>Data de Nascimento: ${date}</p> <p>Gênero: ${genero}`;
  }
});

