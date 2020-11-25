const buttonSignUp = document.getElementById('facebook-register');
const missing = document.createElement('p');
const form = document.querySelector('.form');
let counting = 0;
const inputCustomGender = document.createElement('input');
inputCustomGender.name = 'gender-custom';
inputCustomGender.placeholder = 'Gênero (opcional)';
inputCustomGender.type = 'text';
inputCustomGender.id = 'gender';
const formGender = document.querySelector('.form-gender');
const optionCustom = document.querySelector('#personal');

/* const alertLogin = () => {
    const emailCelular = document.getElementById('user-email-phone');
    alert(emailCelular.value);
} */

const inputRadio = document.querySelectorAll('inputRadio');
function contagem() {
  for (let index = 0; index < inputRadio.length; index += 1) {
    if (inputRadio[index].checked) {
      counting += 1;
    }
  }
}

function checkRadio() {
  if (counting === 1) {
    missing.innerHTML = '';
  } else {
    missing.innerHTML = 'Campos Inválidos';
    form.appendChild(missing);
  }
}

function changeRightContainer() {
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const phoneEmail = document.getElementById('phone-email').value;
  const birthdate = document.getElementById('birthdate').value;
  const selectedGender = document.querySelector('input[type="radio"]:checked')
    .value;

  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = `<p>Olá, ${firstName} ${lastName}!</p> <p>E-mail ou telefone: ${phoneEmail}</p> <p>Data de nascimento: ${birthdate}</p> <p>Gênero: ${selectedGender}</p>`;
}
const registerButton = document.getElementById('facebook-register');
registerButton.addEventListener('click', function (event) {
  event.preventDefault();
  const input = document.querySelectorAll('[required]');
  for (let index = 0; index < input.length; index += 1) {
    if (!input[index].value) {
      document.querySelector('.invalid').style.display = 'block';
      return;
    }
  }
  changeRightContainer();
});


buttonSignUp.addEventListener('click', function (event) {
  event.preventDefault();
  contagem();
  checkRadio();
});

optionCustom.addEventListener('click', function () {
  formGender.appendChild(inputCustomGender);
},
);
