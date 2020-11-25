let buttonSignUp = document.getElementById('facebook-register');
let missing = document.createElement('p');
let form = document.querySelector('.form');
let counting = 0;
const inputCustomGender = document.createElement('input');
inputCustomGender.name = "gender-custom";
inputCustomGender.placeholder = "Gênero (opcional)";
inputCustomGender.type = "text";
inputCustomGender.id = "gender";
const formGender = document.querySelector(".form-gender");
const optionCustom = document.querySelector("#personal");
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const birthDate = document.querySelector('.birthdate');
let textInputs = document.querySelectorAll('.input');



/*const alertLogin = () => {
    const emailCelular = document.getElementById('user-email-phone');
    alert(emailCelular.value);
}*/



const inputRadio = document.querySelectorAll('inputRadio');
function contagem() {
  for(let index = 0; index < inputRadio.length; index +=1) {
    if (inputRadio[index].checked){
      counting +=1;
    }
  }
}

function checkRadio() {
  if(counting === 1) {
    missing.innerHTML = '';
  }else {
    missing.innerHTML = 'Campos Inválidos'
    form.appendChild(missing);
  }
}

const validateTextInputs = () => {
  for (index = 0; index < textInputs.length; index ++){
    if (textInputs[index].value === ''){
      missing.innerHTML = 'Campos Inválidos';
      form.appendChild(missing);
    } else {
      const pName = document.createElement('p');
      pName.innerHTML = `Olá, ${firstName.value} ${lastName.value}`;
      const pEmail = document.createElement('p');
      pEmail.innerHTML = email.value;
      const pBirthDate = document.createElement('p');
      pBirthDate.innerHTML = birthDate.value;
      const gender = document.createElement('p');
      gender.innerText = document.querySelector('input[type=radio]:checked').value;
      document.querySelector('.main-content').removeChild(document.querySelector('.right-content'));
      const data = document.createElement('div');
      data.className = 'right-content';
      document.querySelector('.main-content').appendChild(data);
      data.appendChild(pName);
      data.appendChild(pEmail);
      data.appendChild(pBirthDate);
      data.appendChild(gender);
    }
  }
}

buttonSignUp.addEventListener('click',function(event){
  event.preventDefault();
  contagem();
  checkRadio();
  validateTextInputs();
})

optionCustom.addEventListener('click', function(){
  formGender.appendChild(inputCustomGender);
})