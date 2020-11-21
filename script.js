function funcaoAlert() {
  alert(document.getElementById('user-email-phone').value);
}

document.getElementById('button-login').addEventListener('click', funcaoAlert);

const invalidMsg = document.querySelector('.mensagem-invalidos');

function showInvalidos() {
  invalidMsg.style.display = 'flex';
}

const allInputs = document.querySelectorAll('input[type=text], input[type=radio]');

document.querySelector('#facebook-register').addEventListener('click', function (event) {
  for (let i = 0; i < allInputs.length - 1; i += 1) {
    if (allInputs[i].value === '') {
      showInvalidos();
      event.preventDefault();
    } else if (allInputs[i].checked === false) {
      showInvalidos();
      event.preventDefault();
    } else {
      document.querySelector('.right-content').innerHTML = document.querySelector('.register-validation').innerHTML;
    }
  }
});

const radioInputs = document.querySelectorAll('input[type=radio]');

radioInputs[2].addEventListener('change', function () {
  if (radioInputs[2].checked === true) {
    document.querySelector('.custom').style.display = 'flex';
  }
});

radioInputs[1].addEventListener('change', function () {
  if (radioInputs[1].checked === true) {
    document.querySelector('.custom').style.display = 'none';
  }
});

radioInputs[0].addEventListener('change', function () {
  if (radioInputs[0].checked === true) {
    document.querySelector('.custom').style.display = 'none';
  }
});
