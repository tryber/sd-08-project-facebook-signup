const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', () => {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
});

function verificaInputTexto() {
  const inputTexto = document.getElementById('formulario-abre-conta');
  for (let index = 0; index < 4; index += 1) {
    if (inputTexto[index].value === '') {
      const camposInvalidos = document.createElement('p');
      camposInvalidos.innerHTML = 'Campos inválidos';
      inputTexto.appendChild(camposInvalidos);
      break;
    }
  }
}

const btnCadastro = document.getElementById('facebook-register');
btnCadastro.addEventListener('click', verificaInputTexto);
