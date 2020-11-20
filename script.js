function alerta() {
  const btn = document.getElementById('button-login');
  btn.addEventListener('click', function () {
    const email = document.getElementById('user-email-phone');
    alert(email.value);
  });
}
alerta();

const btnCadastreSe = document.getElementById('facebook-register');

btnCadastreSe.addEventListener('click', function (event) {
  event.preventDefault();
  let erros = '';
  const inputsText = document.querySelectorAll('input[type=text], input[type=radio], input[type=password]');
  for (let index = 0; index < inputsText.length; index += 1) {
    const input = inputsText[index];
    if (input.value === '') {
      erros += 'Campos inválidos';
    }
  }
  if (erros !== '') {
    alert(erros);
  }
});
