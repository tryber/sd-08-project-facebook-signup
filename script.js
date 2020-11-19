function loginButtonAlert() {
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', function () {
    const emailPhone = document.querySelector('#user-email-phone').value;
    alert(emailPhone);
  });
}

loginButtonAlert();

function isEverythingFilled() {

  let registerButton = document.getElementById('facebook-register');

  registerButton.addEventListener('click', function () {

    let caInputList = document.querySelectorAll('.ca-input');
    let caRadioInputList = document.querySelectorAll('.ca-radio-input');

    for (let index = 0; index < caInputList.length; index += 1) {

      let caInputListItem = caInputList[index];

      if (caInputListItem.value = '') {
        alert('Campos inválidos');
      }

    }

    if (caRadioInputList[0].checked == false && caRadioInputList[1].checked == false && caRadioInputList[2].checked == false) {
      alert('Campos inválidos');
    }


  });

}
isEverythingFilled();
