async function initLogin() {
    // setURL('https://kevin-wagner.developerakademie.net/Join-Javascript/smallest_backend_ever');
    setURL('https://join.kev-wagner.com/Join-Javascript/smallest_backend_ever');
    await loadAllUsers();
}


let allUsers = [];
let currentUser;


function openSignUpDialog() {
    let logInDialog = document.getElementById('log-in-box');
    let signUpDialog = document.getElementById('sign-up-box');
    let PWdialog = document.getElementById('reset-dialog')

    logInDialog.classList.add('d-none');
    signUpDialog.classList.remove('d-none');
    PWdialog.classList.add('d-none');
}


function closeSignUpDialog() {
    let signUpDialog = document.getElementById('sign-up-box');
    let logInDialog = document.getElementById('log-in-box');

    signUpDialog.classList.add('d-none');
    logInDialog.classList.remove('d-none');
}


async function signUp(e) {
    e.preventDefault();

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

    return false;
}


async function saveAllUsers() {
    await backend.setItem('allUsers', JSON.stringify(allUsers));
}


async function saveCurrentUser() {
    await backend.setItem('currentUser', JSON.stringify(currentUser));
}


async function loadAllUsers() {
    await downloadFromServer();
    allUsers = JSON.parse(backend.getItem('allUsers')) || [];
}


async function loadCurrentUser() {
    await downloadFromServer();
    currentUser = JSON.parse(backend.getItem('currentUser')) || [];
}


async function deleteAllUsers() {
    await backend.deleteItem('allUsers');
}


function signUpNotification() {
    document.getElementById('notification-signup').classList.remove('d-none');

    setTimeout(function () {
        document.getElementById('notification-signup').classList.add('d-none')
    }, 3000)
}


async function logIn() {
    let email = document.getElementById('login-mail');
    let password = document.getElementById('login-password');
    let user = allUsers.find(u => u.email == email.value && u.password == password.value);


    if (user) {
        currentUser = user.name;
        await saveCurrentUser()
        email.classList.remove('wrong-email')
        password.classList.remove('wrong-password')
        email.classList.add('correct-email')
        password.classList.add('correct-password')
        checkHref();

    } else {
        email.classList.add('wrong-email')
        password.classList.add('wrong-password')
        email.classList.remove('correct-email')
        password.classList.remove('correct-password')
    }

}


async function guestLogin() {
    currentUser = 'Guest';
    await saveCurrentUser();
    checkHref();
}


function checkHref() {
    if (window.location.href.indexOf("wagner") > -1) {
        // The URL contains the string 'kevin-wagner'(DA-Server)
        window.location.href = '../Join-Javascript/html/home.html';
      } else {
        // The URL do not contain the string 'kevin-wagner' (Lokal)
        window.location.href = '../html/home.html';
      }
}


function openPwResetDialog() {
    document.getElementById('reset-dialog').classList.remove('d-none');
    document.getElementById('log-in-box').classList.add('d-none');
}


function closeResetDialog() {
    document.getElementById('reset-dialog').classList.add('d-none');
    document.getElementById('log-in-box').classList.remove('d-none');
}



// Reset password:
async function onSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target); // Create a FormData based on our Form Element in HTML
    let response = await action(formData);

    if(response.ok) {
        sentEmailNotification();
    } else {
        sentEmailProblemNotification();
    }

    document.getElementById('email').value = '';
    closeResetDialog();
}


function action(formData) {
    const input = 'https://kevin-wagner.developerakademie.net/Join-Javascript/send_mail.php';
    const requestInit = {
        method: 'post',
        body: formData
    };

    return fetch(
        input,
        requestInit
    );
}


function sentEmailNotification() {
    document.getElementById('notification-send-email').classList.remove('d-none');

    setTimeout(function () {
        document.getElementById('notification-send-email').classList.add('d-none')
    }, 3000)
}


function sentEmailProblemNotification() {
    document.getElementById('notification-send-email-problem').classList.remove('d-none');

    setTimeout(function () {
        document.getElementById('notification-send-email-problem').classList.add('d-none')
    }, 3000)
}