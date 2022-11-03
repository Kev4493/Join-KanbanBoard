async function initHome() {
    includeHTML();
    // setURL('https://kevin-wagner.developerakademie.net/smallest_backend_ever');
    setURL('https://kanbanboard.kev-wagner.com/smallest_backend_ever');
    await loadAllTasks();
    // loadAllCounters();
    activeHomeNavLink();
    greetingUsers();
}


function activeHomeNavLink() {
    document.getElementById('home-link').classList.add('active-link')
}


function greetingUsers() {
    let myDate = new Date()
    let hours = myDate.getHours();
    let greetingMessage;

    if (hours < 12) {
        greetingMessage = 'Good morning,';
    } else if (hours >= 12 && hours <= 17) {
        greetingMessage = 'Good afternoon,';
    } else if (hours >= 17 && hours <= 24) {
        greetingMessage = 'Good evening,';
    }

    document.getElementById('welcome-text').innerHTML = greetingMessage;

    // setCurrentDate();
    setCurrentTime();
}


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