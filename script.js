function fBtnLogin() {
  const inputUserEmail = document.getElementById('user-email-phone');
  alert(inputUserEmail.value);
}
document.getElementById('button-login').addEventListener('click', fBtnLogin);
document.getElementById('facebook-register').addEventListener('click', fBtnRegister);
function fBtnRegister() { 
  let firstname = formSignin.firstname.value;
  let lastname = formSignin.lastname.value;
  let phoneEmail = formSignin.phone_email.value;
  let password = formSignin.password.value;
  let birthdate = formSignin.birthdate.value;
  let gender = formSignin.gender.value;
  let checkFirstname = firstname !== '';
  let checkLastname = lastname !== '';
  let checkPhoneEmail = phoneEmail !== '';
  let checkPassword = password !== '';
  let checkBirthdate = birthdate !== '';
  let checkGender = gender !== '';
  let checkAll = (checkFirstname && checkLastname && checkPhoneEmail && checkPassword && checkBirthdate && checkGender);
  if (checkAll === false) {
    alert('Campos inválidos');
  } 
}
