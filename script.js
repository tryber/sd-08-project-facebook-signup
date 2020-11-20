const btnLogin = document.getElementById('button-login');
const emailTel = document.getElementById('user-email-phone');

btnLogin.addEventListener('click', function () {
  window.alert(emailTel.value);
});

const filedForms = document.getElementById('forms');
const btnSubmited = document.getElementById('facebook-register');

function showData() {
  const rightContent = document.getElementById('right-content');
  const ola = document.createElement('p');
  ola.innerText = `Olá, ${filedForms[0].value} ${filedForms[1].value}.`;

  const rightSize = rightContent.children.length;
  for (let pos = 0; pos < rightSize; pos += 1) {
    rightContent.removeChild(rightContent.firstElementChild);
  }
  rightContent.appendChild(ola);

  for (let index = 2; index < filedForms.length - 1; index += 1) {
    if (
      filedForms[index].type !== 'password' &&
      (filedForms[index].type !== 'radio' || filedForms[index].checked)
    ) {
      const p = document.createElement('p');
      p.innerText = `${filedForms[index].name}: ${filedForms[index].value}`;
      rightContent.appendChild(p);
    }
  }
}

btnSubmited.addEventListener('click', function (e) {
  e.preventDefault();
  if (!filedForms.checkValidity()) {
    const paragraph = document.getElementById('invalid-form');
    if (paragraph === null) {
      const parag = document.createElement('p');
      parag.id = 'invalid-form';
      parag.innerText = 'Campos inválidos';
      filedForms.appendChild(parag);
    }
  } else {
    showData();
  }
});

const personalizado = document.getElementById('personalizado');

function addInputGender() {
  const genderCustom = document.getElementById('gender-custom');
  if (genderCustom === null) {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'large';
    input.name = 'gender-custom';
    input.placeholder = 'Gênero (opcional)';
    input.id = 'gender-custom';
    filedForms.insertBefore(input, btnSubmited);
  }
}

personalizado.addEventListener('change', addInputGender);
