function fBtnLogin() {
  const inputUserEmail = document.getElementById('user-email-phone');
  alert(inputUserEmail.value);
}
document.getElementById('button-login').addEventListener('click', fBtnLogin);
function fBtnRegister() {
  const firstname = formSignin.firstname.value;
  const lastname = formSignin.lastname.value;
  const phoneEmail = formSignin.phone_email.value;
  const password = formSignin.password.value;
  const birthdate = formSignin.birthdate.value;
  const gender = formSignin.gender.value;
  const ch1 = firstname !== '';
  const ch2 = lastname !== '';
  const ch3 = phoneEmail !== '';
  const ch4 = password !== '';
  const ch5 = birthdate !== '';
  const ch6 = gender !== '';
  const checkAll = (ch1 && ch2 && ch3 && ch4 && ch5 && ch6);
  if (checkAll === false) {
    alert('Campos inválidos');
  }
}
document.getElementById('facebook-register').addEventListener('click', fBtnRegister);
