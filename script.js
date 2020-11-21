function alerta() {
  const botao = document.getElementById('button-login');
  botao.addEventListener('click', function () {
    const email = document.getElementById('user-email-phone');
    alert(email.value);
  });
}
alerta();

function validate () {
  const formList = document.querySelectorAll("input");
  let contador = 0
  let botao = document.getElementById("facebook-register");
  botao.addEventListener('click', function() {
    for (let index = 2; index < formList.length; index +=1) {
      let valorCampos = formList[index].value;
      if (valorCampos === "") {
        contador += 1;
      }
    }
    if (contador > 0 ){
      alert("Campos inválidos")
    }    
  })
}
validate();

let personal = document.getElementById("personal");
personal.addEventListener('click', function(){
  if (personal.checked === true) {
    let inputPersonal = personal.appendChild(document.createElement("input"));
    inputPersonal.className = "input-personal";
    inputPersonal.type = "text";
    inputPersonal.placeholder = "Gênero (opcional)";
    inputPersonal.name = "gender-custom"
  }
})
