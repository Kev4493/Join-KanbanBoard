async function initResetPassword() {
    setURL('https://kanbanboard.kev-wagner.com/smallest_backend_ever');
    await loadAllUsers();
    email = getEmailUrlParameter;
}


let email = "";


function getEmailUrlParameter() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get('email');
    return email;
}


function onSubmit(event) {
    event.preventDefault();
}