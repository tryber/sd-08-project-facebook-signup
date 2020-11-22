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
  const checkFirstname = firstname !== '';
  const checkLastname = lastname !== '';
  const checkPhoneEmail = phoneEmail !== '';
  const checkPassword = password !== '';
  const checkBirthdate = birthdate !== '';
  const checkGender = gender !== '';
  const checkAll = (checkFirstname && checkLastname && checkPhoneEmail && checkPassword && checkBirthdate && checkGender);
  if (checkAll === false) {
    alert('Campos inválidos');
  }
}
document.getElementById('facebook-register').addEventListener('click', fBtnRegister);