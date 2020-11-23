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
  } else {
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
  const len = document.getElementsByName('lastname').value;
  const phe = document.getElementsByName('phone_email').value;
  const pass = document.getElementsByName('password').value;
  const nasc = document.getElementsByName('birthdate').value;
  if (frn ==='' || len ==='' || phe ==='' || pass ==='' || nasc ==='') { alert('Campos inválidos'); }
}
// botão cadastre-se checando valores antes
const submete = document.getElementById('facebook-register');
submete.addEventListener('click', checksubmit);
