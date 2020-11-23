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
  const name = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const phonemail = document.getElementById('phonemail').value;
  const birthdate = document.getElementById('birthdate').value;
  const mensagem = `Olá, ${name} ${sobrenome}\n`;
  const mensagemTwo = document.createElement('span');
  mensagemTwo.innerText= `${phonemail}\n${birthdate}`;  
  rigthcontent.innerHTML = mensagem;
  rigthcontent.appendChild(mensagemTwo);
}

function validateForm() {
  const paragraph = document.createElement('p');
  const invalidField = 'Campos inválidos';
  paragraph.innerText = invalidField;
  const form = document.getElementById('register');
  const button = document.getElementById('facebook-register');
  let mistakes = 0;
  button.addEventListener('click', function (event) { 
  event.preventDefault();   
  const input = document.querySelectorAll('.cadastro input[type="text"]');    
  for (let index = 0; index < input.length; index += 1) {
    if (input[index].value === '') {
      mistakes = mistakes + 1;
    };
  }  
  if (mistakes != 0) {
    form.appendChild(paragraph);
  } else {
    substituteFormContainer();
  }
});
}
validateForm();
// Ideia da variavel mistakes veio de uma dica da Rosiele.
