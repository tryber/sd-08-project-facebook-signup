const loginButton = document.getElementById('button-login');
const buttonRegister = document.getElementById('facebook-register');
const verify = document.querySelectorAll('.verify');
const radio = document.querySelectorAll('.radio');
const formRegister = document.getElementById('register');
const span = document.getElementById('invalid');

function sendForm() {
  const emailPhone = document.getElementById('user-email-phone');
  alert(emailPhone.value);
}

loginButton.addEventListener('click', sendForm);

function verifyFilling(e) {
  for (let index = 0; index < verify.length; index += 1) {
    const input = verify[index].value;
    if (verify[index].value == '') span.textContent = 'Campos inválidos';
  }
  radio[0].checked || radio[1].checked || radio[2].checked ?
  span.textContent :
  span.textContent = 'Campos inválidos';
  e.preventDefault();
}

buttonRegister.addEventListener('click', verifyFilling);
