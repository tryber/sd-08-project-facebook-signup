function funcaoAlert() {
  alert(document.getElementById('user-email-phone').value);
}

document.getElementById('button-login').addEventListener('click', funcaoAlert);

const textInputs = document.querySelectorAll('input[type=text]');

function showInvalidos() {
  document.querySelector('.mensagem-invalidos').style.display = 'block';
}

document.querySelector('#facebook-register').addEventListener('click', function (event) {
  for (let i = 0; i < textInputs.length - 1; i += 1) {
    if (textInputs[i].value === '') {
      showInvalidos();
      event.preventDefault();
    } else if (textInputs[i].value !== '') {
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
