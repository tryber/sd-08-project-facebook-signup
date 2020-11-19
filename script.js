const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', function () {
  const userEmailPhone = document.getElementById('user-email-phone');
  alert(userEmailPhone.value);
});

const buttonRegister = document.getElementById('facebook-register');

const validateData = () => {
  const input = document.getElementsByClassName('input');
  const gender = document.getElementsByClassName('gender');
  const error = document.querySelector('.invalid-input');
  let helper = false;

  for (let i = 0; i < gender.length; i += 1) {
    if (gender[i].checked) {
      helper = true;
      break;
    }
  }

  if (!helper) {
    error.style.display = 'block';
  }

  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value === '') {
      error.style.display = 'block';
      break;
    }
  }
};

const selectUserData = () => {
  let data = [];

  const name = document.getElementsByClassName('input')[0].value;
  const lastName = document.getElementsByClassName('input')[1].value;
  const phoneEmail = document.getElementsByClassName('input')[2].value;
  const gender = '';
  const birthdate = document.getElementById('birthdate').value;
  const genders = document.getElementsByClassName('gender');
  for (let i = 0; i < genders.length; i += 1) {
    if (genders[i].checked) {
      gender = genders[i].innerText;
    }
  }

  data.push(name, lastName, phoneEmail, gender, birthdate);
  
  return data;
}

buttonRegister.addEventListener('click', () => {
  validateData();
});

const gender = document.getElementsByClassName('gender');
const input = document.querySelector('.optional-input');

for (let i = 1; i < gender.length; i += 1) {
  gender[i].addEventListener('click', () => {
    if (gender[3].checked) {
      input.style.display = 'block';
    } else {
      input.style.display = 'none';
    }
  });
}
