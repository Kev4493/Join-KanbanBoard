function init() {
    includeHTML();
}

function openSummary() {
    document.getElementById('add-task').classList.add('d-none')
    document.getElementById('board').classList.add('d-none')
    document.getElementById('summary').classList.remove('d-none')
}

function openBoard() {
    document.getElementById('add-task').classList.add('d-none')
    document.getElementById('summary').classList.add('d-none')
    document.getElementById('board').classList.remove('d-none')


}

function openAddTask() {
    document.getElementById('summary').classList.add('d-none')
    document.getElementById('board').classList.add('d-none')
    document.getElementById('add-task').classList.remove('d-none')
}

function openAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.remove('d-none');
}