function alerta() {
  const btn = document.getElementById('button-login');
  btn.addEventListener('click', function () {
    const email = document.getElementById('user-email-phone');
    alert(email.value);
  });
}
alerta();

const invalidMsg = document.querySelector('.mensagem-invalidos');

function showInvalidos() {
  invalidMsg.style.display = 'flex';
}

const allInputs = document.querySelectorAll('input[type=text], input[type=radio]');

function register(click) {
  for ( let index = 0; index < allInputs.length -1; index += 1 ) {
    if (allInputs[index].value === '') {
      showInvalidos();
      click.preventDefault();
    } else if (allInputs[index].checked === false) {
      showInvalidos();
      click.preventDefault();
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
}


document.querySelector('#facebook-register').addEventListener('click', register);
