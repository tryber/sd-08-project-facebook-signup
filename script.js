const botaoEntrar = document.getElementById('button-login');
botaoEntrar.addEventListener('click', function () {
  const loginEmailOuTel = document.getElementById('user-email-phone').value;
  alert(loginEmailOuTel);
});

const inputs = document.querySelectorAll('input[type=text], input[type=radio], input[type=password]');
const botaoCadastrar = document.getElementById('facebook-register');
function verificaCamposInvalidos() {
    for (let index = 0; index < inputs.length; index += 1) {
        const input = inputs[index];
        if (input.value === '') {
            alert('Campos inválidos');
        }
    }
}

botaoCadastrar.addEventListener('click', verificaCamposInvalidos);
