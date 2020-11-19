let form = document.getElementById("facebook-login");
form.addEventListener("submit", validateAndSubmit, false);
document.getElementById("button-login").addEventListener("click", function () {
  alert(alert(document.getElementById("user-email-phone").value));
});
