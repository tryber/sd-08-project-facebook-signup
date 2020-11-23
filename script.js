function alerta() {
  const botao = document.getElementById('button-login');
  botao.addEventListener('click', function () {
    const email = document.getElementById('user-email-phone');
    alert(email.value);
  });
}
alerta();

function validate() {
  const formList = document.querySelectorAll('input');
  let contador = true;
  const botao = document.getElementById('facebook-register');
  const validacao = document.getElementById('validacao');
  botao.addEventListener('click', function (event) {
    for (let index = 2; index < formList.length - 3; index += 1) {
      const valorCampos = formList[index].value;
      if (valorCampos === '') {
        validacao.innerText = 'Campos inválidos';
        event.preventDefault();
        contador = false;
      }
    }
    if (contador) {
      const nome = document.querySelector('#name').value;
      const lastname = document.querySelector('#lastname').value;
      const birthdate = document.querySelector('#birthdate').value;
      const email = document.querySelector('#email').value;
      const gender = document.querySelector('input[type="radio"]:checked').value;
      const right = document.querySelector('.right-content');
      right.innerHTML = `Olá, ${nome} ${lastname}, ${email}, ${birthdate}, ${gender}`;
    }
  });
}
validate();

const personal = document.getElementById('personal');
personal.addEventListener('click', function () {
  if (personal.checked === true) {
    const inputPersonal = document.createElement('input');
    inputPersonal.className = 'input-personal';
    inputPersonal.type = 'text';
    inputPersonal.placeholder = 'Gênero (opcional)';
    inputPersonal.name = 'gender-custom';
    document.querySelector('.container-input').appendChild(inputPersonal);
  }
});