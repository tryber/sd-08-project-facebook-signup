const button = document.querySelector('#button-login');
const emailOrPhoneNumber = document.querySelector('#user-email-phone').value;

function formsAlert() {
  alert(emailOrPhoneNumber);
}

button.addEventListener('click', formsAlert);
