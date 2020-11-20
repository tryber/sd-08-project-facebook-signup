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
    } else {
      event.preventDefault();   
      document.querySelector('.to-reveal').classList.remove('to-reveal')   
      document.getElementById('nome-reveal').innerHTML = 'Olá, ' + nome + ' ' + sobrenome;
      document.getElementById('email-reveal').innerHTML = celMail;
      document.getElementById('data-reveal').innerHTML = dataNascimento;
      if (document.getElementById('feminino').checked){
          document.getElementById('gender-reveal').innerHTML = 'Feminino';
      } else if (document.getElementById('masculino').checked){
          document.getElementById('gender-reveal').innerHTML = 'Masculino';
      } else {
          document.getElementById('gender-reveal').innerHTML = 'Personalizado';
      }
      document.querySelector('.to-remove').classList.toggle('to-reveal');        
    }
  });
  
  document.getElementById('personalizado').addEventListener('click', () => {
    document.getElementById('div-personalizado').className = 'none';
  });