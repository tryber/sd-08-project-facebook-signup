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
