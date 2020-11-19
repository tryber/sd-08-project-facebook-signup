
function alertLogin() {
  let button = document.getElementById('button-login');
  let emailPhone = document.getElementById('user-email-phone');
  button.addEventListener('click', function (){
    alert(emailPhone.innerText);
  });
}

