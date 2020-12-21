const button = document.getElementById('button-login');
const login = document.getElementById('user-email-phone');

button.addEventListener('click', function () {
  alert(login.value);
});

/* function checkInputs() {
  const input = document.querySelectorAll('.checked')

  input.forEach(param => {
    if (param.value == '') {
      document.querySelector('p').style.display = 'block'
    }
  })
};

document.querySelector('#facebook-register').addEventListener('click', checkInputs); */

document.querySelector('#personalized').addEventListener('click', () => {
  const customGender = document.createElement('input');
  customGender.type = 'text';
  customGender.name = 'gender-custom';
  customGender.placeholder = 'Gênero (opcional)';
  document.querySelector('.gender').appendChild(customGender);
});
