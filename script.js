window.onload = function () {

  let buttonLogin = document.getElementById("button-login")
  buttonLogin.addEventListener("click", function () {
    let userEmailOrFone = document.querySelector("#user-email-phone").value
    let inputEmailOrFone = userEmailOrFone
    alert(inputEmailOrFone)
  })

}