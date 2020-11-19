const emailLogin = document.querySelector('#user-email-phone');
const btnLogin = document.querySelector('#button-login');
const paiPersonalizado = document.querySelector('#other').parentNode;
let personalizadoOn = 0;
btnLogin.addEventListener('click', () => {
  if (emailLogin.value !== '') alert(emailLogin.value);
});

function abrePersonalizado() {
  if (!personalizadoOn) {
    const newInput = document.createElement('input');
    newInput.placeholder = 'Digite seu Gênero';
    newInput.name = 'gender';
    newInput.id = 'newInput';
    paiPersonalizado.appendChild(newInput);
    personalizadoOn = 1;
  }
}

function fechaPersonalizado() {
  if (personalizadoOn) {
    const newInput = document.querySelector('#newInput');
    paiPersonalizado.removeChild(newInput);
    personalizadoOn = 0;
  }
}
const fecha = fechaPersonalizado;
const abre = abrePersonalizado;
if (personalizadoOn == 5) {
  fecha();
  abre();
}
// function erroCampos() {
//   const gender = document.querySelector('input[name="gender"]:checked');
//   if (gender === null || gender === undefined) {
//     alert('Campos inválidos: Gênero');
//   }
// }
// const nome = document.querySelector('#firstname');
// const sobrenome = document.querySelector('#lastname');
// const emailPhone = document.querySelector('#phone_email');
// const novasenha = document.querySelector('#password');
// const dataNascimento = document.querySelector('#birthdate');
// const btnCadastro = document.querySelector('#facebook-register');
// btnCadastro.addEventListener('click', () => {

// });
