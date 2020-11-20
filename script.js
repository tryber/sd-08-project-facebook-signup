const btnLogin = document.querySelector('#button-login');
const inputValue = document.querySelector('#user-email-phone');
btnLogin.addEventListener('click', function () {
  alert(inputValue.value);
});

const buttonCadastrar = document.querySelector('#facebook-register');
const right = document.querySelector('.right-content');

function cadastrar() {
  buttonCadastrar.addEventListener('click', function (event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('.form-user input[type=text],.box2 input[type=password]');
    let resultado = '';
    let resultadoUsuario = '';
    for (let index = 0; index < inputs.length; index += 1) {
      const arrayInput = inputs[index];
      if (arrayInput.value === '') {
        arrayInput.className = 'erro';
        arrayInput.placeholder = 'Campos inválidos'; 
        resultado += `Campos inválidos ${arrayInput.name}.\n`;
      } else {
        arrayInput.className = '';
        resultadoUsuario += arrayInput.value;
      }
    }
    if (resultado !== '') {
      alert(resultado);
    } else {
      right.innerHTML = resultadoUsuario;     
    }
  });
}
cadastrar();

const genderContainer = document.querySelector('#gender-container');
const radioPersonalizado = document.querySelector('#pers');
radioPersonalizado.addEventListener('click', function () {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'opcional';
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
  genderContainer.append(input);
});
