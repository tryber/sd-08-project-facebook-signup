function alertButton() {
  alert(document.getElementById('user-email-phone').value);
}
function checkForm() {
  const nome = document.querySelector(".nome").value;


  //Check input Fields Should not be blanks.
  if (nome === '') {
    alert("Por favor preencha todos os campos.");
  }
}

window.onload = () => {
  const botaoEnvia = document.getElementById('button-login');
  botaoEnvia.onclick = alertButton;

  const botaoCadastro = document.getElementById('facebook-register');
  botaoCadastro.onclick = checkForm;
}
