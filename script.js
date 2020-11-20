function funcaoAlert() {
  alert(document.getElementById('user-email-phone').value);
}

document.getElementById('button-login').addEventListener('click', funcaoAlert);


const allInputs = document.querySelectorAll('.right-content input');

document.querySelector('#facebook-register').addEventListener('click', function () {
  for (let i = 0; i < allInputs.length - 1; i += 1) {
    if (allInputs[i].value === '') {

      return;
    }
  }

});
