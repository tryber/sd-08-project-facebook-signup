function alertEntrar() {
  const botao = document.getElementById('button-login');
  botao.addEventListener('click', function () {
    const emailTelefone = document.getElementById('user-email-phone');
    alert(emailTelefone.value);
  });
}
alertEntrar();
