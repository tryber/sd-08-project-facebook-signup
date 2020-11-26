function buttonLogin() {
  const button = document.querySelector('#button-login');
  button.addEventListener('click', function () {
    const email = document.querySelector('#user-email-phone').value;
    alert(email);
  });
}

buttonLogin();

document.getElementById('genderAll').addEventListener('click', (e) => {
  if (e.target.classList.contains('gender-sel')) {
    document.getElementById('genderText').classList.add('hidden');
    if (e.target.classList.contains('gender-personalized')) {
      document.getElementById('genderText').classList.remove('hidden');
    }
  }
});

document.querySelector('#facebook-register').addEventListener('click', () => {
  const rightContent = document.querySelector('.right-content');
  const firstName = document.querySelector('.firstName').value;
  const lastName = document.querySelector('.lastName').value;
  const phoneEmail = document.querySelector('.phone_email').value;
  const password = document.querySelector('.password').value;
  const birthdate = document.querySelector('.birthdate').value;
  const gender = document.querySelector('input[type="radio"]:checked').value;
  if (firstName===''||lastName===''||phoneEmail===''||password===''||birthdate==='') {
    if (document.querySelector('.invalid') === null) {
      const span = document.createElement('span');
      span.innerHTML = 'Campos inválidos';
      span.classList = 'invalid';
      document.querySelector('.form-register').appendChild(span);
    }
  } else {
    rightContent.innerHTML = '';
    rightContent.innerHTML = `Olá, ${firstName} ${lastName}, ${phoneEmail}, ${birthdate}, ${gender}`;
  }
});
