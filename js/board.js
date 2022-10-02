function initBoard() {
    includeHTML();
    setURL('https://kevin-wagner.developerakademie.net/smallest_backend_ever');
    loadAllTasks();
    renderTasks();
}


function deleteTask(i) {
    allTasks.splice(i, 1);
    renderTasks();
    saveTasks();
}


function colorOfAssigned(i) {
    if (allTasks.assigned == 'Kevin') {
        document.getElementById('assigned-to').classList.add('bg-color')
    }
}


function openAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.remove('d-none');
};


function closeAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.add('d-none');
};