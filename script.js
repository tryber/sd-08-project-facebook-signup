let index; 
const allInputs = document.querySelectorAll('.borderStyle');

function alertLogin() {
    const emailCelular = document.getElementById('user-email-phone');
    alert(emailCelular.value);
  }


const validateInputs = (inputs) => {
  for (index = 0; index < allInputs.length; index ++){
    if allInputs[index] = ''{
        alert("Campos inválidos");
    }
  }
}

