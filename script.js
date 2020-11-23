window.onload = function () {
  const buttonEnter = document.querySelector('#button-login');
  buttonEnter.addEventListener('click', function () {
    const emailPhone = document.querySelector('#user-email-phone');
    alert(emailPhone.value);
  });
};
function showClearInput() {
  const buttonInput = document.querySelector('#facebook-register');
  buttonInput.addEventListener('click', function () {
    const allInputs = document.getElementsByTagName('input');
    for (let a = 0; a < allInputs.length; a += 1) {
      if (allInputs[a].value === '') {
        document.querySelector('.false').style.display = 'block';
      }
    }
  });
}
showClearInput();
function gender() {
  const genderSelect = document.querySelector('#Personalizado');
  genderSelect.addEventListener('change', function () {
    document.querySelector('.labelGender').style.display = 'block';
  });
  const othersGender = document.querySelector('#Feminino');
  othersGender.addEventListener('change', function () {
    document.querySelector('.labelGender').style.display = 'none';
  });
  const othersGender2 = document.querySelector('#Masculino');
  othersGender2.addEventListener('change', function () {
    document.querySelector('.labelGender').style.display = 'none';
  });
}
gender();
