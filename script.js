window.onload = function () {
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', function () {
    const userEmailOrFone = document.querySelector('#user-email-phone').value;
    const inputEmailOrFone = userEmailOrFone;
    alert(inputEmailOrFone);
  });
};
