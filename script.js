let btEntrar = document.getElementById("button-login");


btEntrar.addEventListener('click', function () {
    let m = document.getElementById("user-email-phone").value;
    alert(m);

});

let btSubmit = document.getElementById('facebook-register');
let signUpForm = document.forms['signUp-form'];

btSubmit.addEventListener('click', function () {

    if (signUpForm['firstname'].value === '') {
        alert('Campos inválidos');
    } else if (signUpForm['lastname'].value === '') {
        alert('Campos inválidos');
    } else if (signUpForm['phone_email'].value === '') {
        alert('Campos inválidos');
    } else if (signUpForm['password'].value === '') {
        alert('Campos inválidos');
    } else if (signUpForm['birthdate'].value === '') {
        alert('Campos inválidos');
    } else if (signUpForm['gender'].checked === false) {
        alert('Campos inválidos');
    }
});

let genderOption = document.getElementById('label-gender');

genderOption.addEventListener('click', function () {
    let btGenderPers = document.querySelector('#pers').checked;
    if (btGenderPers) {
        let inputPersGender = document.createElement('input');
        inputPersGender.type = 'text';
        inputPersGender.name = 'gender-custom';
        inputPersGender.placeholder = 'Gênero (opcional)';
        genderOption.appendChild(inputPersGender);
    }

});
