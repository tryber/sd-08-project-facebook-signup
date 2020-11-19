const buttonID = document.getElementsByClassName('button-login')[0];

buttonID.addEventListener('click', function () {
  const inputValue = document.getElementById('user-email-phone').value;

  alert(inputValue);
});
