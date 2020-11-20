function capturaEvento(elementoHTML, tipoDoEvento, acaoDoEvento) {
  const elementoPai = document.querySelector(elementoHTML);
  elementoPai.addEventListener(tipoDoEvento, (eventoAlvo) => {
    acaoDoEvento(eventoAlvo.target);
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

capturaEvento('#button-login', 'click', alertarMensagem);
