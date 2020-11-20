document.getElementById('button-login').addEventListener('click', () => {
  (alert(document.getElementById('user-email-phone').value));
});

document.getElementById('facebook-register').addEventListener('click', (event) => {
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const celMail = document.getElementById('cel_mail').value;
  const senha = document.getElementById('senha').value;
  const dataNascimento = document.getElementById('birthdate').value;
  if (!nome || !senha || !sobrenome || !celMail || !dataNascimento) {
    document.getElementById('camposInvalidos').innerText = 'Campos inválidos';
    event.preventDefault();
  }
});

document.getElementById('personalizado').addEventListener('click', () => {
  const s = " "
  const html = '<input' + s + 'name=gender-custom' + s + 'type=text' + s + '/>';
  document.getElementById('div-personalizado').innerHTML = html;  
});
