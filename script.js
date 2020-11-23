window.onload = () => {
  // document.getElementById('gender-personalized-input').hidden = true;
};

document.getElementById('button-login').addEventListener('click', () => {
  alert(document.getElementById('user-email-phone').value);
  //
});

// document.getElementById('gender-personalized').addEventListener('click', () => {
//   document.getElementById('gender-personalized-input').classList.remove('hidden');
//   console.log('ssss');
//   //
// });

document.getElementById('gender-select').addEventListener('click', (e) => {
  if (e.target.classList.contains('sel-gender')) {
    document.getElementById('gender-personalized-input').classList.add('hidden');
    if (e.target.classList.contains('gender-personalized')) {
      document.getElementById('gender-personalized-input').classList.remove('hidden');
    }
  }
});
