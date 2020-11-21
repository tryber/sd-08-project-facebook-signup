function entrar() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}
function loginCheck() {
  const btnEntrar = document.getElementById('button-login');
  btnEntrar.addEventListener('click', entrar);
}
loginCheck();

// modelo modificado do site http://gabsferreira.com/alterando-a-validacao-padrao-do-html5/ mas infelizmente não era essa a solução.

const formInputLocal = document.querySelectorAll('.form-input');
for (let index = 0; index < formInputLocal.length; index += 1) {
  formInputLocal[index].oninvalid = function () {
    // remove mensagens de erro padrão
    this.setCustomValidity('');
    // faz a validação novamente
    if (!this.validity.valid) {
      // se estiver inválido, coloca a mensagem
      this.setCustomValidity('Campos inválidos');
    }
  };
}

const divFormulario = document.getElementById('formulario');
const divObg = document.getElementById('msg-obrigado');

function apagarDiv() {
  // muda a classe das divs pra elas não aparecerem
  divObg.className = '';
  divFormulario.className = 'display-none';
}

const btnSalvar = document.getElementById('facebook-register');
const form2Local = document.getElementsByClassName('form-group2');

function validar() {
  if ((document.getElementById('inputnome').value === '') || (document.getElementById('inputsobrenome').value === '') || (document.getElementById('inputcelular').value === '') || (document.getElementById('inputnovasenha').value === '') || (document.getElementById('inputnascimento').value === '')) {
    form2Local[0].firstChild.remove();
    form2Local[0].insertAdjacentHTML('afterbegin', 'Campos inválidos');
  } else {
    // insere os dados dos inputs em variáveis
    form2Local[0].firstChild.remove();
    apagarDiv();
    const firstName = document.getElementById('inputnome').value;
    const lastName = document.getElementById('inputsobrenome').value;
    const phoneEmail = document.getElementById('inputcelular').value;
    const birthdate = document.getElementById('inputnascimento').value;
    let gender = '';
    if (document.getElementById('feminino').checked === true) {
      gender = 'Feminino';
    } else if (document.getElementById('masculino').checked === true) {
      gender = 'Masculino';
    } else {
      gender = 'Personalizado';
    }
    divObg.insertAdjacentHTML('afterbegin', `<br><br> Olá, ${firstName} ${lastName}`);
    divObg.insertAdjacentHTML('beforeend', `<br><br> Celular / E-mail: ${phoneEmail}`);
    divObg.insertAdjacentHTML('beforeend', `<br><br> Data de Nascimento: ${birthdate}`);
    divObg.insertAdjacentHTML('beforeend', `<br><br> Gênero: ${gender}`);
  }
}

btnSalvar.addEventListener('click', validar);

document.getElementById('personalizado').addEventListener('click', function () {
  const newInput = document.createElement('input');
  newInput.name = 'gender-custom';
  newInput.placeholder = 'Gênero (opcional)';
  document.getElementById('generoOpcional').appendChild(newInput);
});
