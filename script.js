function btnLogin() {
  const btnEntrar = document.querySelector('#button-login');
  const textLogin = document.querySelector('#user-email-phone');
  btnEntrar.addEventListener('click', function () {
    alert(textLogin.value);
  });
}
btnLogin();

function validateFields() {
  const btnCadastrar = document.querySelector('#facebook-register');
  btnCadastrar.addEventListener('click', function (event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('.cadastro input');
    for (let index = 0; index < inputs.length; index += 1) {
      if (inputs[index].value === '') {
        const p = document.createElement('p');
        p.innerHTML = 'Campos inválidos';
        document.querySelector('.cadastro').appendChild(p);
        break;
      }
    }
  });
}
validateFields();
