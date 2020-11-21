window.onload = function () {
  const buttonEnter = document.querySelector('#button-login');
  buttonEnter.addEventListener('click', function () {
    const emailPhone = document.querySelector('#user-email-phone');
    alert(emailPhone.value);
  });
};
