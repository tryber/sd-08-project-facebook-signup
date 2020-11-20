const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', () => {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
});

const inputTexto = document.getElementById('formulario-abre-conta');

function verificaInputTexto(event) {
  for (let index = 0; index < 4; index += 1) {
    if (inputTexto[index].value === '') {
      const camposInvalidos = document.createElement('p');
      camposInvalidos.innerHTML = 'Campos inválidos';
      inputTexto.appendChild(camposInvalidos);
      break;
    }
  }
}

function radioButtons() {
  const btnPresonalizado = document.getElementById('personalizado');
  btnPresonalizado.addEventListener('click', () => {
    const newInput = document.createElement('input');
    newInput.name = 'gender-custom';
    newInput.placeholder = 'Gênero (opcional)';
    inputTexto.appendChild(newInput);
    const btnMasculino = document.getElementById('masculino');
    btnMasculino.addEventListener('click', () => {
      inputTexto.removeChild(newInput);
    });
    const btnFeminino = document.getElementById('feminino');
    btnFeminino.addEventListener('click', () => {
      inputTexto.removeChild(newInput);
    });
  });
}
radioButtons();

const btnCadastro = document.getElementById('facebook-register');
btnCadastro.addEventListener('click', verificaInputTexto);
