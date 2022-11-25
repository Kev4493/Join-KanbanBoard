async function initLogin() {
    includeHTML();
    setURL('https://kanbanboard.kev-wagner.com/smallest_backend_ever');
    await loadAllUsers();
}


let users = [];


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


async function signUp() {
    let name = document.getElementById('signup-name');
    let email = document.getElementById('signup-mail');
    let password = document.getElementById('signup-password');

    let user = {
        'name': name.value,
        'email': email.value,
        'password': password.value
    };

    users.push(user);
    await saveAllUsers();

    name.value = '';
    email.value = '';
    password.value = '';

    signUpNotification();
    closeSignUpDialog();
}


async function saveAllUsers() {
    await backend.setItem('users', JSON.stringify(users));
}


async function loadAllUsers() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}

async function deleteAllUsers() {
    await backend.deleteItem('users');
}


function signUpNotification() {
    document.getElementById('notification').classList.remove('d-none');

    setTimeout(function () {
        document.getElementById('notification').classList.add('d-none')
    }, 3000)
}
