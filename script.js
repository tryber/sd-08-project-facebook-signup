function buttonEnter () {
    let selectButton = document.getElementById("button-login")
    selectButton.addEventListener('click', event=> {
        let selectValue = document.getElementById('user-email-phone').value;
        alert(selectValue);
    })
}
buttonEnter();
