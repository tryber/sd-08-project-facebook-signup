

function buttonEnter() {
  const selectButton = document.getElementById('button-login');
  selectButton.addEventListener('click', () => {
    const selectValue = document.getElementById('user-email-phone').value;
    alert(selectValue);
  });
}
buttonEnter();
function validarCampos() {
  const buttonCadastrar = document.querySelector('#facebook-register');
  buttonCadastrar.addEventListener('click', (event) => {
    event.preventDefault();
    const selectInput = document.querySelectorAll('.create-account input');
    for (let index = 0; index < selectInput.length; index += 1) {
      const input = selectInput[index];
      if (input.value === '') {
        const span = document.createElement('span');
        span.innerText = 'Campos inválidos';
        span.id = 'span-validator';
        if (document.querySelector('#span-validator') === null) {
          document.querySelector('.create-account').appendChild(span);
        break;
        }
        break;
      }
      }
  });
}
validarCampos();
