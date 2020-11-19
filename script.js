const getEnter = document.querySelector('#button-login')
getEnter.addEventListener('click', sendAlert)

function sendAlert(e) {
  alert(document.getElementById('user-email-phone').value)
}
