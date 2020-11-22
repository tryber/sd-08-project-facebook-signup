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
      const helloFullName = document.createElement('p');
      helloFullName.innerHTML = `Olá, ${allInputs[0].value} ${allInputs[1].value}`;
      const userEmail = document.createElement('p');
      userEmail.innerHTML = allInputs[2].value;
      const userBirthDate = document.createElement('p');
      userBirthDate.innerHTML = allInputs[3].value;
      const userGender = document.createElement('p');
      userGender.innerHTML = document.querySelector('input[type="radio"]:checked').value;
      const validationContainer = document.querySelector('.register-validation');
      validationContainer.innerHTML = '';
      validationContainer.appendChild(helloFullName);
      validationContainer.appendChild(userEmail);
      validationContainer.appendChild(userBirthDate);
      validationContainer.appendChild(userGender);
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
