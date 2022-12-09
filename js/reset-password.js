async function initResetPassword() {
    setURL('https://kanbanboard.kev-wagner.com/smallest_backend_ever');
    await loadAllUsers();
    email = getEmailUrlParameter();
    getUser();
}


let user = "";
let email = "";
let newPW = "";


function getUser() {
    user = allUsers.find( u => u.email === email)
}


function getEmailUrlParameter() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get('email');
    return email;
}


async function onSubmitPW(e) {
    e.preventDefault();
    newPW = document.getElementById('password').value;
    user.password = newPW;
    document.getElementById('password').value = "";
    await saveAllUsers();
    await loadAllUsers();
    passwordNotification();
    backToLoginBtn();
    return false;
}


function passwordNotification() {
    document.getElementById('notification-password').classList.remove('d-none');

    setTimeout(function () {
        document.getElementById('notification-password').classList.add('d-none')
    }, 2500)
}


function backToLoginBtn() {
    document.getElementById('back-to-login').classList.remove('d-none');
}