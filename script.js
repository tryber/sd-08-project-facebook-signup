const getButtonLogin = document.getElementById('button-login');
const getInputLogin = document.getElementById('user-email-phone');
const getButtonSubmit = document.getElementById('facebook-register');
const getFormCreate = document.getElementById('form-create');

getButtonLogin.onclick = function () {
  const login = getInputLogin.value;
  alert(login);
};

getButtonSubmit.onclick = function (event) {
  event.preventDefault()
  const inputForm = document.querySelectorAll('#form-create input');
  let check = false
  inputForm.forEach((element) =>{
    if (element.value === ''){
      check = true;
    }
    })
    if (check){
      alert('Campos inválidos')
    }
}