const botaoEntrar = document.getElementById('button-login');
botaoEntrar.addEventListener('click', function () {
  const loginEmailOuTel = document.getElementById('user-email-phone').value;
  alert(loginEmailOuTel);
});
