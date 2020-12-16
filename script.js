function alerta() {
    const btn = document.getElementById('button-login');
    btn.addEventListener('click', function() {
        const email = document.getElementById('user-email-phone');
        alert(email.value);
    });
}
alerta();
