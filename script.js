const botaoEntrar = document.getElementById('button-login');
botaoEntrar.addEventListener('click', function () {
  const loginEmailOuTel = document.getElementById('user-email-phone').value;
  alert(loginEmailOuTel);
});

const formRegister = document.querySelector('.facebook-register')
const inputs = formRegister.querySelectorAll('input[type=text], input[type=radio], input[type=password]');
const botaoCadastrar = document.getElementById('facebook-register');
function verificaCamposInvalidos() {
  let erros = 0;
  for (let index = 0; index < inputs.length; index += 1) {
    const input = inputs[index];
    if (input.value === '') {
      erros += 1;
    }
  }
  return erros;
}

function verificaErros() {
  let erros = verificaCamposInvalidos();
  if (erros !== 0) {
    const invalido = document.createElement('p');
    invalido.innerText = 'Campos inválidos';
    formRegister.appendChild(invalido);
  }
}

botaoCadastrar.addEventListener('click', function (event) {
  event.preventDefault();
  verificaErros();
});

const personalizado = document.getElementById('personalizado');
function criaInput(event) {
  if (event.target.id === 'personalizado') {
    const genderCustom = document.createElement('input');
    genderCustom.type = 'text';
    genderCustom.name = 'gender-custom';
    genderCustom.placeholder = 'Gênero (opcional)';
    const divGenderSignUp = document.querySelector('.gender-sign-up');
    divGenderSignUp.appendChild(genderCustom);
  }
}

personalizado.addEventListener('click', criaInput);
