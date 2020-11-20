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

  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const phoneEmail = document.getElementById('phone-email').value;
  const birthdate = document.getElementById('birthdate').value;
  const selectedGender = document.querySelector('input[type="radio"]:checked');
  let gender;
  if (selectedGender.id === 'custom') {
    gender = document.getElementById('custom-gender').value;
  } else {
    gender = selectedGender.value;
  }

  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = '';
  const paragraph = document.createElement('p');
  paragraph.className = 'login-message';
  paragraph.innerHTML = `Olá, ${firstName} ${lastName}! <br> Você se cadastrou com o e-mail/telefone ${phoneEmail}, com data de nascimento ${birthdate} e se identifica como ${gender}`;
  rightContent.appendChild(paragraph);
});

const gender = document.querySelector('.gender');
gender.addEventListener('click', function () {
  const radioButtons = document.querySelectorAll('input[type="radio"]')[2];
  if (radioButtons.checked) {
    document.getElementById('custom-gender').style.display = 'block';
  } else {
    document.getElementById('custom-gender').style.display = 'none';
  }
});
