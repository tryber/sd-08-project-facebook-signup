function sendAlert() {
  alert(document.getElementById('user-email-phone').value);
}

const getEnter = document.querySelector('#button-login');
getEnter.addEventListener('click', sendAlert);
