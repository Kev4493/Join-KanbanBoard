async function initLegalNotice() {
    await includeHTML();
    // setURL('https://kevin-wagner.developerakademie.net/Join-Javascript/smallest_backend_ever');
    setURL('https://join.kev-wagner.com/Join-Javascript/smallest_backend_ever');
    activeLegalNoticeLink();
}


function activeLegalNoticeLink() {
    document.getElementById('legalnotice-link').classList.add('active-link')
}