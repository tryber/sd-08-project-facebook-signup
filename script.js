const enterBtn = document.querySelector('.form-control');
const customGender = document.querySelector('#custom');
const formInputs = document.querySelectorAll('.signup-input');
const registerBtn = document.querySelector('#facebook-register');

enterBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const emailValue = document.getElementById('user-email-phone');
  alert(emailValue.value);
});


customGender.addEventListener('change', () => {
  const genderInput = document.querySelector('.gender-custom');
  genderInput.style.display = 'block';
});


registerBtn.addEventListener('click', (event) => {
  for (let index = 0; index < formInputs.length; index += 1) {
    if (formInputs[index].value === '') {
      event.preventDefault();
      formInputs[index].value = 'Campos inválidos';
    }
  }
});
