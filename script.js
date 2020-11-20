const loginButton = document.getElementById('button-login');
const emailTelefone = document.getElementById('user-email-phone');
const btnFacebook = document.getElementById('facebook-register');
const signup = document.getElementById('form-cadastro');
const firstName = document.getElementById('name');
const lastName = document.getElementById('last-name');
const phoneEmail = document.getElementById('phone');
const password = document.getElementById('password');
const dateBorn = document.getElementById('birthdate');
const radioMan = document.getElementById('masc');
const radioFemale = document.getElementById('fem');
const radioPersonalized = document.getElementById('pers');

function login() {
  alert(emailTelefone.value);
}

loginButton.addEventListener('click', login);

function submitForm () {
  if (firstName.value == "" || firstName.value == null) {
    alert('Campos inválidos');
  } else if (lastName.value == "" || lastName.value == null) {
    alert('Campos inválidos');
  } else if (phoneEmail.value == "" || phoneEmail.value == null) {
    alert('Campos inválidos');
  } else if (password.value == "" || password.value == null) {
    alert('Campos inválidos');
  } else if (dateBorn.value == "" || dateBorn.value == null) {
    alert('Campos inválidos');
  }
}

btnFacebook.addEventListener('click', submitForm);

function createInput (){
  let radios = document.getElementsByName('gender');
  for (let index = 0; index < radios.length; index +=1) {
    if (radios[index].value == 'Personalizado'){
      let campo =document.createElement('input');
      signup.appendChild(campo);
      campo = signup.insertBefore(campo, btnFacebook);
      campo.type = 'text';
      campo.name = 'gender-custom';
      campo.placeholder = 'Gênero (opcional)';
    }
  }
}

radioPersonalized.addEventListener('click', createInput);


