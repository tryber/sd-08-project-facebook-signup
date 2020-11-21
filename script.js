const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', function () {
  const emailAndPhone = document.getElementById('user-email-phone').value;
  alert(emailAndPhone);
});

const formContent = document.getElementById('form-content');

function criarMensagem() {
  const pegandoMensagem = document.getElementById('campos-invalidos');
  if (!pegandoMensagem) {
    const camposInvalidos = document.createElement('p');
    camposInvalidos.innerText = 'Campos inválidos';
    camposInvalidos.id = 'campos-invalidos';
    formContent.appendChild(camposInvalidos);
  }
}

const rightContent = document.querySelector('.right-content');
const name = document.getElementById('name-input');
const lastName = document.getElementById('last-name-input');
const showName = document.createElement('p');
const bDay = document.getElementById('bday');
const showBday = document.createElement('p');
const emailOrTel = document.getElementById('email-or-tel');
const showEmailOrTel = document.createElement('p');

function exibirDados() {
  showName.innerText = `Olá, ${name.value} ${lastName.value}`;
  showBday.innerText = bDay.value;
  showEmailOrTel.innerText = emailOrTel.value;
  name.remove();
  emailOrTel.remove();
  lastName.remove();
  rightContent.appendChild(showName);
  rightContent.appendChild(showEmailOrTel);
  rightContent.appendChild(showBday);
}

function validarCadastro() {
  const submitBtn = document.getElementById('facebook-register');
  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (!formContent.checkValidity()) {
      criarMensagem();
    } else {
      exibirDados();
    }
  });
}
validarCadastro();

function criarCampoGenero() {
  if (!document.querySelector('.gender-custom')) {
    const inputParaGenero = document.createElement('input');
    const labelBirth = document.getElementById('label-birthdate');
    inputParaGenero.type = 'text';
    inputParaGenero.name = 'gender-custom';
    inputParaGenero.placeholder = 'Gênero (opcional)';
    inputParaGenero.className = 'gender-custom';
    formContent.insertBefore(inputParaGenero, labelBirth);
  }
}

const btnGeneroPersonalizado = document.getElementById('personalizado');
btnGeneroPersonalizado.addEventListener('click', criarCampoGenero);
