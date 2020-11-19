const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', function () {
  alert('Email ou telefone');
});

let buttonCadastrar = document.querySelector("#facebook-register");

function cadastrar(){
  buttonCadastrar.addEventListener("click", function(event){
    event.preventDefault();
    let inputs = document.querySelectorAll(".form-user input[type=text]");
    let resultado = "";
    for (let index=0; index<inputs.length; index++){
      let arrayInput = inputs[index];
      if (arrayInput.value == "") {
        arrayInput.className = "erro";
        resultado += `Campos inválidos ${arrayInput.name}.\n`;
      }else {
       arrayInput.className = ""; 
      }    
    }
    if (resultado !== ""){
      alert(resultado);            
    }else {            
      form.reset();
    }
  });
}
cadastrar();

let radioPersonalizado = document.querySelector("#pers");
let box4 = document.querySelector(".box4");
radioPersonalizado.addEventListener("click", function(){
  let input = document.createElement("input");
  input.type = "radio";
  input.id = "opcional"
  input.name = "gender-custom"
  input.placeholder = "Gênero (opcional)";
  let label = document.createElement("label");
  label.for = "opcional";
  label.innerHTML = "Gênero (opcional)";
  box4.append(input);
  box4.append(label); 
});

