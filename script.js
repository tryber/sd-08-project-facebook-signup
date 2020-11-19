function buttonLogin() {
  const button = document.querySelector("#button-login");
  button.addEventListener("click", function () {
    const email = document.querySelector("#user-email-phone-label").value;
    alert("email ou telefone: " + email);
  })
}

buttonLogin();