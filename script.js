function entrar() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}
function loginCheck() {
  const btnEntrar = document.getElementById('button-login');
  btnEntrar.addEventListener('click', entrar);
}
loginCheck();

// modelo modificado do site http://gabsferreira.com/alterando-a-validacao-padrao-do-html5/ mas infelizmente não era essa a solução.

const formInputLocal = document.querySelectorAll('.form-input');
for (let index = 0; index < formInputLocal.length; index += 1) {
  formInputLocal[index].oninvalid = function () {
    // remove mensagens de erro padrão
    this.setCustomValidity('');
    // faz a validação novamente
    if (!this.validity.valid) {
      // se estiver inválido, coloca a mensagem
      this.setCustomValidity('Campos inválidos');
    }
  };
}

const btnSalvar = document.getElementById('facebook-register');
const form2Local = document.getElementsByClassName('form-group2');
btnSalvar.addEventListener('click', function () {
  form2Local[0].firstChild.remove();
  form2Local[0].insertAdjacentHTML('afterbegin', 'Campos inválidos');
});

// resolvido utilizando dados do site https://pt.stackoverflow.com/questions/65696/como-capturar-par%C3%A2metros-passados-pela-url-usando-javascript contudo, foi bem compreendido o funcionamento.

function obrigado() {
  let urlData = location.search.slice(1);
  let partes = urlData.split('&');
  let bancoDeDados = {};
  partes.forEach(function (parte) {
      let chaveValor = parte.split('=');
      let chave = decodeURIComponent(chaveValor[0]);
      let valor = decodeURIComponent(chaveValor[1]);
      bancoDeDados[chave] = valor;
  });

  form2Local[0].innerHTML = ("Olá, " + bancoDeDados['firstname'] + " " + bancoDeDados['lastname']);

  for (let index in bancoDeDados) {
    if (index === "firstname") {
      
    } else if (index === "lastname") {

    } else if (index === "password") {

    } else {
     form2Local[0].innerHTML += ('<br><br>' + index + ": " + bancoDeDados[index]);
    }
  }
}

function validar() {
  if ((document.getElementById('inputnome').value === '') || (document.getElementById('inputsobrenome').value === '') || (document.getElementById('inputcelular').value === '') || (document.getElementById('inputnovasenha').value === '') || (document.getElementById('inputnascimento').value === '')) {
    
  } else {
    localStorage.clear();
    localStorage.setItem('ok', 'valido');
  }
}

btnSalvar.addEventListener('click', validar);

function validado() {
  let valido = localStorage.getItem('ok');
  if (valido === 'valido') {
    obrigado();
  }
}

window.onload = function() {
  validado();
};
