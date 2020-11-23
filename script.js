const btnLogin = document.querySelector('#button-login');
const inputValue = document.querySelector('#user-email-phone');
btnLogin.addEventListener('click', function () {
  alert(inputValue.value);
});
const buttonCadastrar = document.querySelector('#facebook-register');
const formUser = document.querySelector('.form-user');
function cadastrar() {
  buttonCadastrar.addEventListener('click', function (event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('.form-user input[type=text],.box2 input[type=password]');
    const nome = inputs[0].value;
    const sobrenome = inputs[1].value;
    const email = inputs[2].value;
    const data = inputs[4].value;
    const p = document.createElement('p');
    let resultado = '';
    const genero = document.querySelector('input[type="radio"]:checked').value;
    for (let index = 0; index < inputs.length; index += 1) {
      const arrayInput = inputs[index];
      if (arrayInput.value === '' || genero === '') {
        arrayInput.className = 'erro';
        p.innerText = 'Campos inválidos'; p.classList.add('field-invalid');
        resultado += 'Favor preencher o campo .\n';
      } else {
        arrayInput.className = '';
      }
      formUser.appendChild(p);
    }
    if (resultado === '') {
      formUser.innerHTML = `<div class="show-container-data"><p class="show-name">Olá, ${nome} ${sobrenome}</p> <p class="show-email">Email: ${email}</p> <p class="show-date">Data de Nascimento: ${data}</p> <p class="show-gender">Gênero: ${genero}</div>`;
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
  input.className = 'input-form-right';
  input.placeholder = 'Gênero (opcional)';
  genderContainer.append(input);
});
