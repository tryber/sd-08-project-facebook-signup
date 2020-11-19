const emailLogin = document.querySelector('#user-email-phone');
const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', (e) => {
  if (emailLogin.value != '')  alert(emailLogin.value);
});
function erroCampos(var1) {
  const gender = document.querySelector('input[name="gender"]:checked');
  console.log(var1);
  if (gender === null || gender === undefined) {
    alert('Campos inválidos: Gênero');
  }
}
const nome = document.querySelector('#firstname');
const sobrenome = document.querySelector('#lastname');
const emailPhone = document.querySelector('#phone_email');
const novasenha = document.querySelector('#password');
const dataNascimento = document.querySelector('#birthdate');
console.log(nome.value, sobrenome.value, emailPhone.value, novasenha.value, dataNascimento.value);
const campos = [nome.value, sobrenome.value, emailPhone.value, novasenha.value, dataNascimento.value]
const btnCadastro = document.querySelector('#facebook-register');
btnCadastro.addEventListener('click', (e) => {
  erroCampos(campos);
});
