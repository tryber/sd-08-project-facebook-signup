function alertButton() {
  alert (document.getElementById("user-email-phone").value);
}

window.onload = () => {
  let botaoEnvia= document.getElementById("button-login");
  botaoEnvia.onclick = alertButton;
}