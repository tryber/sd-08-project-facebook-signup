const enterBtn = document.querySelector('.form-control');

enterBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    const emailValue = document.getElementById('user-email-phone');
    alert(emailValue.value);
})