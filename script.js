const getButtonLogin = document.getElementById('button-login');
const getInputLogin = document.getElementById('user-email-phone');

getButtonLogin.onclick = function () {
  const login = getInputLogin.value;
  alert(login);
};
