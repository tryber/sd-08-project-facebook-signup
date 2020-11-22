const botaoEntrar = document.getElementById('button-login');
botaoEntrar.addEventListener('click', function () {
  const loginEmailOuTel = document.getElementById('user-email-phone').value;
  alert(loginEmailOuTel);
});

const formRegister = document.querySelector('.facebook-register');
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
  const erros = verificaCamposInvalidos();
  if (erros !== 0) {
    const invalido = document.createElement('p');
    invalido.innerText = 'Campos inválidos';
    formRegister.appendChild(invalido);
  }
}

const mainContent = document.querySelector('.main-content');
const rigthContent = document.querySelector('.right-content');
const inputText = formRegister.querySelectorAll('input[type=text]');
function substituirForm() {
  const erro = verificaCamposInvalidos();
  if (erro === 0) {
    const section = document.createElement('section');
    section.className = 'right-content';
    mainContent.appendChild(section);
    const name = document.createElement('p');
    name.innerHTML = `Olá, ${inputText[0].value} ${inputText[1].value}`;
    section.appendChild(name);
    for (let index = 2; index < inputText.length; index += 1) {
      const input = inputText[index];
      const validar = document.createElement('p');
      validar.innerHTML = input.value;
      section.appendChild(validar);
    }
    const inputRadio = formRegister.querySelector('input[type=radio]:checked').value;
    const gender = document.createElement('p');
    gender.innerHTML = inputRadio;
    section.appendChild(gender);
    rigthContent.style.display = 'none';
  }
}

botaoCadastrar.addEventListener('click', function (event) {
  event.preventDefault();
  verificaErros();
  substituirForm();
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
