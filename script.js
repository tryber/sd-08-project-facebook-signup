function buttonEnter() {
  const selectButton = document.getElementById('button-login');
  selectButton.addEventListener('click', () => {
    const selectValue = document.getElementById('user-email-phone').value;
    alert(selectValue);
  });
}
buttonEnter();

function buttonCadastro () {
  const selectCadastrar = document.getElementById('facebook-register');
  selectCadastrar.addEventListener('click', event=> {
      let camposForm = document.getElementsByClassName('verificar');
      for (index in camposForm) {
        let valueCampos = camposForm[index].value;
        if(valueCampos == '') {
          alert('Campos inválidos');
        }
      }
  })
}
buttonCadastro ();