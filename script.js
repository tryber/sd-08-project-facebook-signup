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
        const span = document.createElement('span');
        span.innerHTML = 'Campos inválidos';
        span.id = 'invalido';
        span.style.color = 'red';
        if (document.querySelector('#invalido') === null) {
          document.querySelector('.cadastro').appendChild(span);
          break;
        }
        break;
      }
    }
  });
}
validateFields();

function addGender() {
  const radio = document.querySelectorAll('input[type=radio]');
  const divGender = document.querySelector('.genderOpcao');
  divGender.addEventListener('click', function () {
    if (radio[2].checked) {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = 'gender-custom';
      input.placeholder = 'Gênero (opcional)';
      input.id = 'genderPersonalizado'
      if (document.querySelector('#genderPersonalizado') === null) {
        divGender.appendChild(input);
      }
    }
  });
}
addGender();
