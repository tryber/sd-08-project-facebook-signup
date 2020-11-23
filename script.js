function alertEmail() {
  const button = document.querySelector('#button-login');

  button.addEventListener('click', function () {
    const emailPhone = document.querySelector('#user-email-phone').value;
    alert(emailPhone);
  });
}

alertEmail();

function createTagP(value) {
  const tagP = document.createElement('p');
  tagP.innerText = value;
  return tagP;
}

function replaceDiv(event) {
  event.preventDefault();
  const forms = document.querySelectorAll('.form-register input');
  const divRight = document.querySelector('.right-content');
  const divRemove = document.querySelector('.remove');

  const tagP = document.createElement('p');
  tagP.innerText =`Olá, ${ forms[ 0 ].value } ${ forms[ 1 ].value }`;
  divRight.appendChild(tagP);

  const tagP1 = document.createElement('p');
  tagP1.innerText = forms[2].value;
  divRight.appendChild(tagP1);

  const tagP2 = document.createElement('p');
  tagP2.innerText = forms[4].value;
  divRight.appendChild(tagP2);

  const tagP3 = document.createElement('p');
  tagP3.innerText = document.querySelector('input[type=radio]:checked').id;
  divRight.appendChild(tagP3);

  divRight.removeChild(divRemove);
}

function cheksInput() {
  const button = document.querySelector('#facebook-register');
  button.addEventListener('click', function (event) {
    const formsInput = document.querySelectorAll('.form-register input');
    let contador = 0;
    let radio = false;
    for (let index = 0; index < formsInput.length; index += 1) {
      if (formsInput[index].value === '') {
        contador += 1;
      } else if (formsInput[index].checked === true && formsInput[index].type === 'radio') {
        radio = true;
      }
    }
    if (contador !== 0 || radio !== true) {
      const formsTagP = document.querySelector('.form-register p');
      const forms = document.querySelector('.form-register');
      if (formsTagP !== null) {
        forms.removeChild(formsTagP);
      }
      event.preventDefault();
      const tagP = createTagP('Campos inválidos');
      forms.appendChild(tagP);
    } else {
      replaceDiv(event);
    }
  });
}

cheksInput();

function radioCustom() {
  const forms = document.querySelector('.custom');
  forms.addEventListener('click', function (event) {
    if (event.target.id === 'Personalizado') {
      const customTextArea = document.querySelector('.custom #gender');
      const custom = document.querySelector('.custom');
      if (customTextArea !== null) {
        custom.removeChild(customTextArea);
      }
      const textArea = document.createElement('input');
      textArea.type = 'text';
      textArea.name = 'gender-custom';
      textArea.placeholder = 'Gênero';
      textArea.id = 'gender';
      custom.appendChild(textArea);
    } else if (event.target.id !== 'gender') {
      const customTextArea = document.querySelector('.custom #gender');
      const custom = document.querySelector('.custom');
      if (customTextArea !== null) {
        custom.removeChild(customTextArea);
      }
    }
  });
}

radioCustom();

// const invalid = document.createElement('p');
// const form = document.querySelector('.form-register');
// let contador = 0;
// const inputRadio = document.querySelectorAll('.inputRadio');

// function contagem() {
//   for (let index = 0; index < inputRadio.length; index += 1) {
//     if (inputRadio[index].checked) {
//       contador += 1;
//     }
//   }
// }

// function checkRadio() {
//   if (contador === 1) {
//     invalid.innerHTML = '';
//     form.appendChild(invalid);
//   } else {
//     invalid.innerHTML = 'Campos inválidos';
//     form.appendChild(invalid);
//   }
// }

// function signIt() {
//   const inputs = document.querySelectorAll('.inputText');
//   for (let index = 0; index < inputs.length; index += 1) {
//     if (inputs[index].value === '') {
//       invalid.innerHTML = 'Campos inválidos';
//       form.appendChild(invalid);
//       break;
//     }
//   }
// }

// function addRegisterEvent() {
//   const register = document.querySelector('#facebook-register');
//   register.addEventListener('click', function () {
//     contagem();
//     checkRadio();
//     signIt();
//   });
// }

// addRegisterEvent();

// function radioCustom() {
//   const forms = document.querySelector('.form-register');
//   forms.addEventListener('click', function (event) {
//     if (event.target.id === 'personalizado') {
//       const textArea = document.createElement('input');
//       const personalizado = document.querySelector('.custom');
//       textArea.type = 'text';
//       textArea.name = 'gender-custom';
//       textArea.placeholder = 'Gênero (opcional)';
//       personalizado.appendChild(textArea);
//     }
//   });
// }

// radioCustom();
