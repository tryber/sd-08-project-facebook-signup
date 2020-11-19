const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', () => {
  const login = document.querySelector('#user-email-phone');
  alert(`${login.value}`);
});
