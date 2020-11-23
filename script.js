let btn = document.getElementById('button-login');
btn.addEventListener('click', bntclick)
function bntclick(){
let btnentrar = document.getElementById('user-email-phone').value;
alert(btnentrar);
};

let radioot =document.getElementById("other")
radioot.addEventListener("click", radiocheck)

let radiofm =document.getElementById("female")
radiofm.addEventListener("click", radiocheck)

let radioma =document.getElementById("male")
radioma.addEventListener("click", radiocheck)


function radiocheck(){
  if(radioot.checked === true){
    document.getElementById("genop").style.visibility = "visible";
  }
  else {document.getElementById("genop").style.visibility = "hidden"}
  } 