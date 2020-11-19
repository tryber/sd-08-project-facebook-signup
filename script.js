const emailLogin = document.querySelector('#user-email-phone');
const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', () => {
  if (emailLogin.value !== '') alert(emailLogin.value);
});
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
