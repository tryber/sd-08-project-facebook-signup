function alertWrongPassword() {
  const buttonEnterFacebook = document.querySelector('#button-login');
  buttonEnterFacebook.addEventListener('click', function () {
    const urserMailOrPhone = document.querySelector('#user-email-phone').value;
    alert(urserMailOrPhone);
  });
}

alertWrongPassword();
