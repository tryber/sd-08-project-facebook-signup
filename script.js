let btEntrar = document.getElementById("button-login");

btEntrar.addEventListener('click', function () {
    let m = document.getElementById("user-email-phone").value;
    alert(m);

});

function showForm (value) {
    let dataInput = document.getElementById('data-input')
    let createSpan = document.createElement('span');
    createSpan.innerText = value;
    createSpan.style.display = 'block';
    dataInput.appendChild(createSpan);
}

let signUpForm = document.forms['signUp-form'];

function validateForm (event) {
    event.preventDefault();

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
    } else if (signUpForm['gender'].value === '') {
        alert('Campos inválidos');
    } else {
        let inputValueName = 'Olá ' + signUpForm['firstname'].value + ' ' + signUpForm['lastname'].value;
        showForm (inputValueName);
        let inputValueContact = 'Celular ou email: ' + signUpForm['phone_email'].value;
        showForm (inputValueContact);
        let inputValueBday = 'Data de nascimento: ' + signUpForm['birthdate'].value;
        showForm (inputValueBday);
        let inputValueGender = 'Gênero: ' + signUpForm['gender'].value;
        showForm (inputValueGender);

        document.querySelector('.form-style').style.display = 'none';
    }
    
}

let btSubmit = document.getElementById('facebook-register');

btSubmit.addEventListener('click', validateForm);


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
