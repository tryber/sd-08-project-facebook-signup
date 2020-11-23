window.onload = () => {
  // document.getElementById('gender-personalized-input').classList.add('hidden');
};

document.getElementById('button-login').addEventListener('click', () => {
  alert(document.getElementById('user-email-phone').value);
});

document.getElementById('gender-select').addEventListener('click', (e) => {
  const genderPersonalizedInput = document.getElementById('gender-personalized-input');
  if (e.target.classList.contains('sel-gender')) {
    genderPersonalizedInput.classList.add('hidden');
    if (e.target.classList.contains('gender-personalized')) {
      genderPersonalizedInput.classList.remove('hidden');
    }
  }
});

const validate = (e) => {
  const registerError = document.getElementById('error');
  if (e.value.trim() === '') {
    registerError.classList.remove('hidden');
    setTimeout(() => {
      registerError.classList.add('hidden');
    }, 5000);
  }
};

document.getElementById('facebook-register').addEventListener('click', (e) => {
  e.preventDefault();
  validate(document.forms.signup.firstname);
  validate(document.forms.signup.lastname);
  validate(document.forms.signup.phone_email);
  validate(document.forms.signup.password);
  validate(document.forms.signup.birthdate);
  validate(document.forms.signup['gender-selection']);
});
