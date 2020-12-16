function alerta() {
  const btn = document.getElementById('button-login');
  btn.addEventListener('click', function () {
      const email = document.getElementById('user-email-phone');
      alert(email.value);
    });
}
alerta();

const invalidMsg = document.querySelector('.mensagem-invalidos');

function showInvalidos() {
  invalidMsg.style.display = 'flex';
}

const allInputs = document.querySelectorAll('input[type=text], input[type=radio]');

function register(click) {
  for (let index = 0; index < allInputs.length -1; index += 1) {
    if (allInputs[index].value === '') {
      showInvalidos();
      click.preventDefault();
    }
  }
}

document.querySelector('#facebook-register').addEventListener('click', register);
