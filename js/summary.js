async function initSummary() {
    includeHTML();
    setURL('https://kevin-wagner.developerakademie.net/smallest_backend_ever');
    await loadAllTasks();
    loadAllCounters();
}

function loadAllCounters() {
    boardCounter();
    progressCounter();
    feedbackCounter();
    toDoCounter();
    doneCounter();
    urgentCounter();
    showNearestDate();
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
}


function feedbackCounter() {
    let tasksInAwaitingFeedback = allTasks.filter(t => t['status'] == 'awaiting-feedback').length;
    let counterDisplay = document.getElementById('feedback-counter');

    counterDisplay.innerHTML = /*html*/ `
        <p>${tasksInAwaitingFeedback}</p>
    `
}


function toDoCounter() {
    let tasksInTodo = allTasks.filter(t => t['status'] == 'todo').length;
    let counterDisplay = document.getElementById('todo-counter');

    counterDisplay.innerHTML = /*html*/ `
        <p>${tasksInTodo}</p>
    `
}


function doneCounter() {
    let doneCategory = allTasks.filter(t => t['status'] == 'done').length;
    let counterDisplay = document.getElementById('done-counter');

    counterDisplay.innerHTML = /*html*/ `
        <p>${doneCategory}</p>
    `
}

function urgentCounter() {
    let urgentPrio = allTasks.filter(t => t['prio'] == 'urgent').length;
    let counterDisplay = document.getElementById('urgent-counter');

    counterDisplay.innerHTML = /*html*/ `
        <p>${urgentPrio}</p>
    `
}


function showNearestDate() {
    let today = new Date().toLocaleString("default", {
        "year": "numeric",
        "month": "long",
        "day": "numeric",
    });

    let urgentPrio = allTasks.filter(t => t['prio'] == 'urgent');

    for (let i = 0; i < urgentPrio.length; i++) {
        const element = urgentPrio[i].dueDate;
        console.log(element);
    }

    
}