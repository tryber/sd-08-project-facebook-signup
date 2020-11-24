const loginButton = document.getElementById('button-login');
const emailTelefone = document.getElementById('user-email-phone');
const btnFacebook = document.getElementById('facebook-register');
const signupInputs = document.querySelectorAll('#form-cadastro input');
const radioPersonalizado = document.getElementById('radioPersonalizado');
const radioPersonalized = document.getElementById('pers');
const mensagem = document.getElementById('mensagem');
const name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const birthDate = document.getElementById('birthdate');
const radioChecked = document.querySelector('input[type="radio"]:checked');

function login() {
  alert(emailTelefone.value);
}

loginButton.addEventListener('click', login);

btnFacebook.addEventListener('click', function () {
  let erros = '';
  for (let index = 2; index < signupInputs.length; index += 1) {
    const input = signupInputs[index];
    if (input.value === '') {
      erros += 'Campos inválidos';
    }
  }
  if (erros !== '') {
    // alert('Campos inválidos');
    const mensagemErro = document.createElement('p');
    mensagemErro.innerHTML = 'Campos inválidos';
    mensagem.appendChild(mensagemErro);
  } else {
    const paragraphName = document.createElement('p');
    paragraphName.innerHTML = `Olá, ${name.value} ${lastName.value}`;
    const paragraphEmail = document.createElement('p');
    paragraphEmail.innerHTML = emailTelefone.value;
    const paragraphBirthDate = document.createElement('p');
    paragraphBirthDate.innerHTML = birthDate.value;
    const genero = document.createElement('p');
    genero.innerHTML = radioChecked.value;
    document.querySelector('.main-content').removeChild(document.querySelector('.right-content'));
    const newDiv = document.createElement('div');
    newDiv.className = 'right-content';
    document.querySelector('.main-content').appendChild(newDiv);
    newDiv.appendChild(paragraphName);
    newDiv.appendChild(paragraphEmail);
    newDiv.appendChild(paragraphBirthDate);
    newDiv.appendChild(genero);
  }
});

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
