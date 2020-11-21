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

capturaEvento('#facebook-register', 'click', checarFormulario);
capturaEvento('#button-login', 'click', alertarMensagem);
