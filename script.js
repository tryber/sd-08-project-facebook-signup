const loginButton = document.getElementById('button-login');
const buttonRegister = document.getElementById('facebook-register');
const verify = document.querySelectorAll('.verify');
const span = document.getElementById('invalid');
const register = document.getElementById('register');
const femin = document.getElementById('feminino');
const mascun = document.getElementById('masculino');
const person = document.getElementById('gender-custom');

function sendForm() {
  const emailPhone = document.getElementById('user-email-phone');
  alert(emailPhone.value);
}

loginButton.addEventListener('click', sendForm);

function formConfirmation() {
  register.innerHTML = `Olá, ${verify[0].value} ${verify[1].value} ${verify[2].value} ${verify[4].value}`;
  if (femin.checked) {
    register.innerText += 'Feminino';
  }
  if (mascun.checked) {
    register.innerText += 'Masculino';
  }
  if (person.checked) {
    register.innerText += 'Personalizado';
  }
}

function verifyFilling(e) {
  let cont = 0;
  for (let index = 0; index < verify.length; index += 1) {
    if (verify[index].value === '') {
      span.textContent = 'Campos inválidos';
    } else {
      cont += 1;
    }
  }
  if (cont === verify.length) formConfirmation();
  e.preventDefault();
}

buttonRegister.addEventListener('click', verifyFilling);

addEventListener('change', function (e) {
  const gender = document.querySelector('.optional').style;
  if (e.target.id === 'gender-custom') {
    gender.display = 'inherit';
  } else {
    gender.display = 'none';
  }
});
