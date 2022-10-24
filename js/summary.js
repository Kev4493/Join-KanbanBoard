async function initSummary() {
    includeHTML();
    setURL('https://kevin-wagner.developerakademie.net/smallest_backend_ever');
    await loadAllTasks();
    loadAllCounters();
}

function loadAllCounters() {
    boardCounter();
    progressCounter();
}

function boardCounter() {
    let tasksInBoard = allTasks.length;
    let counterDisplay = document.getElementById('board-counter');

    counterDisplay.innerHTML = /*html*/ `
        <p>${tasksInBoard}</p>
    `
}

function progressCounter() {
    let tasksInProgress = allTasks.filter(t => t['status'] == 'in-progress').length;
    let counterDisplay = document.getElementById('progress-counter');

    counterDisplay.innerHTML = /*html*/ `
        <p>${tasksInProgress}</p>
    `
    console.log('Tasks in Progress: ', tasksInProgress);
}