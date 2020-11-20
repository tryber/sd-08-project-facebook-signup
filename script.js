const btnLogin = document.getElementById('button-login');
const inputEmailPhone = document.getElementById('user-email-phone');
btnLogin.addEventListener('click', function () {
  alert(inputEmailPhone.value);
});

const customRadio = document.querySelectorAll('.checked-gender');
const inputOption = document.getElementById('option');
customRadio.forEach((element) => {
  element.addEventListener('change', function () {
    if (customRadio[2].checked) {
      inputOption.classList.remove('input-display');
      inputOption.setAttribute('required', '');
    } else {
      inputOption.classList.add('input-display');
      inputOption.removeAttribute('required');
    }
  });
});

// const submitButton = document.getElementById('facebook-register');
// submitButton.addEventListener('click', function () {
//   const userRegister = document.querySelectorAll('input');
//   const userName = document.getElementsByClassName('hello-user');
// });
