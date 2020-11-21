const entrar = document.getElementById('button-login');
const invalido = document.querySelector('.invalidos');
const rightContent = document.querySelector('.right-content');
const mainContent = document.querySelector('.main-content');

entrar.addEventListener('click', function () {
  const email = document.getElementById('user-email-phone');
  alert(email.value);
});

const genderContainer = document.querySelector('.gender-container');

const persona = document.getElementById('3');

persona.addEventListener('click', function () {
  const inputGender = document.createElement('input');
  inputGender.name = 'gender-custom';
  inputGender.type = 'text';
  inputGender.placeholder = 'Gênero (opcional)';
  genderContainer.appendChild(inputGender);
});

const cadastre = document.getElementById('facebook-register');

const form = document.querySelectorAll('.form input');

function eraseRightContent() {
  rightContent.remove();
}

function createRightContent() {
  const newRightDiv = document.createElement('div');
  newRightDiv.className = 'right-content';
  mainContent.appendChild(newRightDiv);
  newRightDiv.innerText = `Olá, ${form[0].value} ${form[1].value} \n
  ${form[2].value} \n
  ${form[4].value} \n
  `;
}

cadastre.addEventListener('click', function (event) {
  let contador = 0;
  for (let index = 0; index < form.length; index += 1) {
    if (form[index].value === '') {
      contador += 1;
    }
  }
  if (contador !== 0) {
    event.preventDefault();
    invalido.innerHTML = 'Campos inválidos';
  } else {
    eraseRightContent();
    createRightContent();
  }
});
