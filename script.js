const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', function () {
  const userEmailPhone = document.getElementById('user-email-phone');
  alert(userEmailPhone.value);
});

const buttonRegister = document.getElementById('facebook-register');

buttonRegister.addEventListener('click', () => {
  const input = document.getElementsByClassName('input');
  const gender = document.getElementsByClassName('gender');
  const error = document.querySelector('.invalid-input');
  let helper = false;

  for (let i = 0; i < gender.length; i += 1) {
    if (gender[i].checked) {
      helper = true;
      break;
    }
  }

  if (!helper) {
    error.style.display = 'block';
  }

  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value === '') {
      error.style.display = 'block';
      break;
    }
  }
});
