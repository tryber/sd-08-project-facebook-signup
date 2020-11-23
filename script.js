function alertButton() {
  alert(document.getElementById('user-email-phone').value);
}

function getRadioValueFromInputs(genders) {
  if (genders === undefined) {
    return '';
  }
  for (let gender = 0; gender < genders.length; gender += 1) {
    if (genders[gender].checked) {
      return genders[gender].value;
    }
  }
  return '';
}

function checkForm() {
  event.preventDefault();
  const name = document.getElementById('name-input').value;
  const lastname = document.getElementById('lastname-input').value;
  const phoneEmail = document.getElementById('phone-email').value;
  const password = document.getElementById('password-input').value;
  const genders = document.querySelectorAll('input[name="gender"]');
  const selectedGenderValue = getRadioValueFromInputs(genders);

  if (name === '' || lastname === '' || phoneEmail === '' || password === '' || selectedGenderValue === '') {
    document.getElementById('erro').innerHTML = 'Campos inválidos.'
  } else {
    document.getElementById('erro').innerHTML = '';
    document.getElementById('form-registry').submit();
  }
}


window.onload = () => {
  const botaoEnvia = document.getElementById('button-login');
  botaoEnvia.onclick = alertButton;

  const botaoCadastro = document.getElementById('facebook-register');
  botaoCadastro.onclick = checkForm;
};
