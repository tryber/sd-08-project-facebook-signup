const registerButton = document.getElementById('facebook-register');
registerButton.addEventListener('click', function (event) {
  event.preventDefault();
  const input = document.querySelectorAll('[required]');
  for (let index = 0; index < input.length; index += 1) {
    if (!input[index].value) {
      alert('Campos inválidos');
      return;
    }
  }
});

const gender = document.querySelector('.gender');
gender.addEventListener('click', function (event) {
  const radioButtons = document.querySelectorAll('input[type="radio"]')[2];
  if (radioButtons.checked) {
    document.getElementById('custom-gender').style.display = 'block';
  } else {
    document.getElementById('custom-gender').style.display = 'none';
  }
});
