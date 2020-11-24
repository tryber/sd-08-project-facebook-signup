const button = document.getElementById('button-login');
const label = document.getElementById('user-email-phone');
const cadastro = document.getElementById('cadastro');
const required = document.querySelectorAll('[required]');
const erro = document.createElement('section');
const erroButton = document.createElement('button');
const inputGenderCustom = document.getElementsByClassName('type-custom')[0];
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
