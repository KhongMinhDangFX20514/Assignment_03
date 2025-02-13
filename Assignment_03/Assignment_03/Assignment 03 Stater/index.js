
validateEmail();
toggleElements();
toggleSelfElement();


function validateEmail() {
    const emailInput = document.getElementById('email-input');
    const formInput = document.getElementById('validate-form');
    const personalInfo = document.getElementById('personal-info');
    const btnSubmit = document.getElementById('btn-validate');
    const emailValidate = document.querySelector('.email-validating-error');

    btnSubmit.addEventListener('click', () => {
        isValidEmail(emailInput.value) ?
            toggle() : emailValidatingError()

        function toggle() {
            personalInfo.classList.toggle('d-none');
            formInput.classList.toggle('d-none');
            emailValidate.classList.add('d-none');
        }

        function emailValidatingError() {
            emailValidate.classList.remove('d-none');
        }
    })
}

function preventSubmit() {
    return false;
}

function isValidEmail(email) {
    // regex
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

