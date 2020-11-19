const alertButton = document.getElementById('button-login');
const userInput = document.getElementById('user-email-phone');

function alertLogin() {
  if (userInput.value === '') {
    alert('Usuário inválido!');
  } else {
    alert(userInput.value);
  }
}

alertButton.addEventListener('click', alertLogin);
