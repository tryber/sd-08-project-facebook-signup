function checkTexts() {
  const form = document.querySelectorAll('.form input');
  let flag1 = 0;
  for (let index = 0; index < form.length; index += 1) {
    if (index < 5) {
      if (form[index].value === '') {
        flag1 = 1;
      }
    }
    if (index > 7) {
      if (form[index].value === '') {
        flag1 = 1;
      }
    }
  }
  return (flag1);
}

function checkRadios(flag1) {
  const flags = [];
  const flag2 = 0;
  flags.push(flag1, flag2);
  const form = document.querySelectorAll('.form input');
  for (let index = 5; index < form.length; index += 1) {
    if (form[index].checked === true) {
      sessionStorage.setItem('gender', form[index].value);
      flags[1] = 1;
    }
  }
  return (flags);
}

function isFormComplete() {
  const flags = checkTexts();
  const check = checkRadios(flags);
  if (check[0] === 1 || check[1] === 0) {
    return 0;
  }
  return 1;
}

function clickSubmit(event) {
  const form = document.querySelector('.form');
  const complete = isFormComplete();
  if (complete === 0) {
    if (document.querySelector('.form p') === null) {
      const message = document.createElement('p');
      message.innerHTML = 'Campos inválidos';
      message.style.backgroundColor = 'red';
      form.appendChild(message);
    }
    event.preventDefault();
  } else {
    sessionStorage.setItem('complete', '1');
    sessionStorage.setItem('name', form.querySelector('.name-input').value);
    sessionStorage.setItem('lastName', form.querySelector('.lastname-input').value);
    sessionStorage.setItem('phoneemail', form.querySelector('.phoneemail-input').value);
    sessionStorage.setItem('birthdate', form.querySelector('.birthdate-input').value);
  }
}
document.querySelector('.facebook-register').addEventListener('click', clickSubmit);

function customGender() {
  const radioButtons = document.querySelector('.radio-button-container');
  if (document.querySelector('.radio-button-container input#custom-input') === null) {
    const customInput = document.createElement('input');
    customInput.type = 'text';
    customInput.id = 'custom-input';
    customInput.name = 'gender-custom';
    customInput.placeholder = 'Gênero';
    radioButtons.appendChild(customInput);
  }
}
document.querySelector('input#custom').addEventListener('click', customGender);

function clearCustomGender() {
  const radioButtons = document.querySelector('.radio-button-container');
  if (document.querySelector('.radio-button-container input#custom-input')) {
    radioButtons.removeChild(document.querySelector('.radio-button-container input#custom-input'));
  }
}
document.querySelector('input#male').addEventListener('click', clearCustomGender);
document.querySelector('input#female').addEventListener('click', clearCustomGender);

function seeForm() {
  const rightContent = document.querySelector('.right-content');
  rightContent.removeChild(document.querySelector('.form-container'));
  const h2 = document.createElement('h2');
  h2.innerText = 'Olá, ' + sessionStorage.getItem('name') + ' ' + sessionStorage.getItem('lastName');
  rightContent.appendChild(h2);
  const p = document.createElement('p');
  p.innerHTML = 'Seu email ou telefone: ' + sessionStorage.getItem('phoneemail') + '<br>Data de Nascimento: ' + sessionStorage.getItem('birthdate') + '<br>Gênero: ' + sessionStorage.getItem('gender');
  rightContent.appendChild(p);
}

window.onload = function () {
  const check = sessionStorage.getItem('complete');
  if (check === '1') {
    seeForm();
    sessionStorage.removeItem('complete');
  }
  if (check === '0') {
    sessionStorage.removeItem('complete');
  }
};
