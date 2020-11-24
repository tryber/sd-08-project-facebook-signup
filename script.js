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
const phone = document.getElementById('phone');

function login() {
  alert(emailTelefone.value);
}

loginButton.addEventListener('click', login);

btnFacebook.addEventListener('click', function () {
  let erros = '';
  for (let index = 0; index < signupInputs.length; index += 1) {
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
    paragraphEmail.innerHTML = phone.value;
    const paragraphBirthDate = document.createElement('p');
    paragraphBirthDate.innerHTML = birthDate.value;
    const genero = document.createElement('p');
    const generoChecked = document.querySelector('input[type="radio"]:checked');
    genero.innerHTML = generoChecked.value;
    document.querySelector('.main-content').removeChild(document.querySelector('.right-content'));
    const information = document.createElement('div');
    information.className = 'right-content';
    document.querySelector('.main-content').appendChild(information);
    information.appendChild(paragraphName);
    information.appendChild(paragraphEmail);
    information.appendChild(paragraphBirthDate);
    information.appendChild(genero);
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
