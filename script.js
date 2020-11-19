function alerta() {
    let btn = document.getElementById('button-login');
    btn.addEventListener('click', function() {
        let email = document.getElementById('user-email-phone');
        alert(email.value);
    });
}
alerta();
