const botaoLogin = document.getElementById('button-login');

botaoLogin.addEventListener('click', function () {
  alert('Email ou telefone');
});


let botaoenviar = document.querySelector("#facebook-register")

botaoenviar.addEventListener("click",function(event){


  let inputsText = document.getElementsByClassName("input");

  console.log(inputsText)

  for(let index = 0 ; index <inputsText.length ; index +=1){
    let input = inputsText[index] ;
    if(input.required){
      if(input.value === ""){
        alert("Campos inválidos")
      }
    }
  }
  


})
