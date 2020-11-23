// botão entrar mostrando o valor do input nome-email
function bntclick() {
  const btnentrar = document.getElementById ('user-email-phone').value;
  alert(btnentrar);
}
const btn = document.getElementById('button-login');
btn.addEventListener ('click', bntclick);

// se for outros mostra campo se não invisivel
const radioot = document.getElementById ('other');
function radiocheck() {
  if (radioot.checked === true) {
    document.getElementById ('genop').style.visibility = 'visible';
  }
    else {
      document.getElementById ('genop').style.visibility = 'hidden'
    }
};

// tres escutas para os tipos de genero
radioot.addEventListener ('click', radiocheck);

let radiofm =document.getElementById ('female');
radiofm.addEventListener ('click', radiocheck);

let radioma =document.getElementById ('male');
radioma.addEventListener ('click', radiocheck);

// botão cadastre-se checando valores antes
let submete =document.getElementById ('facebook-register')
submete.addEventListener ('click', checksubmit)

function checksubmit() {
  let frn = document.getElementsByName ('firstname').value;
  if (frn === '') { alert('Campos inválidos')}

  let scn = document.getElementsByName ('fastname').value;
  if (scn === '') { alert ('Campos inválidos')}

};
