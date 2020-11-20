function alertEmail() {
  const button = document.querySelector('#button-login');

  button.addEventListener('click', function () {
    const emailPhone = document.querySelector('#user-email-phone').value;
    alert(emailPhone);
  });
}

alertEmail();

function signIt() {
  let inputs = document.querySelectorAll('.inputC');
  let register = document.querySelector('#facebook-register');
  register.addEventListener('click', function () {
    for (let index =0; index < inputs.length; index +=1){
      if (inputs[index].value == ""){
        alert('Campos inválidos');
      }
    }
  })
}

signIt();

function checkRadio() {
  let inputRadio = document.querySelectorAll('.inputRadio');
  let register = document.querySelector('#facebook-register');
  register.addEventListener('click', function () {
    for(let index = 0; index < inputRadio.length; index+=1){
      if(!inputRadio[index].checked){
        alert('Campos inválidos');
      }else {
        break;
      }
    }
  })
}
checkRadio();