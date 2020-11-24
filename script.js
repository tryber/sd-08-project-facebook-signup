const enterButton = document.querySelector('#button-login');
enterButton.addEventListener('click', function () {
  const inputEmail = document.querySelector('#user-email-phone').value;
  alert(inputEmail);
});

const registerButton = document.querySelector('#facebook-register');
registerButton.addEventListener('click', function () {
  let somaValidacao = 0;
  const inputValidation = document.querySelectorAll('.validation');
  for (let input = 0; input < inputValidation.length; input += 1) {
    if (inputValidation[input].value === '' && registerButton.nextElementSibling === null) {
      const comunicate = document.createElement('p');
      comunicate.innerText = 'Campos inválidos';
      const forms = document.querySelector('body > main > div.right-content > div > form');
      forms.appendChild(comunicate);
      break;
    } else if (inputValidation[input].type === 'radio') {
      if (inputValidation[input].checked === true) {
        somaValidacao += 1;
      } else if (input === inputValidation.length - 1 &&
        registerButton.nextElementSibling === null) {
        const comunicate = document.createElement('p');
        comunicate.innerText = 'Campos inválidos';
        const forms = document.querySelector('body > main > div.right-content > div > form');
        forms.appendChild(comunicate);
      }
    } else {
      somaValidacao += 1;
    }
  }
  if (somaValidacao === inputValidation.length - 2) {
    const toReplace = document.querySelector('body > main > div.right-content > div');
    const rightContent = document.querySelector('body > main > div.right-content');
    const textName = document.createElement('p');
    textName.innerText = `Olá, ${inputValidation[0].value} ${inputValidation[1].value}`;
    rightContent.append(textName);
    const textEmail = document.createElement('p');
    textEmail.innerText = inputValidation[2].value;
    rightContent.append(textEmail);
    const textDate = document.createElement('p');
    textDate.innerText = inputValidation[4].value;
    rightContent.append(textDate);
    for (let input = 5; input <= 7; input += 1) {
      if (inputValidation[input].checked) {
        const textGender = document.createElement('p');
        textGender.innerText = inputValidation[input].value;
        rightContent.append(textGender);
      }
    }
    toReplace.parentElement.removeChild(toReplace);
  }
});

const customRadio = document.querySelector('#custom');
customRadio.addEventListener('click', function () {
  if (registerButton.previousElementSibling.name !== 'gender-custom') {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'gender-custom';
    newInput.placeholder = 'Gênero';
    newInput.className = 'validation';
    newInput.required = 'required';
    const forms = document.querySelector('body > main > div.right-content > div > form');
    forms.appendChild(newInput);
    forms.insertBefore(newInput, registerButton);
  }
});
