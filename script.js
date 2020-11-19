function login() {
  const getForm = document.querySelector('.facebook-login');
  getForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailPhone = getForm.emailPhone.value;
    alert(emailPhone);
  });
}

function main() {
  login();
}

main();
