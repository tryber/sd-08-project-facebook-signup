const button = document.querySelector('#button-login');

button.addEventListener('click', function () {
  const emailTel = document.querySelector('#user-email-phone').value;
  alert(emailTel);
});
