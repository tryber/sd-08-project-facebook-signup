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
function checarFormulario(evento) {
  evento.preventDefault();
  const formulario = document.querySelector('.signup');
  if (!formulario.checkValidity()) {
    criarMensagemCamposInvalidos(formulario);
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
capturaEvento('#custom-gender', 'click', criaCampoPersonalizado);
