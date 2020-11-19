const button = document.querySelector('#button-login');

function formsAlert() {
  const emailOrPhoneNumber = document.querySelector('#user-email-phone').value;
  alert(emailOrPhoneNumber);
}

button.addEventListener('click', formsAlert);
