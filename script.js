const button = document.getElementById('button-login');
const label = document.getElementById('user-email-phone');

button.addEventListener('click', function () {
  alert(label.value);
});
