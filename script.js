const loginButton = document.getElementById('button-login');
const emailTelefone = document.getElementById('user-email-phone');
const inputArray = document.querySelectorAll('.right-content input')
loginButton.addEventListener('click', function () {
  alert(emailTelefone.value);
});
const registerButton = document.getElementById('facebook-register');

registerButton.addEventListener('click', function () {
  for(let index = 0; index < inputArray.length; index+=1){
    let input = inputArray[index];
    let check = input.checkValidity();
    if(check){
      input.setCustomValidity("");
    }else {
      let form = document.getElementsByClassName('form-right-content')[0];
      let message = document.createElement('p');
      message.className = 'error-message';
      message.innerHTML = "Campos inválidos";
      form.appendChild(message);
      break;
    };
  };
});