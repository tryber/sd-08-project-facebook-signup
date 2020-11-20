function entrar() {
  const submit = document.getElementById('button-login');
  alert('Digite seu Email ou telefone');
  submit.addEventListener('click', entrar());
}
