function login() {
  const getForm = document.querySelector('.facebook-login');
  getForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let emailPhone = getForm.emailPhone.value;
    console.log(emailPhone);
    alert(emailPhone);
  });
};

function main() {
    login();
};

main();
