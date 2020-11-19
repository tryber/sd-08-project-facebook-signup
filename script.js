let loginButton = document.getElementById('button-login');
let emailTelefone = document.getElementById('user-email-phone');
loginButton.addEventListener('click', function (event){
    alert(emailTelefone.value);
});
