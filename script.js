function buttonAlert() {
    let buttonClick = document.getElementById("button-login");
    buttonClick.addEventListener("click", buttonClickAlert);
}
buttonAlert();
function buttonClickAlert() {
    alert("Email ou telefone");
}