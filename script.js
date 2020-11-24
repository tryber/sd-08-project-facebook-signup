//  req 7 - criar alert para o botão;

const buttonEntrar = document.querySelector('#button-login');

function addAlert() {
  buttonEntrar.addEventListener('click', function () {
    const inputEmail = document.querySelector('#user-email-phone');
    alert(inputEmail.value);
  });
}
addAlert();

// validar input
const facebookRegister = document.querySelector('#facebook-register');
const message = document.querySelector('#validation-message');

facebookRegister.addEventListener('click', function () {
  const inputArray = document.querySelectorAll('.input-validation');
  for (let index = 0; index < inputArray.length; index += 1) {
    if (inputArray[index].value === '') {
      message.innerHTML = 'Campos inválidos';
      break;
    }
  }
});

// adiciona input pesonalizado
const divGender = document.querySelector('.gender');
const personalizadoGender = document.querySelector('#personalizado');

personalizadoGender.addEventListener('click', function () {
  const createInput = document.createElement('input');
  createInput.className = 'input-validation';
  createInput.name = 'gender-custom';
  createInput.placeholder = 'Gênero (opcional)';
  divGender.appendChild(createInput);
});

// req 20

function removeRightContent() {
  
}
removeRightContent();
// const toRemove = document.querySelector('.to-remove');
//   toRemove.remove();
//   const name = document.querySelector('name').value;
//   const email = document.querySelector('email').value;
//   const lastname = document.querySelector('lastname').value;
//   const birthdate = document.querySelector('birthdate').value;
//   const rightContent = document.querySelector('.right-content');
//   const createParagraph = document.createElement('p');
//   createParagraph.innerText = `Olá ${name} +  + lastname.innerTEXT + , seja bem vindo! segue informações de cadastro email: email, data de nascimento: birthdate`

//   rightContent.appendChild(createParagraph);




