function alerta() {
  const botao = document.getElementById('button-login');
  botao.addEventListener('click', function () {
    const email = document.getElementById('user-email-phone');
    alert(email.value);
  });
}
alerta();
