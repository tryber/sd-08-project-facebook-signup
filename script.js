function logInButton() {
  const alertText = document.getElementById('user-email-phone').innerHTML;
  alert(alertText);
}

const logInClick = document.getElementById('button-login');
logInClick.addEventListener('click', logInButton);
