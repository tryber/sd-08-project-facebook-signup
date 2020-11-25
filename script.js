const btnLogin = document.getElementById('button-login');
const rightContent = document.querySelector('.right-content');
const inputTexto = document.getElementById('formulario-abre-conta');
const btnCadastro = document.getElementById('facebook-register');
let genero = String;

btnLogin.addEventListener('click', () => {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
});

function qualGeneroEscolhido() {
  const generos = document.getElementsByName('gender');
  for (let index = 0; index < generos.length; index += 1) {
    if (generos[index].checked === true) {
      genero = generos[index].value;
    }
  }
}

function verificaInputTexto() {
  for (let index = 0; index < 4; index += 1) {
    if (inputTexto[index].value === '') {
      const camposInvalidos = document.createElement('p');
      camposInvalidos.innerHTML = 'Campos inválidos';
      inputTexto.appendChild(camposInvalidos);
      break;
    } else {
      qualGeneroEscolhido();
      rightContent.innerHTML = `Olá, ${inputTexto[0].value} ${inputTexto[1].value},
      email: ${inputTexto[2].value},
      Nasc: ${inputTexto[4].value}
      Genero: ${genero}`;
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
      if (inputTexto.appendChild(newInput)) {
        inputTexto.removeChild(newInput);
      }
    });
    const btnFeminino = document.getElementById('feminino');
    btnFeminino.addEventListener('click', () => {
      if (inputTexto.appendChild(newInput)) {
        inputTexto.removeChild(newInput);
      }
    });
  });
}
radioButtons();

btnCadastro.addEventListener('click', verificaInputTexto);
