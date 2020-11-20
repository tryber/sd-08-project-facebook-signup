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

function substituteFormContainer() {
  const rigthcontent = document.getElementById('rightcontent');
  const name = document.getElementById('nome').innerText;
  const sobrenome = document.getElementById('sobrenome').innerText;
  const phonemail = document.getElementById('phonemail').innerText;
  const birthdate = document.getElementById('birthdate').innerText;
  const mensagem = `Olá, ${name} ${sobrenome}\n`;
  const mensagemTwo = `${phonemail}\n${birthdate}`;
  rigthcontent.innerHTML = mensagem;
  rigthcontent.appendChild(mensagemTwo);
}

function registerMessage() {
  const form = document.getElementById('register');
  form.addEventListener('submit', function () {
    substituteFormContainer();
  });
}

// setCustomValidity retirada do artigo: https://www.devmedia.com.br/html5-validator-validando-formularios-com-html5/28785
function validateForm() {
  const invalidField = 'Campos inválidos';
  const form = document.getElementById('register');
  const button = document.getElementById('facebook-register');
  button.addEventListener('click', function () {
    const input = document.querySelectorAll('.cadastro input');
    for (let index = 0; index < input.length; index += 1) {
      input[index].setCustomValidity('Campos inválidos');
      if (input[index] === '') {
        form.appendChild(invalidField);
      }
    }
    registerMessage();
  });
}
validateForm();
