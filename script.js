function alertEntrar() {
  const botao = document.getElementById('button-login');
  botao.addEventListener('click', function () {
    const emailTelefone = document.getElementById('user-email-phone');
    alert(emailTelefone.value);
  });
}
alertEntrar();

const inputGender = document.querySelector('#gender-custom');
const radioGender = document.querySelector('#per');

radioGender.addEventListener('change', () => {
  if (inputGender.style.display === '' || inputGender.style.display === 'none') {
    inputGender.style.display = 'block';
  } else {
    inputGender.style.display = 'none';
  }
});

function checkRadio() {
  if (inputGender.style.display === 'block') {
    inputGender.style.display = 'none';
  }
}

const mas = document.querySelector('#mas');
mas.addEventListener('change', checkRadio);

const fem = document.querySelector('#fem');
fem.addEventListener('change', checkRadio);

// const getAllInputs = getFormNewAccount.getElementsByTagName('input');
// const getFormNewAccount = document.querySelector('#register-form');

// function checkInputValues() {
//   for (let index = 0; index < getAllInputs.length; index += 1) {
//     if (getAllInputs[index].type === 'text' && getAllInputs[index].value === '' && getAllInputs[index].id !== 'gender-custom') {
//       p.innerHTML = 'Campos inválidos';
//       return false;
//     }
//   }
//   return true;
// }

// function checkRadioSelected() {
//   for (let index = 0; index < getAllInputs.length; index += 1) {
//     if (getAllInputs[index].type === 'radio' && getAllInputs[index].checked) {
//       return true;
//     }
//   }
//   return false;
// }

// function validateForm() {
//   const allInputFilled = checkInputValues();
//   const radioSelected = checkRadioSelected();

//   if (!allInputFilled || !radioSelected) {
//     p.innerHTML = 'Campos inválidos';
//     return false;
//   }

//   createNewUserInfo();
//   return false;
// }

// const requiredInputs = getFormNewAccount.querySelectorAll('[required]');

// function checkFieldsValidity() {
//   for (let index = 0; index < requiredInputs.length; index += 1) {
//     const currentInput = requiredInputs[index];
//     if (!currentInput.checkValidity()) {
//       alert("Campos inválidos!")
//       return;
//     }
//   }
// }