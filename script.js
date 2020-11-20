const botaoLogin = document.getElementById("button-login");

botaoLogin.addEventListener("click", function () {
  alert("Email ou telefone");
});

const botaoenviar = document.querySelector("#facebook-register");
const divvaziapos = document.querySelector("#divvazia");

botaoenviar.addEventListener("click", function () {
  let inputsText = document.getElementsByClassName("inputs");
  for (let index = 0; index < inputsText.length; index++) {
    let inputstextposi = inputsText[index];

    if (inputstextposi.required) {
      if (inputstextposi.value === "") {
        divvaziapos.innerHTML = "Campos Inválidos";
      } else {
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

let persona = document.querySelector("#botaopersonalizado");

let radiop = document.getElementsByClassName("radioperso");
let element = document.createElement("input");

for (let index = 0; index < radiop.length; index++) {
  radiop[index].addEventListener("click", function (event) {
    if (radiop[2].checked === true) {
      persona.innerHTML =
        '<input type="text" placeholder = "Gênero (Opcional)" name= "gender-custom" > ';

      // element.name = "gender-custom"
      // element.placeholder = "Gênero (opcional)"
      // element.type = "text"
      // persona.appendChild(element)
    } else {
      persona.innerHTML = "";
      // persona.style.display = "none";
    }
  });
}

const nomesobretext = document.getElementById("nomesobre");

const namelastname = document.querySelectorAll("#nomesobrenome");
