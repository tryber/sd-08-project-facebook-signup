function checkTexts() {
  const form = document.querySelectorAll('.form input');
  let flag1 = 0;
  for (let index = 0; index < 5; index += 1) {
    if (form[index].value === '') {
      flag1 = 1;
    }
  }
  return (flag1);
}

function checkForms(flag1) {
  const flags = [];
  const flag2 = 0;
  flags.push(flag1, flag2);
  const form = document.querySelectorAll('.form input');
  for (let index = 5; index < form.length; index += 1) {
    if (form[index].checked === true) {
      flags[1] = 1;
    }
  }
  return (flags);
}

function clickSubmit(event) {
  const form = document.querySelector('.form');
  const flags = checkTexts();
  const check = checkForms(flags);
  if (check[0] === 1 || check[1] === 0) {
    if (document.querySelector('.form p') === null) {
      const message = document.createElement('p');
      message.innerHTML = 'Campos inválidos';
      message.style.backgroundColor = 'red';
      form.appendChild(message);
    }
    event.preventDefault();
  } else {
    form.removeChild('p');
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
