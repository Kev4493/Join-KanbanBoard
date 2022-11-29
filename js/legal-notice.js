async function initLegalNotice() {
    await includeHTML();
    setURL('https://kanbanboard.kev-wagner.com/smallest_backend_ever');
    // await loadAllTasks();
    activeLegalNoticeLink();
}


function activeLegalNoticeLink() {
    document.getElementById('legalnotice-link').classList.add('active-link')
}