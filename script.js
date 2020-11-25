function buttonEnter() {
  const selectButton = document.getElementById('button-login');
  selectButton.addEventListener('click', () => {
    const selectValue = document.getElementById('user-email-phone').value;
    alert(selectValue);
  });
}
buttonEnter();


function campoInvalido() {
  const selectSubmit = document.getElementById('facebook-register');
  selectSubmit.addEventListener('click', event=> {
    const inputName = document.querySelectorAll(input['text']);
    if (inputName === "") {
      event.preventDefault();
      alert("campo nome obrigatório.")
    }
    
  })
}
campoInvalido();