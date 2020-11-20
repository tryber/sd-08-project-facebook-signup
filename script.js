function alertButton() {
  alert(document.getElementById('user-email-phone').value);
}

window.onload = () => {
  const botaoEnvia = document.getElementById('button-login');
  botaoEnvia.onclick = alertButton;
};
