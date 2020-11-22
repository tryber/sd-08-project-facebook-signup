function fBtnLogin() {
  const inputUserEmail = document.getElementById('user-email-phone');
  alert(inputUserEmail.value);
}
document.getElementById('button-login').addEventListener('click', fBtnLogin);
function fBtnRegister() {
  const formSigninInput = document.getElementsByClassName('input-style');
  const male = document.getElementById('male');
  const female = document.getElementById('female');
  const other = document.getElementById('other');
  let check1 = true;
  let check2 = false;
  if (male.checked || female.checked || other.checked) {
    check2 = true;
  }
  for (let index = 0; index < formSigninInput.length; index += 1) {
    if (formSigninInput[index].value === '') {
      check1 = false;
    }
  }
  if (check1 === false && check2 === false) {
    alert('Campos inválidos');
  }
}
document.getElementById('facebook-register').addEventListener('click', fBtnRegister);
