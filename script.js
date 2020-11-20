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
  const customInput = document.createElement('input');
  const formGroup = document.querySelector('#facebook-register').parentNode;
  customInput.type = 'text';
  customInput.name = 'gender-custom';
  customInput.className = 'gender-custom';
  customInput.placeholder = 'Gênero (opcional)';
  formGroup.insertBefore(customInput, formGroup.lastElementChild);
});


registerBtn.addEventListener('click', (event) => {
  for (let index = 0; index < formInputs.length; index += 1) {
    if (formInputs[index].value === '') {
      event.preventDefault();
      formInputs[index].value = 'Campos inválidos';
    }
  }
});
