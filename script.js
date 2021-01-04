function validatingForm() {
  if (Array.from(document.querySelectorAll(".cadastro input"))
    .map(element => element.value)
    .filter(element => element == '')
    .some(element => element == '')) {
      const new_span = document.createElement('span');
      new_span.outerHTML = '<span id=\"invalido\" style=\"color: red;\">Campos inválidos</span>';
      if (!document.getElementById('invalido')) document.getElementsByClassName('cadastro');
    }
}

function addGender() {
  if (document.querySelectorAll('input[type=radio]')[2].checked && !document.getElementById('genderPersonalizado')) {
    const el = document.createElement('input');
    el.outerHTML = '<input type=\"text\" name=\"gender-custom\" placeholder=\"Gênero (opcional)\" id=\"genderPersonalizado\"></input>';
    document.getElementsbyClassName('genderOpcao').appendChild(el);
  }
}

function cadastroConcluido() {
  if (Array.from(document.getElementsByClassName('cadastro inputs')).every(element => element.value != '')) {
    const data = ['#firstname', '#lastname', '#phone_email', '#birthdate', 'input[type=\"radio\"]:checked']
      .map(element_name => document.querySelector(element_name));
    document.getElementsByClassName('right-content')[0].innerHTML = `Olá, ${data[0]} ${data[1]}, ${data[2]}, ${data[3]}, ${data[4]}`;
  }
}