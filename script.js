function alertaLogin() {
  const email = document.querySelector('#user-email-phone');
  alert(email.value);
}

const botaoLogin = document.querySelector('#button-login');
botaoLogin.addEventListener('click', alertaLogin);

function checaValidacao() {
  const input = document.querySelectorAll('input');
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value.length === 0) {
      input[i].setCustomValidity('Campos inválidos');
    } else {
      input[i].setCustomValidity('');
    }
  }
}

const submit = document.querySelector('#facebook-register');
submit.addEventListener('click', checaValidacao);

/* function checaValidacao(e) {
  let nome = document.getElementById('nome');
  
  nome.addEventListener('input', function (event) {
    if (nome.value === "") {
      nome.setCustomValidity('Campos inválidos');
    } else {
      nome.setCustomValidity('');
    }
  })
}

let submit = document.querySelector('#facebook-register');
submit.addEventListener('click', checaValidacao); */
