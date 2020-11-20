function checkTexts() {
  let form = document.querySelectorAll(".form input");
  let flag1 = 0;
  let flag2 = 0;
  for (let index = 0; index < 5; index+=1){
      if (form[index].value === ""){
          flag1 = 1;
      }
  }
  return ([flag1,flag2])
}

function checkForms(flags) {
  let form = document.querySelectorAll(".form input");
  for (let index = 5; index < form.length; index+=1){
      if (form[index].checked === true){
          flags[1] = 1;
      }
  }
  return (flags);
}

function clickSubmit(event) {
  let flags = checkTexts();
  let check = checkForms(flags);
  if (check[0] === 1 || check[1] === 0){
    alert("Campos inválidos");
    event.preventDefault();
  }
}
document.querySelector(".facebook-register").addEventListener("click",clickSubmit);
