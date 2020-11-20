document.getElementById('button-login').addEventListener('click', () => {
  (alert(document.getElementById('user-email-phone').value));
});

document.getElementById('facebook-register').addEventListener('click', () => {
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const cel_mail = document.getElementById('cel_mail').value;
  const senha = document.getElementById('senha').value;
  const data_nascimento = document.getElementById('birthdate').value;
  if (!nome || !senha || !sobrenome || !cel_mail || !data_nascimento){
    alert('Preencha ao menos um campo')
  }
})
