function validatingForm() {
  if (Array.from(document.querySelectorAll('.cadastro input'))
    .map((element) => element.value)
    .some((element) => element === '')) {
    const newSpan = document.createElement('span');
    if (!document.getElementById('invalido')) {
      document.getElementsByClassName('cadastro')[0].appendChild(newSpan);
      newSpan.outerHTML = '<span id="invalido" style="color: red;">Campos inválidos</span>';
    }
  }
}

function addGender() {
  if (document.querySelectorAll('input[type=radio]')[2].checked && !document.getElementById('genderPersonalizado')) {
    const el = document.createElement('input');
    document.getElementsByClassName('genderOpcao')[0].appendChild(el);
    el.outerHTML = '<input type="text" name="gender-custom" placeholder="Gênero (opcional)" id="genderPersonalizado">';
  }
}

function cadastroConcluido() {
  if (Array.from(document.querySelectorAll('.cadastro input')).every((element) => element.value !== '')) {
    const data = ['#firstname', '#lastname', '#phone_email', '#birthdate', 'input[type="radio"]:checked']
      .map((elementName) => document.querySelector(elementName).value);
    document.getElementsByClassName('right-content')[0].innerHTML = `Olá, ${data[0]} ${data[1]}, ${data[2]}, ${data[3]}, ${data[4]}`;
  }
}

function alertButton() {
  alert(document.getElementById('user-email-phone').value);
}

window.onabort = function () {
  validatingForm();
  addGender();
  cadastroConcluido();
  alertButton();
};
