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
    for (let i = 0; i < formsContent.length; i += 1) {
      if (formsContent[i].value === '') {
        formsContent[i].placeholder = 'Preencha este campo';
        document.getElementById('mensagem-campos-invalidos').innerHTML =
          'Campos inválidos';
        document.getElementById('mensagem-campos-invalidos').style.color =
          'red';
        event.preventDefault();
      }
    }
  });
}
formsCheck();

function personalizeCheck() {
  const personaBtn = document.getElementById('btn-personalizado');
  const gndrContent = document.querySelector('.gender-content');
  let newInput = document.createElement('input');
  newInput.type = 'text';
  gndrContent.addEventListener('change', function () {
    if (personaBtn.checked) {
      gndrContent.appendChild(newInput);
    } else if (gndrContent.contains(newInput)) {
      gndrContent.removeChild(newInput);
    }
  });
}
personalizeCheck();
