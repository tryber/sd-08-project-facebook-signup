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
  const botao = document.getElementById('facebook-register');
  const validacao = document.getElementById('invalideField');
  botao.addEventListener('click', function (event) {
    for (let index = 2; index < formList.length - 3; index += 1) {
      const valorCampos = formList[index].value;
      if (valorCampos === '') {
        validacao.textContent = 'Campos Inválidos';
        event.preventDefault();
        console.log(validacao)
      }
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
