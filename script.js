// window.onload = () => {
//   // document.getElementById('gender-personalized-input').classList.add('hidden');
//   // document.getElementById('gender').value = 'Feminino';
// };

document.getElementById('button-login').addEventListener('click', () => {
  alert(document.getElementById('user-email-phone').value);
});

document.getElementById('gender-select').addEventListener('click', (e) => {
  const genderPersonalizedInput = document.getElementById('gender-personalized-input');
  if (e.target.classList.contains('sel-gender')) {
    document.getElementById('gendersel').value = e.target.value;
    genderPersonalizedInput.classList.add('hidden');
    if (e.target.classList.contains('gender-personalized')) {
      genderPersonalizedInput.classList.remove('hidden');
    }
  }
});

const validate = (data) => {
  const registerError = document.getElementById('error');

  const val = {
    errors: 0,
  };

  Object.values(data).forEach((value) => {
    // console.log(value);
    if (value.trim() === '') {
      val.errors += 1;
    }
  });
  if (val.errors > 0) {
    registerError.classList.remove('hidden');
    setTimeout(() => {
      registerError.classList.add('hidden');
    }, 5000);
    return false;
  }
  return true;
};

const registerAction = (data = {}) => {
  const el = document.querySelector('.right-content');
  // el.innerHTML += '<br>';
  el.innerHTML += `Olá, ${data.firstname} ${data.lastname} <br>`;
  el.innerHTML += `Celular/Email: ${data.phonemail} <br>`;
  el.innerHTML += `Data de Nascimento: ${data.birthdate} <br>`;
  el.innerHTML += `Gênero: ${data.gender} <br>`;
};

const getRegisterData = () => ({
  firstname: document.forms.signup.firstname.value || '',
  lastname: document.forms.signup.lastname.value || '',
  phonemail: document.forms.signup.phone_email.value || '',
  birthdate: document.forms.signup.birthdate.value || '',
  gender: document.forms.signup.gendersel.value || '',
});

document.getElementById('facebook-register').addEventListener('click', (e) => {
  e.preventDefault();
  const data = getRegisterData();
  if (validate(data)) {
    registerAction(data);
  }
});
