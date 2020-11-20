const loginButton = document.getElementById('button-login');
const emailTelefone = document.getElementById('user-email-phone');
const btnFacebook = document.getElementById('facebook-register');
const signup = document.getElementById('form-cadastro');
const signupInputs = document.querySelectorAll('#form-cadastro input');
const radioPersonalized = document.getElementById('pers');

function login() {
  alert(emailTelefone.value);
}

loginButton.addEventListener('click', login);

function submitForm() {
  for (let i = 0; i < signupInputs.length; i += 1) {
    if (signupInputs[i].value === '') {
      alert('Campos inválidos');
      break;
    }
  }
}

btnFacebook.addEventListener('click', submitForm);

function createInput() {
  const radios = document.getElementsByName('gender');
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].value === 'Personalizado') {
      let campo = document.createElement('input');
      signup.appendChild(campo);
      campo = signup.insertBefore(campo, btnFacebook);
      campo.type = 'text';
      campo.name = 'gender-custom';
      campo.placeholder = 'Gênero (opcional)';
    }
  }
}

radioPersonalized.addEventListener('click', createInput);
