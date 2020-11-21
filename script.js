const botaoEntrar = document.getElementById('button-login');
const emailOuTelefone = document.getElementById('user-email-phone');

function alertaBotao() {
  alert(emailOuTelefone.value);
}
botaoEntrar.addEventListener('click', alertaBotao);

const genderPersonalized = document.getElementById('gender3');
const textSpace = document.getElementById('personalizedText');
genderPersonalized.addEventListener('click', function () {
  textSpace.style.visibility = 'visible';
});
const genderFemale = document.getElementById('gender1');
const genderMale = document.getElementById('gender2');
function removeGenderPersonalized() {
  textSpace.style.visibility = 'hidden';
}
genderFemale.addEventListener('click', removeGenderPersonalized);
genderMale.addEventListener('click', removeGenderPersonalized);

function changeContent() {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const emailPhone = document.getElementById('phone_email').value;
  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input[type=radio]:checked').value;

  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = `<p>Olá, ${firstname} ${lastname}</p>
<p>E-mail ou telefone: ${emailPhone}</p>
<p>Data de nascimento: ${birthdate}</p>
<p>Gênero: ${gender}</p>`;
}

const cadastro = document.getElementById('facebook-register');
const invalidos = document.getElementById('camposInvalidos');
const inputs = document.querySelectorAll('[required]');
function validaForm(event) {
  event.preventDefault();
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      return (invalidos.innerHTML = 'Campos inválidos');
    }
  }
  changeContent();
  return true;
}

cadastro.addEventListener('click', validaForm);
