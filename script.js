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
  const AllInputs = document.querySelectorAll('.right-content input');
  for (let index = 2; index < AllInputs.length; index += 1) {
    const input = AllInputs[index];
    if (input.value === '') {
      alert('Campos inválidos');
    }
  }
});
