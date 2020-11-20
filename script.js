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

function validarCadastro() {
  const submitBtn = document.getElementById('facebook-register');
  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (!formContent.checkValidity()) {
      criarMensagem();
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
