const validate = (element) => {
  if (element.value.trim() === "") {
    document.getElementById("error").innerHTML = "Campos inválidos";
    element.addEventListener("focus", () => {
      document.getElementById("error").innerHTML = "";
      setTimeout(() => {
        element.addEventListener("focus", () => {
          //
        });
      }, 3000);
    });
  }
};

document.getElementById("facebook-register").addEventListener("click", () => {
  event.preventDefault();
  validate(document.forms.signup.firstname);
  validate(document.forms.signup.lastname);
  validate(document.forms.signup.phone_email);
  validate(document.forms.signup.password);
  validate(document.forms.signup.birthdate);
});
