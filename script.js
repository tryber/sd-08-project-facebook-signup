const enterBtn = document.querySelector('.form-control');
const customGender = document.querySelector('#custom');
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
  customInput.className = 'gender-custom signup-input';
  customInput.placeholder = 'Gênero (opcional)';
  formGroup.insertBefore(customInput, formGroup.lastElementChild);
});

registerBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const formInputs = document.querySelectorAll('.signup-input');
  const message = document.createElement('p');
  const signupForm = document.getElementById('form-signup');
  message.innerText = 'Campos inválidos';
  for (let index = 0; index < formInputs.length; index += 1) {
    if (formInputs[index].value === '') {
      event.preventDefault();
      signupForm.appendChild(message);
    }
  }
  const show = document.querySelectorAll('.show');
  for (let x = 0; x < show.length; x += 1) {
    if (show[x].checked) {
      console.log(show[x].value);
    }
  }
});
