function buttonEnter() {
  const selectButton = document.getElementById('button-login');
  selectButton.addEventListener('click', () => {
    const selectValue = document.getElementById('user-email-phone').value;
    alert(selectValue);
  });
}
buttonEnter();

function buttonCadastro() {
  const selectCadastrar = document.getElementById('facebook-register');
  selectCadastrar.addEventListener('click', () => {
      const camposForm = document.getElementsByClassName('verificar');
      for(let index in camposForm) {
        const valueCampos = camposForm[index].value;
        if (valueCampos === '') {
          alert('Campos inválidos');
        }
      }
    }
  )
}
buttonCadastro();
