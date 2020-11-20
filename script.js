const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', function () {
  const emailAndPhone = document.getElementById('user-email-phone').value;
  alert(emailAndPhone);
});

function validarCadastro () {
  const formContent = document.getElementById('form-content');
  const submitBtn = document.getElementById('facebook-register');
  submitBtn.addEventListener('click', function (event){
    for (let index = 0; index < formContent; index += 1){
      if (formContent[i].value === ''){
        
      }
    }
  })
}
