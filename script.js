const entrar = document.getElementById('button-login');

function alerta() {
  alert("'Email ou telefone'");
}
entrar.addEventListener('click', alerta);

const cadastre = document.getElementById('facebook-register')

const form = document.querySelectorAll('.form input div')

cadastre.addEventListener('click', function() {
  for(let index = 0; index < form.length; index+=1) {
    if(form[index].innerText === ''){
      alert('Campos inválidos')
      break;
    }else{
      alert('Cadastro efetuado')
    }
  }
})
