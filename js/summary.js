async function initSummary() {
    includeHTML();
    // setURL('https://kevin-wagner.developerakademie.net/smallest_backend_ever');
    setURL('https://kanbanboard.kev-wagner.com/smallest_backend_ever');
    await loadAllTasks();
    loadAllCounters();
    activeSummaryNavLink();
    // greetingUsers();
}


function loadAllCounters() {
    boardCounter();
    progressCounter();
    feedbackCounter();
    toDoCounter();
    doneCounter();
    urgentCounter();
    showNearestUrgentDate();
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


function showNearestUrgentDate() {
    let allUrgentDates = [];
    let urgentTasks = allTasks.filter(t => t['prio'] == 'urgent');
    let deadlineContainer = document.getElementById('deadline-date')

    for (let i = 0; i < urgentTasks.length; i++) {
        const dueDate = urgentTasks[i].dueDate;

        // alle dueDates in timestamp umwandeln:
        let allDatesInTimestamp = new Date(dueDate).getTime();

        // alle timestamps im Array speichern:
        allUrgentDates.push(allDatesInTimestamp);
    }

    // das Array mit allen timestamps der größe nach sortieren (niedrigster timestamp zuerst):
    allUrgentDates.sort(function (x, y) {
        return x - y;
    })

    // der niedrigste timestamp aus dem Array in Datum konvertieren:
    let convertedDate = new Date(allUrgentDates[0]).toLocaleString("default", {
        "year": "numeric",
        "month": "long",
        "day": "numeric",
    });

    // Datum rendern:
    deadlineContainer.innerHTML = convertedDate;
}

function activeSummaryNavLink() {
    document.getElementById('summary-link').classList.add('active-link');
    document.getElementById('summary-link-mobile').classList.add('active-link');
}


// function greetingUsers() {
//     let myDate = new Date()
//     let hours = myDate.getHours();
//     let greetingMessage;

//     if (hours < 12) {
//         greetingMessage = 'Good morning,';
//     } else if (hours >= 12 && hours <= 17) {
//         greetingMessage = 'Good afternoon,';
//     } else if (hours >= 17 && hours <= 24) {
//         greetingMessage = 'Good evening,';
//     }

//     document.getElementById('welcome-text').innerHTML = greetingMessage;

//     // setCurrentDate();
//     setCurrentTime();
// }


function setCurrentDate() {
    let currentDate = new Date().toLocaleString("default", {
        "year": "numeric",
        "month": "long",
        "day": "numeric",
    });

    document.getElementById('date').innerHTML = currentDate;
}


function setCurrentTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    setTimeout(setCurrentTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}