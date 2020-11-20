const botaoLogin = document.getElementById('button-login');
const entradaEmailTelefone = document.getElementById('user-email-phone');

botaoLogin.addEventListener('click', function () {
  alert(entradaEmailTelefone.value);
});

function otherGender() {
  const radio = document.getElementById('personal');
  radio.addEventListener('change', function () {
    const gender = document.createElement('input');
    const divGender = document.querySelector('.other-gender');
    if (radio.checked) {
      gender.type = 'text';
      gender.name = 'gender-custom';
      gender.placeholder = 'Gênero';
      divGender.appendChild(gender);
    }
  });
}
otherGender();
