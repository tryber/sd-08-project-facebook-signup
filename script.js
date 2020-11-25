function buttonEnter() {
  const selectButton = document.getElementById('button-login');
  selectButton.addEventListener('click', () => {
    const selectValue = document.getElementById('user-email-phone').value;
    alert(selectValue);
  });
}
buttonEnter();

function validarForms() {
  const buttonCadastrar = document.querySelector('#facebook-register');
  buttonCadastrar.addEventListener('click', event => {
    event.preventDefault();
    const selectImputs = document.querySelectorAll('.create-account input');
    for (let index = 0; index < selectImputs.length; index += 1) {
      if (selectImputs[index].value === '') {
        const span = document.createElement('span');
        span.innerHTML = 'Campos inválidos';
        span.id = 'invalido';
        if (document.querySelector('#invalido') === null) {
          document.querySelector('.creat-account').appendChild(span);
          break;
        }
        break;
      }
    }

  });
}
validarForms();
