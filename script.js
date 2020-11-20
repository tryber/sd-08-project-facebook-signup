const entrar = document.getElementById('button-login');
const invalido = document.getElementById('invalidos');

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

// const formulario = document.querySelector('.form');

cadastre.addEventListener('click', function () {
  let contador = 0;
  for (let index = 0; index < form.length; index += 1) {
    if (form[index].value === '') {
      contador += 1;
    }
  }
  if (contador !== 0) {
    invalido.innerText = 'Campos inválidos';
  }
});
