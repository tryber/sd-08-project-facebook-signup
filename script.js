let allInputs = document.querySelectorAll('.right-content input');

document.querySelector('#button-login').addEventListener('click', () => {
  alert(document.querySelector('#user-email-phone').value);
});

document.querySelector('#facebook-register').addEventListener('click', () => {
  for (let i = 0; i < allInputs.length - 1; i++) {
    if (allInputs[i].value === '') {
      return alert('Campos inválidos');
    }
  }
  mudarRightContainer();
});

for (let i = 5; i < 7; i++) {
  allInputs[i].addEventListener('change', () => {
    if ((allInputs[i].checked = true)) {
      allInputs[8].style.display = 'none';
    }
  });
}
allInputs[7].addEventListener('change', () => {
  if ((allInputs[7].checked = true)) {
    allInputs[8].style.display = 'block';
  }
});

function mudarRightContainer() {
  let nome = allInputs[0].value;
  let sobrenome = allInputs[1].value;
  let email = allInputs[2].value;
  let data = allInputs[4].value;
  let genero = document.querySelector('input[type="radio"]:checked').value;

  let rightContainer = document.querySelector('.right-content');
  rightContainer.innerHTML = `
      <p>Olá, ${nome} ${sobrenome}</p>
      <p>Email: ${email}</p>
      <p>Data nascimento: ${data}</p>
      <p>Genero: ${genero}</p>
  `;
}
