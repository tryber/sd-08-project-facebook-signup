function checkForms (event) {
    let form = document.querySelectorAll(".form input");
    let flag1 = 0;
    let flag2 = 0;
    for (let index = 0; index < 5; index+=1){
        if (form[index].value === ""){
            flag1 = 1;
        }
    }
    for (let index = 5; index < form.length; index+=1){
        if (form[index].checked === true){
            flag2 = 1;
        }
    }
    if (flag1 === 1 && flag2 === 0){
        alert("Campos inválidos");
        event.preventDefault();
    }
}
document.querySelector(".facebook-register").addEventListener("click",checkForms)
