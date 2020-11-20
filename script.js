function alerta() {
  const btn = document.getElementById('button-login');
  btn.addEventListener('click', function () {
    const email = document.getElementById('user-email-phone');
    alert(email.value);
  });
}
alerta();

let btnCadastreSe = document.getElementById('facebook-register');

btnCadastreSe.addEventListener('click', function(event) {
  event.preventDefault();
  let erros = '';
  let inputsText = document.querySelectorAll('input[type=text], input[type=radio], input[type=password]');
  for (let index = 0; index < inputsText.length; index++) {
    let input = inputsText[index];
    if (input.value === '') {      
      erros += `Campos inválidos\n`;
    }
  }
  if (erros !== '') {
    alert(erros);
  }  
});
