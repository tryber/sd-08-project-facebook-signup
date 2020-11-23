function buttonLogin() {
  const button = document.querySelector('#button-login');
  button.addEventListener('click', function () {
    const email = document.querySelector('#user-email-phone').value;
    alert(email);
  });
}

buttonLogin();

// const btnSubmit = document.getElementeById('facebook-register');
// btnSubmit.addEventListener('click', (e)=> {
//   e.preventDefaut();
//   const inputList = document.querySelectorAll('[input]');
//   for (let index=0; index<inputList.length; index=+1) {
//     if (!inputList[index].value) {
//       document.querySelectorAll('[input]')[index].style.display = 'block';
//       return;
//     }
//   }
// })