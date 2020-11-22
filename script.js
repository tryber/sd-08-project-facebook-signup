const botaoLogin = document.getElementById('button-login');
const entradaEmailTelefone = document.getElementById('user-email-phone');
const radio = document.getElementById('personal');
const btnRegister = document.getElementById('facebook-register');
botaoLogin.addEventListener('click', function () {
  alert(entradaEmailTelefone.value);
});
function otherGender() {
  radio.addEventListener('change', function () {
    const gender = document.createElement('input');
    const divGender = document.querySelector('.other-gender');
    if (radio.checked) {
      gender.type = 'text';
      gender.name = 'gender-custom';
      gender.placeholder = 'Gênero';
      divGender.appendChild(gender);
    }
  });
}
otherGender();
function printResult(user) {
  const name = document.createElement('h4');
  const email = document.createElement('h4');
  const birthdate = document.createElement('h4');
  const gender = document.createElement('h4');
  const div = document.createElement('div');
  name.innerHTML += `Olá, ${user.name} ${user.fullName}`;
  div.appendChild(name);
  email.innerHTML += `Email ou Telefone: ${user.email}`;
  div.appendChild(email);
  birthdate.innerHTML += `Data de Nascimento: ${user.birthdate}`;
  div.appendChild(birthdate);
  gender.innerHTML += `Gênero: ${user.gender}`;
  div.appendChild(gender);
  return div;
}
function getValues() {
  const name = document.querySelector('.name');
  const fullName = document.querySelector('.last-name');
  const email = document.querySelector('.email');
  const pass = document.querySelector('.pass');
  const male = document.querySelector('#male');
  const female = document.querySelector('#female');
  const personal = document.querySelector('#personal');
  const birthdate = document.querySelector('#birthdate');
  const user = {};
  user.name = name.value;
  user.fullName = fullName.value;
  user.email = email.value;
  user.pass = pass.value;
  user.birthdate = birthdate.value;
  if (male.checked) {
    user.gender = 'Masculino';
  }
  if (female.checked) {
    user.gender = 'Feminino';
  }
  if (personal.checked) {
    user.gender = 'Personalizado';
  }
  return user;
}
function validate() {
  const user = Object.values(getValues());
  let result = true;
  for (let i = 0; i < user.length; i += 1) {
    if (user[i] === '') {
      result = false;
    }
  }
  return result;
}
function signIn() {
  const form = document.querySelector('.form-register');
  btnRegister.addEventListener('click', function (event) {
    const rightContent = document.querySelector('.right-content');
    event.preventDefault();
    if (validate() === true) {
      const user = getValues();
      rightContent.innerHTML = '';
      rightContent.appendChild(printResult(user));
    } else {
      form.innerHTML += 'Campos inválidos';
    }
  });
}
signIn();
