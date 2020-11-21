function alertMensage(){
  const button = document.querySelector('#button-login');
  button.addEventListener('click', ()=>{
    const mensage = document.querySelector('#user-email-phone');
    alert(mensage.value);
  });
};
alertMensage()
