function alertLogin() {
  const button = document.getElementById('button-login');
  const emailPhone = document.getElementById('user-email-phone');
  button.addEventListener('click', function () {
    alert(emailPhone.value);
  });
}
alertLogin();

function addGenderText() {
  const personalizado = document.getElementById('personalizado');
  const genderText = document.createElement('input');
  genderText.name = 'gender-custom';
  genderText.placeholder = 'Gênero (opcional)';
  personalizado.addEventListener('click', function () {
    const genderFields = document.getElementById('gender-fields');
    genderFields.appendChild(genderText);
  });
}
addGenderText();

/*
function registerMessage() {
  const button = document.getElementById('facebook-register');
  button.addEventListener('click', function () {
    substituteFormContainer();
  });
}
registerMessage();
*/

function substituteFormContainer() {
  const rigthcontent = document.getElementById('rightcontent');
  const name = document.getElementById('nome').innerText;
  const sobrenome = document.getElementById('sobrenome').innerText;
  const phonemail = document.getElementById('phonemail').innerText;
  const birthdate = document.getElementById('birthdate').innerText;
  const mensagem = `Olá${name} ${sobrenome}\n ${phonemail}\n ${birthdate}`;
  rigthcontent.innerHTML = mensagem;
}

// setCustomValidity retirada do artigo: https://www.devmedia.com.br/html5-validator-validando-formularios-com-html5/28785
function validateForm() {
  const button = document.getElementById('facebook-register');
  button.addEventListener('click', function () {
    const input = document.querySelectorAll('.cadastro input');
    for (let index = 0; index < input.length; index += 1) {
      input[index].setCustomValidity('Campos inválidos');
    }
    for (let index = 0; index < input.length; index += 1) {
      if (input[index] === '') {
        break;
      }
    }
    substituteFormContainer();
  });
}
validateForm();
