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
  const show = document.querySelectorAll('.show');
  // let radioValue;
  let bool = false;
  if (show[0].checked) {
    bool = true;
    // radioValue = show[0].value;
  } else if (show[1].checked) {
    bool = true;
    // radioValue = show[1].value;
  } else if (show[2].checked) {
    bool = true;
    // radioValue = show[2].value;
  } else {
    signupForm.appendChild(message);
  }

  if (bool === true) {
    for (let index = 0; index < formInputs.length; index += 1) {
      if (formInputs[index].value === '') {
        event.preventDefault();
        signupForm.appendChild(message);
      }
    }
  }
});
