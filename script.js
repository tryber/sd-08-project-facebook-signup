const registerButton = document.getElementById("facebook-register");
const InputAll = document.querySelectorAll("#signup-container input");
registerButton.addEventListener("click", function() {
    for (let index in InputAll) {
        if (InputAll[index].value) {
            alert("Campos inválidos");
            return true;
        }
    }
});