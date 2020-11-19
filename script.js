const loginButton = document.getElementById("button-login");
loginButton.addEventListener("click", sendForm);

function sendForm(){
const emailPhone = document.getElementById("user-email-phone");
alert(emailPhone.value);
}