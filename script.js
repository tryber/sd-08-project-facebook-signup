const button = document.querySelector('#button-login');

button.addEventListener('click', () => {
  const emailTel = document.querySelector('#user-email-phone').value;
  alert(emailTel);
});

const buttonRegister = document.querySelector('#facebook-register');

buttonRegister.addEventListener('click', (event) => {
  event.preventDefault();
  const nome = document.getElementById('nome');
  const sobreNome = document.getElementById('sobrenome');
  const email = document.getElementById('email');
  const birthdate = document.getElementById('birthdate');
  const genero = document.getElementsByName('gender');
  const rightContent = document.querySelector('.right-content').children[2];
  const div = document.querySelector('.erro');

  if (nome.value === '' || sobreNome.value === '' || email.value === '' || birthdate.value === '') {
    div.innerText = 'Campos inválidos';
  } else {
    for (let index = 0; index < genero.length; index += 1) {
      if (genero[index].checked) {
        rightContent.innerText = `Olá, ${nome.value} ${sobreNome.value}

        Celular ou email: ${email.value}
        Data de Nascimento: ${birthdate.value}
        Genero: ${genero[index].value}
        `;
      }
    }
  }
});

const personalizado = document.getElementsByName('gender');
const newField = document.querySelector('.new-field');
const campoPersonalizado = document.createElement('input');
campoPersonalizado.id = 'input-personalizado';
campoPersonalizado.name = 'gender-custom';
campoPersonalizado.placeholder = 'Gênero (opcional)';

for (let index = 0; index < personalizado.length; index += 1) {
  personalizado[index].addEventListener('click', () => {
    if (personalizado[index].id === 'personalizado') {
      newField.appendChild(campoPersonalizado);
    }
  });
}
