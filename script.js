const loginButton = document.getElementById('button-login');

function sendForm() {
  const emailPhone = document.getElementById('user-email-phone');
  alert(emailPhone.value);
}

loginButton.addEventListener('click', sendForm);
