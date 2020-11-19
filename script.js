const button = document.getElementById('button-login');
const label = document.getElementById('user-email-phone');

addEventListener('click', (event) => {
  if (event.target === button) {
    alert(label.value);
  }
});
