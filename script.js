const allInputs = document.querySelectorAll('.right-content input');

function mudarRightContainer() {
  const nome = allInputs[0].value;
  const sobrenome = allInputs[1].value;
  const email = allInputs[2].value;
  const data = allInputs[4].value;
  const genero = document.querySelector('input[type="radio"]:checked').value;

  const rightContainer = document.querySelector('.right-content');
  rightContainer.innerHTML = `
      <p>Olá, ${nome} ${sobrenome}</p>
      <p>Email: ${email}</p>
      <p>Data nascimento: ${data}</p>
      <p>Genero: ${genero}</p>
  `;
}

document.querySelector('#button-login').addEventListener('click', () => {
  alert(document.querySelector('#user-email-phone').value);
});

document.querySelector('#facebook-register').addEventListener('click', () => {
  for (let i = 0; i < allInputs.length - 1; i += 1) {
    if (allInputs[i].value === '') {
      return alert('Campos inválidos');
    }
  }
  mudarRightContainer();
  return null;
});

for (let i = 5; i < 7; i += 1) {
  allInputs[i].addEventListener('change', () => {
    if (allInputs[i].checked === true) {
      allInputs[8].style.display = 'none';
    }
  });
}
allInputs[7].addEventListener('change', () => {
  if (allInputs[7].checked === true) {
    allInputs[8].style.display = 'block';
  }
});
