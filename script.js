function funcaoAlert() {
  alert(document.getElementById('user-email-phone').value);
}

document.getElementById('button-login').addEventListener('click', funcaoAlert);

const allInputs = document.querySelectorAll('.right-content input');

function showInvalidos() {
  document.querySelector('.mensagem-invalidos').style.display = 'block';
}

document
  .querySelector('#facebook-register')
  .addEventListener('click', function (event) {
    for (let i = 0; i < allInputs.length - 1; i += 1) {
      if (allInputs[i].value === "") {
        showInvalidos();
        event.preventDefault();
      }
    }
  });

allInputs[7].addEventListener('change', function () {
  if (allInputs[7].checked === true) {
    document.querySelector('.custom').style.display = 'flex';
  }
});

allInputs[6].addEventListener('change', function () {
  if (allInputs[6].checked === true) {
    document.querySelector('.custom').style.display = 'none';
  }
});

allInputs[5].addEventListener('change', function () {
  if (allInputs[5].checked === true) {
    document.querySelector('.custom').style.display = 'none';
  }
});
