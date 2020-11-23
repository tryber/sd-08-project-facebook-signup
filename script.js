// botão entrar mostrando o valor do input nome-email
function bntclick() {
  const btnentrar = document.getElementById('user-email-phone').value;
  alert(btnentrar);
}
const btn = document.getElementById('button-login');
btn.addEventListener('click', bntclick);

// se for outros mostra campo se não invisivel
const radioot = document.getElementById('other');
function radiocheck() {
  if (radioot.checked === true) {
    document.getElementById('genop').style.visibility = 'visible';
    }
  else {
    document.getElementById('genop').style.visibility = 'hidden';
  }
}

// tres escutas para os tipos de genero
radioot.addEventListener('click', radiocheck);

const radiofm = document.getElementById('female');
radiofm.addEventListener('click', radiocheck);

const radioma = document.getElementById('male');
radioma.addEventListener('click', radiocheck);

function checksubmit() {
  const frn = document.getElementsByName('firstname').value;
  if (frn === '') { alert('Campos inválidos') };

  const scn = document.getElementsByName('fastname').value;
  if (scn === '') { alert('Campos inválidos') };
}
// botão cadastre-se checando valores antes
const submete = document.getElementById('facebook-register');
submete.addEventListener('click', checksubmit);
