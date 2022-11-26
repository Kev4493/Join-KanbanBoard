async function initLogin() {
    includeHTML();
    setURL('https://kanbanboard.kev-wagner.com/smallest_backend_ever');
    await loadAllUsers();
}


let allUsers = [];
let currentUser;


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

    allUsers.push(user);
    await saveAllUsers();

    name.value = '';
    email.value = '';
    password.value = '';

    signUpNotification();
    closeSignUpDialog();
}


async function saveAllUsers() {
    await backend.setItem('allUsers', JSON.stringify(allUsers));
}


async function loadAllUsers() {
    await downloadFromServer();
    allUsers = JSON.parse(backend.getItem('allUsers')) || [];
}

async function deleteAllUsers() {
    await backend.deleteItem('allUsers');
}


function signUpNotification() {
    document.getElementById('notification').classList.remove('d-none');

    setTimeout(function () {
        document.getElementById('notification').classList.add('d-none')
    }, 3000)
}


function logIn() {
    let email = document.getElementById('login-mail');
    let password = document.getElementById('login-password');
    let user = allUsers.find(u => u.email == email.value && u.password == password.value);

    for (let i = 0; i < allUsers.length; i++) {

        if (email.value == allUsers[i].email && password.value == allUsers[i].password) {
            console.log('user found:', allUsers[i].name);
            email.classList.remove('wrong-email')
            password.classList.remove('wrong-password')
            email.classList.add('correct-email')
            password.classList.add('correct-password')
            window.location.href = '/html/home.html';
        } else {
            email.classList.add('wrong-email')
            password.classList.add('wrong-password')
            email.classList.remove('correct-email')
            password.classList.remove('correct-password')
        }


    }
}


