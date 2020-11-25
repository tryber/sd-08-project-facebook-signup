let index; 
const textInputs = document.querySelectorAll('.text');
const radioInputs = document.querySelectorAll('.radio');
let buttonSignUp = document.getElementById('facebook-register');
const alert = document.createElement('p');
const form = document.querySelector('.form');
 

function alertLogin() {
    const emailCelular = document.getElementById('user-email-phone');
    alert(emailCelular.value);
  }


const validateTextInputs = () => {
  for (index = 0; index < textInputs.length; index ++){
    if (textInputs[index].value == ''){
      alert.innerHTML = 'Campos Inválidos';
      form.appendChild(alert);
      break;
    }
  }
}

let counting = 0;
const validateRadioInputs = () => {
  for (index = 0; index < radioInputs.length; index ++){
    if (radioInputs[index].checked){
      counting += 1;
    }
  }
}

const checkRadio = () => {
  if (counting === 1){
    alert.innerHTML = '';
  }else{
    alert.innerHTML = 'Campos Inválidos';
    form.appendChild(alert);
  }
}

buttonSignUp.addEventListener('click',function(event){
  validateRadioInputs();
  validateTextInputs();
  checkRadio();
  event.preventDefault();
})


