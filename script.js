/*function userAlert() {
  const loginBtn = document.querySelector('#button-login');
  const userLogin = document.querySelector('#user-email-phone');

  loginBtn.addEventListener('click', function () {
    alert(userLogin.value);
  });
}
userAlert();*/

function alertar() {
  let botao = document.getElementById('button-login');
  botao.addEventListener('click', function () {
    let email = document.getElementById('user-email-phone');
    alert(email.value);
  });
}
alertar();

let cadastro = document.getElementById('facebook-register');

cadastro.addEventListener('click', function (event) {
  event.preventDefault();
  if (document.querySelectorAll('p').length === 3) {
    document.querySelectorAll('form')[1].removeChild(document.querySelectorAll('p')[2]);
  }
  let erros = '';
  let inputs = document.querySelectorAll('input[type=text], input[type=password]');
  for (let i = 2; i < inputs.length; i += 1) {
    let input = inputs[i];
    if (input.value === '') {
      erros += 'Campos inválidos\n';
    }
  }
  if (erros !== '') {    
    let p = document.createElement('p');
    p.innerHTML = 'Campos inválidos';
    document.querySelectorAll('form')[1].appendChild(p);
  } else {
    let nome = document.createElement('p');
    nome.innerHTML = `Olá, ${document.querySelectorAll('input')[2].value} ${document.querySelectorAll('input')[3].value}`;
    let email = document.createElement('p');
    email.innerHTML = document.querySelectorAll('input')[4].value;
    let aniversario = document.createElement('p');
    aniversario.innerHTML = document.querySelectorAll('input')[6].value;
    let genero = document.createElement('p');
    genero.innerHTML = document.querySelector('input[type="radio"]:checked').value;
    document.querySelector('.main-content').removeChild(document.querySelector('.right-content'));
    let newDiv = document.createElement('div');
    newDiv.className = 'right-content';
    document.querySelector('.main-content').appendChild(newDiv);
    newDiv.appendChild(nome);
    newDiv.appendChild(email);
    newDiv.appendChild(aniversario);
    newDiv.appendChild(genero);
  }
});

document.querySelector('#custom').addEventListener('click', function () {
  let newInput = document.createElement('input');
  newInput.name = 'gender-custom';
  newInput.placeholder = 'Gênero (opcional)';
  document.querySelector('.form-gender').appendChild(newInput);
});