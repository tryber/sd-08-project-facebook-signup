const btnEntrar = document.getElementById('button-login');
const btnCadastre = document.getElementById('facebook-register');
const divMensagemInvalida = document.getElementById('mensagem-invalida');
const divGenero = document.getElementById('genero');
const txtEmail = document.getElementById('user-email-phone');
const rbFeminino = document.getElementById('Feminino');
const rbMasculino = document.getElementById('Masculino');
const rbPersonalizado = document.getElementById('Personalizado');
const txtPrimeiroNome = document.getElementsByName('firstname');
const txtUltimoNome = document.getElementsByName('lastname');
const txtCelularOuEmail = document.getElementsByName('phone_email');
const txtDataNascimento = document.getElementsByName('birthdate');

function alertConteudoEmail() {
  alert(txtEmail.value);
}

btnEntrar.addEventListener('click', alertConteudoEmail);

function alterarRightContainer() {
  const firstName = txtPrimeiroNome[0].value;
  const lastName = txtUltimoNome[0].value;
  const phoneEmail = txtCelularOuEmail[0].value;
  const birthdate = txtDataNascimento[0].value;
  let gender;

  if (rbFeminino.checked) {
    gender = rbFeminino.value;
  } else if (rbMasculino.checked) {
    gender = rbMasculino.value;
  } else {
    gender = rbPersonalizado.value;
  }

  const rightContainer = document.querySelector('.right-content');

  rightContainer.innerHTML = `<p>Olá, ${firstName} ${lastName}</p><p>Celular ou E-mail: ${phoneEmail}</p><p>Data de nascimento: ${birthdate}</p><p>Genero: ${gender}</p>`;
}

function validaCadastro(event) {
  event.preventDefault();
  const camposValidacao = document.querySelectorAll('.validator');
  for (let campo = 0; campo < camposValidacao.length; campo += 1) {
    if (camposValidacao[campo].value === '') {
      divMensagemInvalida.style.display = 'block';
      return;
    }
  }
  alterarRightContainer();
}

btnCadastre.addEventListener('click', validaCadastro);

function addCustomField() {
  if (rbPersonalizado.checked) {
    divGenero.style.display = 'flex';
  }
}

rbPersonalizado.addEventListener('change', addCustomField);
