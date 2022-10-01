function initBoard() {
    setURL('http://kevin-wagner.developerakademie.net/smallest_backend_ever');
    includeHTML();
}

function openAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.remove('d-none');
};

function closeAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.add('d-none');
};