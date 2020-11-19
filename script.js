const buttonEnter = document.getElementById('button-login');
const inputEmailPhone = document.getElementById('user-email-phone');

buttonEnter.addEventListener('click', function () {
    alert(inputEmailPhone.value);
});