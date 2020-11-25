function alertEmail() {
  const button = document.querySelector('#button-login');

  button.addEventListener('click', function () {
    const emailPhone = document.querySelector('#user-email-phone').value;
    alert(emailPhone);
  });
}

alertEmail();

function checksInput() {
  const formsInput = document.querySelectorAll('.form-register input');
  let contador = 0;
  let radio = false;
  for (let index = 0; index < formsInput.length; index += 1) {
    if (formsInput[index].value === '') {
      contador += 1;
    } else if (formsInput[index].checked === true) {
      radio = true;
    }
  }
  if (radio !== true) {
    contador += 1;
  }
  return contador;
}

function checksInputText() {
  const check = checksInput();
  if (check !== 0) {
    const p = document.querySelector('.form-register p');
    const forms = document.querySelector('.form-register');
    if (p !== null) {
      forms.removeChild(p);
    }
    const tagP = document.createElement('p');
    tagP.innerText = 'Campos inválidos';
    forms.appendChild(tagP);
  }
}

function replaceDiv() {
  const check = checksInput();
  if (check === 0) {
    const forms = document.querySelectorAll('.form-register input');
    const sectionMain = document.querySelector('.main-content');
    const divRight = document.querySelector('.right-content');
    const sectionRightClass = document.createElement('section');
    sectionRightClass.className = 'right-content';

    const tagP = document.createElement('p');
    tagP.innerText = `Olá, ${forms[0].value} ${forms[1].value}`;
    sectionRightClass.appendChild(tagP);

    const tagP1 = document.createElement('p');
    tagP1.innerText = forms[2].value;
    sectionRightClass.appendChild(tagP1);

    const tagP2 = document.createElement('p');
    tagP2.innerText = forms[4].value;
    sectionRightClass.appendChild(tagP2);

    const tagP3 = document.createElement('p');
    tagP3.innerText = document.querySelector('input[type=radio]:checked').id;
    sectionRightClass.appendChild(tagP3);

    sectionMain.removeChild(divRight);
    sectionMain.appendChild(sectionRightClass);
  }
}

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
      textArea.placeholder = 'Gênero (opcional)';
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


const register = document.querySelector('#facebook-register');
register.addEventListener('click', function (event) {
  event.preventDefault();
  checksInputText();
  replaceDiv();
});
