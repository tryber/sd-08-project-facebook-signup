function alerta() {
  const btn = document.getElementById('button-login');
  btn.addEventListener('click', function () {
    const email = document.getElementById('user-email-phone');
    alert(email.value);
  });
}
alerta();

const btnCadastreSe = document.getElementById('facebook-register');

btnCadastreSe.addEventListener('click', function (event) {
  event.preventDefault();
  if (document.querySelectorAll('p').length === 3) {
    document.querySelectorAll('form')[1].removeChild(document.querySelectorAll('p')[2]);
  }
  let erros = "";
  const AllInputs = document.querySelectorAll('input[type=text], input[type=password]');
  for (let index = 2; index < AllInputs.length; index += 1) {
    const input = AllInputs[index];
    if (input.value === '') {
      erros += 'Campos inválidos\n';
    }
  }
  if (erros !== '') {
    // alert('Campos inválidos');
    const pInvalid = document.createElement('p');
    pInvalid.innerHTML = "Campos inválidos";
    document.querySelectorAll('form')[1].appendChild(pInvalid);
  }
});

document.querySelector('#custom').addEventListener('click', function (){
  const newInput = document.createElement('input');
  newInput.name = "gender-custom";
  newInput.placeholder = "Gênero (opcional)";
  document.querySelector('.form-gender').appendChild(newInput);
});

