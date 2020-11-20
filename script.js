const btEntrar = document.getElementById('button-login');

btEntrar.addEventListener('click', function () {
  const m = document.getElementById('user-email-phone').value;
  alert(m);
});

function showForm(value) {
  const dataInput = document.getElementById('data-input');
  const createSpan = document.createElement('span');
  createSpan.innerText = value;
  createSpan.style.display = 'block';
  dataInput.appendChild(createSpan);
}

const signUpForm = document.forms['signUp-form'];

function validateForm(event) {
  event.preventDefault();

  const firstNameValue = signUpForm['firstname'].value;
  const lastNameValue = signUpForm['lastname'].value;
  const phoneValue = signUpForm['phone_email'].value;
  const passwordValue = signUpForm['password'].value;
  const birthdayValue = signUpForm['birthdate'].value;
  const genderValue = signUpForm['gender'].value;

  if (firstNameValue === '') {
    alert('Campos inválidos');
  } else if (lastNameValue === '') {
    alert('Campos inválidos');
  } else if (phoneValue === '') {
    alert('Campos inválidos');
  } else if (passwordValue === '') {
    alert('Campos inválidos');
  } else if (birthdayValue === '') {
    alert('Campos inválidos');
  } else if (genderValue === '') {
    alert('Campos inválidos');
  } else {
    const inputValueName = `Olá ${firstNameValue} ${lastNameValue}`;
    showForm(inputValueName);
    const inputValueContact = `Celular ou email: ${phoneValue}`;
    showForm(inputValueContact);
    const inputValueBday = `Data de nascimento: ${birthdayValue}`;
    showForm(inputValueBday);
    const inputValueGender = `Gênero: ${genderValue}`;
    showForm(inputValueGender);

    document.querySelector('.form-style').style.display = 'none';
  }
}

const btSubmit = document.getElementById('facebook-register');

btSubmit.addEventListener('click', validateForm);


const genderOption = document.getElementById('label-gender');

genderOption.addEventListener('click', function () {
    // let btGenderPers = document.querySelector('#pers').checked;
    // console.log(btGenderPers);

  const aux = document.forms['signUp-form']['gender'].value;

  if (aux === 'Personalizado') {
    const inputPersGender = document.createElement('input');
    inputPersGender.type = 'text';
    inputPersGender.name = 'gender-custom';
    inputPersGender.placeholder = 'Gênero (opcional)';
    genderOption.appendChild(inputPersGender);
  }
});
