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


