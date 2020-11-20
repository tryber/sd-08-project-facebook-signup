const loginButton = document.getElementById('button-login');
const buttonRegister = document.getElementById('facebook-register');
const verify = document.querySelectorAll('.verify');
const radio = document.querySelectorAll('.radio');
const span = document.getElementById('invalid');
const register = document.getElementById('register');

function sendForm() {
  const emailPhone = document.getElementById('user-email-phone');
  alert(emailPhone.value);
}

loginButton.addEventListener('click', sendForm);

function verifyFilling(e) {
  for (let index = 0; index < verify.length; index += 1) {
    if (verify[index].value === '') {
      span.textContent = 'Campos inválidos';
    } else {
      register.textContent = 'Enviado!';
    }
  }
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
