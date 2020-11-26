const button = document.getElementById('button-login');
const label = document.getElementById('user-email-phone');
const cadastro = document.getElementById('cadastro');
const required = document.querySelectorAll('[required]');
const erro = document.createElement('section');
const erroButton = document.createElement('button');
const inputGenderCustom = document.getElementsByClassName('type-custom')[0];
const cadastroInput = cadastro.querySelectorAll('input');
const rightContent = document.querySelector('.right-content');
const radioButton = document.getElementsByName('gender');
function evaluatorGender() {
  for (let key in radioButton) {
    if (radioButton[key].checked) {
      return radioButton[key].value;
    }
  }
}
addEventListener('click', (event) => {
  if (event.target === button) {
    alert(label.value);
  } else if (event.target.id === 'facebook-register') {
    for (let key = 0; key < required.length; key += 1) {
      const input = required[key];
      if (input.required) {
        if (input.value === '') {
          erro.innerText = 'Campos inválidos';
          erro.className = 'campos-invalidos';
          erro.id = 'campos-invalidos';
          erroButton.innerText = 'OK';
          erroButton.id = 'erro-button';
          cadastro.appendChild(erro);
          erro.appendChild(erroButton);
        }
      }
    }
    rightContent.classList.add('fonteMaior');
    rightContent.innerText = `Olá ${cadastroInput[0].value} ${cadastroInput[1].value}
    Fone: ${cadastroInput[2].value}
    Data: ${cadastroInput[4].value}
    Genero: ${evaluatorGender()}`;
  } else if (event.target.id === 'erro-button') {
    erro.remove();
  } else if (event.target.id === 'custom-gender') {
    inputGenderCustom.style.display = 'flex';
  } else if (event.target.id === 'type-fem') {
    inputGenderCustom.style.display = 'none';
  } else if (event.target.id === 'type-masc') {
    inputGenderCustom.style.display = 'none';
  }
});
