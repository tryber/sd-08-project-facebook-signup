const buttonLogin = document.getElementById('button-login');
const user = document.getElementById('user-email-phone');
buttonLogin.addEventListener('click', function () {
  alert(user.value);
});

const buttonRegister = document.getElementById('facebook-register');
const inputs = document.getElementsByClassName('inputs');
// const radio = document.querySelector('.radio');
buttonRegister.addEventListener('click', () => {
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value.length === 0) {
      document.querySelector('#campos-invalidos').innerHTML = 'Campos inválidos';
      return;
    }
  }
});

// const radio = document.getElementById('personalizado');
const paiDoRadio = document.getElementById('parent-radio');
addEventListener('input', (event) => {
  const radio = event.target;
  const ultimoInput = document.getElementById('marcado');
  if (radio.id === 'personalizado' && radio.checked) {
    const personalizar = document.createElement('input');
    personalizar.id = 'marcado';
    personalizar.name = 'gender-custom';
    personalizar.placeholder = 'Gênero';
    paiDoRadio.appendChild(personalizar);
  } else if (radio.className === 'radio') {
    paiDoRadio.removeChild(ultimoInput);
  }
});
