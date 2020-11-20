const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', function () {
  alert('Email ou telefone');
});

const buttonCadastrar = document.querySelector('#facebook-register');
const form = document.querySelector('.form-user');
const right = document.querySelector('.right-content');

function cadastrar() {
  buttonCadastrar.addEventListener('click', function (event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('.form-user input[type=text]');
    let resultado = '';
    let resultadoUsuario = '';
    for (let index = 0; index < inputs.length; index += 1) {
      const arrayInput = inputs[index];
      if (arrayInput.value === '') {
        arrayInput.className = 'erro';
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
      form.reset();
    }
  });
}
cadastrar();

const radioPersonalizado = document.querySelector('#pers');
const box4 = document.querySelector('.box4');
radioPersonalizado.addEventListener('click', function () {
  const input = document.createElement('input');
  input.type = 'radio';
  input.id = 'opcional';
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
  const label = document.createElement('label');
  label.for = 'opcional';
  label.innerHTML = 'Gênero (opcional)';
  box4.append(input);
  box4.append(label);
});