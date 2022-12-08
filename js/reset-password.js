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


async function onSubmitPW(event) {
    event.preventDefault();
    newPW = document.getElementById('password').value;
    user.password = newPW;
    await saveAllUsers();
    await loadAllUsers();
}