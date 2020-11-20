function alertEntrar() {
  const botao = document.getElementById('button-login');
  botao.addEventListener('click', function () {
    const emailTelefone = document.getElementById('user-email-phone');
    alert(emailTelefone.value);
  });
}
alertEntrar();

const inputGender = document.querySelector('#gender-custom');
const radioGender = document.querySelector('#per');

radioGender.addEventListener('change', () => {
  if (inputGender.style.display === '' || inputGender.style.display === 'none') {
    inputGender.style.display = 'block';
  } else {
    inputGender.style.display = 'none';
  }
});

function checkRadio() {
  if (inputGender.style.display === 'block') {
    inputGender.style.display = 'none';
  }
}

const mas = document.querySelector('#mas');
mas.addEventListener('change', checkRadio);
const fem = document.querySelector('#fem');
fem.addEventListener('change', checkRadio);

function welcome() {
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const birthdate = document.getElementById('birthdate').value;
  const phoneEmail = document.getElementById('phone_email').value;
  const gender = document.querySelectorAll('input:checked');
  const welcomeUser = `Olá, ${firstName} ${lastName}, você é do sexo: ${gender[0].value} e seu email/fone é :  ${phoneEmail} e seu aniversario é: ${birthdate}`;
  const contentReturn = document.querySelector('.right-content');
  for (let index = 0; index < contentReturn.children.length; index += 1) {
    contentReturn.children[index].style.display = 'none';
  }
  contentReturn.innerHTML = welcomeUser;
}
const male = document.querySelector('#mas');
male.addEventListener('change', checkRadio);
const female = document.querySelector('#fem');
female.addEventListener('change', checkRadio);
const cadast = document.querySelector('#facebook-register');
cadast.addEventListener('click', () => {
  const formsValue = document.querySelectorAll('#register-form')[0];
  const input = document.querySelectorAll('input:checked');
  let ok;
  for (let i = 0; i < 5; i += 1) {
    if (input.length < 1 ||
  (inputGender.style.display === 'block' && inputGender.value === '')
  || formsValue[i].value === '') {
      document.querySelector('.chec-return').style.display = 'block';
    } else {
      ok = true;
    }
  }
  if (ok) {
    welcome();
  }
});
