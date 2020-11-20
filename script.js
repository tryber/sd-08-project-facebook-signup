const botaoLogin = document.getElementById('button-login');
const emailOuTelefone =  document.getElementById('user-email-phone');

function alertBotao() { 
  alert(emailOuTelefone.value);
}
botaoLogin.addEventListener('click', alertBotao);



const botaoCadastrar = document.getElementById('facebook-register');

const botaoenviar = document.querySelector('#facebook-register');

botaoenviar.addEventListener('click', function () {

  let inputsText = document.getElementsByClassName('inputs');

  for (let index = 0; index < inputsText.length; index++) {

    let value = inputsText[index]

    if (value.required) {
      if (value.value === '') {
        alert('Campos invalidos')
        break
      }
    }
  }
});




/* const persona = document.querySelector("#botaopersonalizado")

const radiop = document.querySelector("#radioperso")

radiop.addEventListener("click", function (event) {
  
  if(event.target.checked === true){

    persona.style.display = "block"
  }
  else if (event.target.checked === false){
    persona.style.display = "none"
 
  }

}) */

let persona = document.querySelector('#botaopersonalizado')

let radiop = document.getElementsByClassName('radioperso')

for (let index = 0; index < radiop.length; index++) {

  radiop[index].addEventListener('click', function (event) {

    if (radiop[2].checked === true) {

      persona.style.display = 'block'
    }
    else {
      persona.style.display = 'none'
    }
  })
}




