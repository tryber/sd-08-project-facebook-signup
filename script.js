let button = document.getElementById("button-login");
let label = document.getElementById("user-email-phone");

button.addEventListener('click', function() {
  alert(label.value);
})