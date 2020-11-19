const buttonLogin = document.querySelector('#button-login');
const buttonCustomGender = document.querySelector('#Personalizado');
const buttonRegister = document.querySelector('#facebook-register');

buttonLogin.addEventListener('click', () => {
  const emailValue = document.querySelector('#user-email-phone');
  alert(emailValue.value);
});

function createCustomGender() {
  const genderCustom = document.querySelector('.hidden-input');
  genderCustom.innerHTML = '<input name="gender-custom" placeholder="Gênero (opcional)" type="text">';
}

function plotText() {
  const formField = document.querySelector('.create-account');
  const formValues = new FormData(formField);
  const boxText = document.querySelector('.right-content');
  boxText.innerHTML = '';
  boxText.innerHTML = `<p> Olá, ${formValues.get('firstname')} ${formValues.get('lastname')}
  ${formValues.get('phone_email')} ${formValues.get('birthdate')} ${formValues.get('gender')}
  </p>`;
}

function validateForm() {
  const firstName = document.forms.myForm.firstname.value;
  const lastName = document.forms.myForm.lastname.value;
  const phoneEmail = document.forms.myForm.phone_email.value;
  const password = document.forms.myForm.password.value;
  const birthDate = document.forms.myForm.birthdate.value;
  const gender = document.forms.myForm.gender.value;

  if (firstName === '' || lastName === '' || phoneEmail === '' || password === '' || birthDate === '' || gender === '') {
    const formField = document.querySelector('.create-account');
    const msgError = document.createElement('p');
    msgError.textContent = 'Campos inválidos';
    formField.appendChild(msgError);
  } else {
    plotText();
  }
}

buttonCustomGender.addEventListener('click', createCustomGender);
buttonRegister.addEventListener('click', validateForm);
