function entrar() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}

function loginCheck() {
  const btnEntrar = document.getElementById('button-login');
  btnEntrar.addEventListener('click', entrar);
}
loginCheck();

const rightContent = document.querySelector('.right-content');
const formsContent = rightContent.querySelectorAll('input');
function formsCheck() {
  const btnSubmit = document.getElementById('facebook-register');
  btnSubmit.addEventListener('click', function (event) {
    let verificaVazio = 0;
    for (let i = 0; i < formsContent.length; i += 1) {
      if (formsContent[i].value === '') {
        formsContent[0].placeholder = 'Preencha seu nome';
        formsContent[1].placeholder = 'Preencha seu sobrenome';
        formsContent[2].placeholder = 'Preencha celular ou e-mail';
        formsContent[3].placeholder = 'Preencha sua senha';
        formsContent[4].placeholder = 'Preencha seu nascimento';
        document.getElementById('mensagem-campos-invalidos').innerHTML =
          'Campos inválidos';
        document.getElementById('mensagem-campos-invalidos').style.color =
          'red';
        verificaVazio += 1;
        event.preventDefault();
      }
    }
    if (verificaVazio === 0) {
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const email = document.getElementById('email').value;
      const birthDate = document.getElementById('birth-date').value;
      let genderValue = '';
      const btnMasculino = document.getElementById('btn-masculino');
      const btnFeminino = document.getElementById('btn-feminino');
      const btnPersonalizado = document.getElementById('btn-personalizado');
      if (btnMasculino.checked) {
        genderValue = btnMasculino.value;
      } else if (btnFeminino.checked) {
        genderValue = btnFeminino.value;
      } else if (btnPersonalizado.checked) {
        genderValue = btnPersonalizado.value;
      }
      let rightSide = document.querySelector('.right-content');
      rightSide.innerHTML = '';
      let rightSideText = document.createElement('h1');
      const text = 'Nome: ' + firstName + ' Sobrenome: ' + lastName +  '\nEmail ou Telefone: ' + email + '\nData de Nascimento: ' + birthDate + '\nGênero: ' + genderValue
      let rightSideTextContent = document.createTextNode(text);
      rightSideText.appendChild(rightSideTextContent);
      rightSide.appendChild(rightSideText);
      event.preventDefault();
    }
  });
}
formsCheck();

function personalizeCheck() {
  const personaBtn = document.getElementById('btn-personalizado');
  const gndrContent = document.querySelector('.gender-content');
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'gender-custom';
  newInput.placeholder = 'Gênero (opcional)';
  gndrContent.addEventListener('change', function () {
    if (personaBtn.checked) {
      gndrContent.appendChild(newInput);
    } else if (gndrContent.contains(newInput)) {
      gndrContent.removeChild(newInput);
    }
  });
}
personalizeCheck();


/* const btnSubmit = document.getElementById('facebook-register');
btnSubmit.addEventListener('click', function changeForm() {
  alert('sumitado');
})
 */
