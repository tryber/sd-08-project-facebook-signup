//  req 7 - criar alert para o botão;

const buttonEntrar = document.querySelector('#button-login');

function addAlert () {
buttonEntrar.addEventListener('click', function () {
  const inputEmail = document.querySelector('#user-email-phone');
  alert(inputEmail.value);
});
}
addAlert();


