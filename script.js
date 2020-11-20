const btnLogin = document.querySelector('#button-login');
const inputValue = document.querySelector('#user-email-phone');
btnLogin.addEventListener('click', function () {
  alert(inputValue.value);
});

const buttonCadastrar = document.querySelector('#facebook-register');
const form = document.querySelector('.form-user');
const right = document.querySelector('.right-content');

function cadastrar() {
  buttonCadastrar.addEventListener('click', function (event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('.form-user input[type=text],.box2 input[type=password]');
    let nome = inputs[0].value;
    let sobrenome = inputs[1].value;
    let email = inputs[2].value;
    let data = inputs[4].value;
    let genero = document.querySelector('input[type="radio"]:checked').value; 

    let resultadoUsuario = '';
    let p = document.createElement('p');
    for (let index = 0; index < inputs.length; index += 1) {
      const arrayInput = inputs[index];         
      if (arrayInput.value === '' || arrayInput.type === 'radio') {
        arrayInput.className = 'erro';
        arrayInput.placeholder = 'Campos inválidos';        
        p.innerText = 'Campos inválidos';        
      } else {
        arrayInput.className = '';
        resultadoUsuario += arrayInput.value;
        right.innerHTML = `<p>Olá, ${nome} ${sobrenome}</p> 
        <p>Email: ${email}</p>
        <p>Data de Nascimento: ${data}</p>
        <p>Gênero: ${genero}</p>`;
      }      
    }
    right.appendChild(p);    
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
