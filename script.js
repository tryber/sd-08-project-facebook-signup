const buttonLogin = document.querySelector('#button-login');

function formsAlert() {
  const emailOrPhoneNumber = document.querySelector('#user-email-phone').value;
  alert(emailOrPhoneNumber);
}

buttonLogin.addEventListener('click', formsAlert);

const custom = document.querySelector('#Personalizado');
const inputCustom = document.querySelector('.custom');

function customGender() {
  if (custom.checked) {
    inputCustom.style.display = 'contents';
  } else {
    inputCustom.style.display = 'none';
  }
}

custom.addEventListener('change', customGender);

const buttonRegister = document.querySelector('#facebook-register');
const rightContent = document.querySelector('.right-content');

function verifyFields() {
  const firstname = document.querySelector('.firstname').value;
  const lastname = document.querySelector('.lastname').value;
  const phoneEmail = document.querySelector('.phone_email').value;
  const password = document.querySelector('.password').value;
  const birthdate = document.querySelector('.birthdate').value;
  const fields = [firstname, lastname, phoneEmail, password, birthdate];
  for (let i = 0; i < fields.length; i += 1) {
    if (fields[i] === '') {
      document.querySelector('.invalid-field').style.display = 'contents';
      return false;
    }
  }
  return fields;
}

function genderChecked() {
  let gender;
  if (document.querySelector('#Masculino').checked) {
    gender = 'Masculino';
  } else if (document.querySelector('#Feminino').checked) {
    gender = 'Feminino';
  } else {
    gender = 'Personalizado';
  }
  return gender;
}

function subimitForm() {
  const fields = verifyFields();

  const gender = genderChecked();

  if (fields !== false) {
    rightContent.innerHTML =
    `<h1>Olá, ${fields[0]} ${fields[1]}</h1>
    <h2>Seja bem vinda(o)</h2>
    <p>Por favor confira se os dados estão corretos.</p>
    <p>Email/celular:${fields[2]}</p>
    <p>Data de nascimento: ${fields[4]}</p>
    <p>Gênero: ${gender}</p>`;
  }
}

buttonRegister.addEventListener('click', subimitForm);
