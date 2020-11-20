window.onload = function (){
    const warning = document.getElementById('button-login');
    warning.addEventListener('click', function () {
    const emailPhone = document.getElementById('user-email-phone');
      alert(emailPhone.value);
    });
  };
function changeRightContainer() {
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const phoneEmail = document.getElementById('phone-email').value;
  const birthdate = document.getElementById('birthdate').value;
  const selectedGender = document.querySelector('input[type="radio"]:checked').value;

  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = `<p>Olá, ${firstName} ${lastName}!</p> <p>E-mail ou telefone: ${phoneEmail}</p> <p>Data de nascimento: ${birthdate}</p> <p>Gênero: ${selectedGender}</p>`;
}

const registerButton = document.getElementById('facebook-register');
registerButton.addEventListener('click', function (event) {
  event.preventDefault();
  const input = document.querySelectorAll('[required]');
  for (let index = 0; index < input.length; index += 1) {
    if (!input[index].value) {
      document.querySelector('.invalid').style.display = 'block';
      return;
    }
  }
  changeRightContainer();
});

const gender = document.querySelector('.gender');
gender.addEventListener('click', function () {
  const radioButtons = document.querySelectorAll('input[type="radio"]')[2];
  if (radioButtons.checked) {
    document.getElementById('gender-custom').style.display = 'block';
  } else {
    document.getElementById('gender-custom').style.display = 'none';
  }
});
