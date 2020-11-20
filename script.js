const loginButton = document.getElementById('button-login');
const emailTelefone = document.getElementById('user-email-phone');
const btnFacebook = document.getElementById('facebook-register');
const signupInputs = document.querySelectorAll('#form-cadastro input');
const radioPersonalizado = document.getElementById('radioPersonalizado');
const radioPersonalized = document.getElementById('pers');
const mensagem = document.getElementById('mensagem');

function login() {
  alert(emailTelefone.value);
}

loginButton.addEventListener('click', login);

function submitForm() {
  for (let i = 0; i < signupInputs.length; i += 1) {
    if (signupInputs[i].value === '') {
      const campoMensagem = document.createElement('p');
      campoMensagem.innerText = 'Campos inválidos';
      mensagem.appendChild(campoMensagem);
      break;
    }
  }
}

btnFacebook.addEventListener('click', submitForm);

function createInput() {
  const radios = document.getElementsByName('gender');
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].value === 'Personalizado') {
      const campo = document.createElement('input');
      campo.type = 'text';
      campo.name = 'gender-custom';
      campo.placeholder = 'Gênero (opcional)';
      radioPersonalizado.appendChild(campo);
    }
  }
}

radioPersonalized.addEventListener('click', createInput);
