const buttonLogin = document.getElementById('button-login');
const user = document.getElementById('user-email-phone');
buttonLogin.addEventListener('click', function () {
  alert(user.value);
});

const buttonRegister = document.getElementById('facebook-register');
const inputs = document.getElementsByClassName('inputs');
const radio = document.querySelector('.radio');
console.log(inputs)
buttonRegister.addEventListener('click', () => {
  for (input of inputs) {
    console.log(input.value.length)
    if (input.value.length == 0) {
      document.querySelector('#campos-invalidos').innerHTML = "Campos inválidos";
      return;
    }
  }
})
