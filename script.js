const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', function () {
  const userEmailPhone = document.getElementById('user-email-phone');
  alert(userEmailPhone.value);
});

const buttonRegister = document.getElementById('facebook-register');

const validateData = () => {
  const input = document.getElementsByClassName('input');
  let helper = true;

  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value === '') {
      helper = false;
    }
  }

  return helper;
};

const selectUserData = () => {
  const data = [];

  const name = document.getElementsByClassName('input')[0].value;
  const lastName = document.getElementsByClassName('input')[1].value;
  const phoneEmail = document.getElementsByClassName('input')[2].value;
  let gender = '';
  const birthdate = document.getElementById('birthdate').value;
  const genders = document.getElementsByClassName('gender');
  for (let i = 0; i < genders.length; i += 1) {
    if (genders[i].checked) {
      gender = genders[i].value;
    }
  }

  data.push(name, lastName, phoneEmail, gender, birthdate);

  return data;
};

const deleteContent = () => {
  const content = document.querySelector('.right-content');
  const { children } = content;

  for (let i = 0; i < children.length; i) {
    content.removeChild(content.lastChild);
  }
};

buttonRegister.addEventListener('click', () => {
  const helper = validateData();

  if (helper) {
    const data = selectUserData();

    deleteContent();
    const content = document.getElementsByClassName('right-content')[0];

    const p = document.createElement('p');
    p.innerText = `Olá, ${data[0]} ${data[1]}`;
    content.appendChild(p);

    for (let i = 2; i < data.length; i += 1) {
      const p2 = document.createElement('p');
      p2.innerText = data[i];
      content.appendChild(p2);
    }
  } else {
    const error = document.querySelector('.invalid-input');
    error.style.display = 'block';
  }
});

const gender = document.getElementsByClassName('gender');
const input = document.querySelector('.optional-input');

for (let i = 0; i < gender.length; i += 1) {
  gender[i].addEventListener('click', () => {
    if (gender[2].checked) {
      input.style.display = 'block';
    } else {
      input.style.display = 'none';
    }
  });
}
