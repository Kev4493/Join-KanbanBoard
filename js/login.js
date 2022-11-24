let users = [
    {
        'email': 'kevin_wagner4493@web.de', 
        'password': 'test123'
    }
]

function openSignUpDialog() {
    let logInDialog = document.getElementById('log-in-box');
    let signUpDialog = document.getElementById('sign-up-box');

    logInDialog.classList.add('d-none');
    signUpDialog.classList.remove('d-none');
}


function closeSignUpDialog() {
    let signUpDialog = document.getElementById('sign-up-box');
    let logInDialog = document.getElementById('log-in-box');

    signUpDialog.classList.add('d-none');
    logInDialog.classList.remove('d-none');
}