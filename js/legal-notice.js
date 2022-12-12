async function initLegalNotice() {
    await includeHTML();
    // setURL('https://kanbanboard.kev-wagner.com/smallest_backend_ever');
    setURL('https://kevin-wagner.developerakademie.net/Join-Javascript/smallest_backend_ever');
    activeLegalNoticeLink();
}


function activeLegalNoticeLink() {
    document.getElementById('legalnotice-link').classList.add('active-link')
}