function alertar() {
  const botao = document.getElementById('button-login');
  botao.addEventListener('click', function () {
    const email = document.getElementById('user-email-phone');
    alert(email.value);
  });
}
alertar();

const cadastro = document.getElementById('facebook-register');

cadastro.addEventListener('click', function (event) {
  event.preventDefault();
  if (document.querySelectorAll('p').length === 3) {
    document.querySelectorAll('form')[1].removeChild(document.querySelectorAll('p')[2]);
  }
  let erros = '';
  const inputs = document.querySelectorAll('input[type=text], input[type=password]');
  for (let i = 2; i < inputs.length; i += 1) {
    const input = inputs[i];
    if (input.value === '') {
      erros += 'Campos inválidos\n';
    }
  }
  if (erros !== '') {
      const p = document.createElement('p');
    p.innerHTML = 'Campos inválidos';
    document.querySelectorAll('form')[1].appendChild(p);
  } else {
    const nome = document.createElement('p');
    nome.innerHTML = `Olá, ${document.querySelectorAll('input')[2].value} ${document.querySelectorAll('input')[3].value}`;
    const email = document.createElement('p');
    email.innerHTML = document.querySelectorAll('input')[4].value;
    const aniversario = document.createElement('p');
    aniversario.innerHTML = document.querySelectorAll('input')[6].value;
    const genero = document.createElement('p');
    genero.innerHTML = document.querySelector('input[type="radio"]:checked').value;
    document.querySelector('.main-content').removeChild(document.querySelector('.right-content'));
    const newDiv = document.createElement('div');
    newDiv.className = 'right-content';
    document.querySelector('.main-content').appendChild(newDiv);
    newDiv.appendChild(nome);
    newDiv.appendChild(email);
    newDiv.appendChild(aniversario);
    newDiv.appendChild(genero);
  }
});

document.querySelector('#custom').addEventListener('click', function () {
  const newInput = document.createElement('input');
  newInput.name = 'gender-custom';
  newInput.placeholder = 'Gênero (opcional)';
  document.querySelector('.form-gender').appendChild(newInput);
});
