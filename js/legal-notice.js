async function initLegalNotice() {
    includeHTML();
    setURL('https://kanbanboard.kev-wagner.com/smallest_backend_ever');
    activeLegalNoticeLink();
}

function activeLegalNoticeLink() {
    document.getElementById('legalnotice-link').classList.add('active-link')
}