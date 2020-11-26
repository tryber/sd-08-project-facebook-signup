const btnEntrar = document.querySelector('#button-login');
const campEmailTel = document.querySelector('#user-email-phone');

btnEntrar.addEventListener('click', function () {
  alert(campEmailTel.value);
});
