const enterBtn = document.querySelector('.form-control');
const customGender = document.querySelector('#custom');

enterBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const emailValue = document.getElementById('user-email-phone');
  alert(emailValue.value);
});


customGender.addEventListener('change', () => {
  const genderInput = document.querySelector('.gender-custom');
  genderInput.style.display = 'block';
});
