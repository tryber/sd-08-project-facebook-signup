function alertEntrar() {
  const botao = document.getElementById('button-login');
  botao.addEventListener('click', function () {
    const emailTelefone = document.getElementById('user-email-phone');
    alert(emailTelefone.value);
  });
}
alertEntrar();

const inputGender = document.querySelector('#gender-custom');
const radioGender = document.querySelector('#per');

radioGender.addEventListener('change', () => {
  if (inputGender.style.display === '' || inputGender.style.display === 'none') {
    inputGender.style.display = 'block';
  } else {
    inputGender.style.display = 'none';
  }
});

function checkRadio() {
  if (inputGender.style.display === 'block') {
    inputGender.style.display = 'none';
  }
}

const mas = document.querySelector('#mas');
mas.addEventListener('change', checkRadio);
const fem = document.querySelector('#fem');
fem.addEventListener('change', checkRadio);

const cadast = document.querySelector("#facebook-register");
cadast.addEventListener("click", () => {
  const formsValue = document.querySelectorAll("#register-form")[0];
      for (let index = 0; index < 5; index += 1) {
   if (
      document.querySelectorAll("input").length < 1 ||
      (inputGender.style.display === "block" && inputGender.value === "") ||
      formsValue[index].value === ""
    ) {
      document.querySelector(".chec-return").style.display = "block";
    } else {
      const firstName = document.getElementById("firstname").value;
      const lastName = document.getElementById("lastname").value;
      const phoneMail = document.getElementById("phone_email").value;
      const birthDate = document.getElementById("birthdate").value;
      const gender = document.querySelector("input[type=radio]:checked").value;
      const welcomeUser = `Olá, ${firstName} ${lastName} ${gender} ${phoneMail} ${birthDate}`;
      document.querySelector(".right-content").innerHTML = `${welcomeUser}`;    
      }
  }
  return false;
});