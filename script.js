function buttonLogin() {
  const button = document.querySelector('#button-login');
  button.addEventListener('click', function () {
    const email = document.querySelector('#user-email-phone').value;
    alert(email);
  });
}

buttonLogin();

document.getElementById('genderAll').addEventListener('click', (e) => {
  if (e.target.classList.contains('gender-sel')) {
    document.getElementById('genderText').classList.add('hidden');
    if (e.target.classList.contains('gender-personalized')) {
      document.getElementById('genderText').classList.remove('hidden');
    }
  }
});
