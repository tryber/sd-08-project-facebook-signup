function capturaEvento(elementoHTML, tipoDoEvento, acaoDoEvento) {
  const elementoPai = document.querySelector(elementoHTML);
  elementoPai.addEventListener(tipoDoEvento, (eventoAlvo) => {
    acaoDoEvento(eventoAlvo);
  });
}
function alertarMensagem() {
  const emailUsuario = document.querySelector('#user-email-phone');
  if (emailUsuario.value) {
    alert(emailUsuario.value);
  } else {
    alert('Digite seu email ou telefone!');
  }
}
function criarMensagemCamposInvalidos(reference) {
  const msg = document.createElement('p');
  if (document.querySelector('.msg-campo-invalido') === null) {
    msg.innerText = 'Campos inválidos';
    msg.className = 'msg-campo-invalido';
    reference.insertBefore(msg, reference.firstChild);
  }
}
function inputValues() {
  const inputsCadastro = document.querySelectorAll('.signup input');
  const inputsValues = [];
  inputsCadastro.forEach((elemento) => {
    if ((elemento.type !== 'radio' && elemento.type !== 'password') || elemento.checked) {
      inputsValues.push(elemento.value);
    }
  });
  return inputsValues;
}
function criaMensagem(msg, position, datas) {
  let output = '';
  if (position === 0) {
    if (document.querySelector('.msg-cadastro-final') === null) {
      output = `Olá, ${datas[0]} ${datas[1]}`;
    }
  } else {
    output = msg;
  }
  return output;
}
function mensagemCadastro() {
  const rightContent = document.querySelector('.right-content');
  const userData = inputValues();
  rightContent.innerHTML = '';
  userData.forEach((data, key, datas) => {
    if (key !== 1) {
      const newUserElement = document.createElement('p');
      newUserElement.innerText += `${criaMensagem(data, key, datas)}`;
      newUserElement.className = 'msg-cadastro-final';
      rightContent.appendChild(newUserElement);
    }
  });
}
function checarFormulario(evento) {
  evento.preventDefault();
  const formulario = document.querySelector('.signup');
  if (!formulario.checkValidity()) {
    criarMensagemCamposInvalidos(formulario);
  } else {
    mensagemCadastro();
  }
}
function criaCampoPersonalizado() {
  const genderElemento = document.querySelector('.gender');
  if (!document.querySelector('#gender-custom')) {
    const campoPersonalizado = document.createElement('input');
    campoPersonalizado.setAttribute('type', 'text');
    campoPersonalizado.setAttribute('placeholder', 'Gênero(opcional)');
    campoPersonalizado.name = 'gender-custom';
    campoPersonalizado.id = 'gender-custom';
    genderElemento.parentElement
      .insertBefore(campoPersonalizado, genderElemento.nextElementSibling);
  }
}

capturaEvento('#facebook-register', 'click', checarFormulario);
capturaEvento('#button-login', 'click', alertarMensagem);
capturaEvento('#custom-gender-input', 'click', criaCampoPersonalizado);
